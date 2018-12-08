import React, { Component } from 'react'
import TestField from './TestField'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../../redux/actions/indexActions'
import jquery from 'jquery'
import ResultStats from './ResultStats'
import eventWorker from '../../../appWorkers/eventWorker'
import languagesText from '../../../LanguagesData/LanguagesText'
import AnswerArea from './AnswerArea'
import resultsHandler from '../../../appWorkers/resultHandler'

let $ = jquery

class TestArea extends Component {
  constructor (props) {
    super(props)
    this.state = {
      idxClick: 0,
      answerVisible: false,
      answeringDisabled: false,
      testFinished: false
    }
  }
  
  language = this.props.language
  texts = languagesText[this.language]
  
  nextQuestionClicked (e, props) {
    e.preventDefault()
    console.log('next question clicked')
    let language = this.props.language
    if (this.props.tasksRemaining > 0) {
      $('#testedAnswer').val(`${languagesText[language].workPane.answerArea.dontKnow}`)
      this.props.changeTasksRemaining(this.props.tasksRemaining)
      this.setState({answerVisible: false})
      this.setState({answeringDisabled: false})
      let testArr = this.props.testArr
      this.props.setCurrentInterval(testArr)
      this.setState({
        // testInterval: this.props.interval,
        answerVisible: false
      })
      eventWorker.timer(props)
      this.props.updateFormState()
      eventWorker.baseKeyColorize(this.props.testInterval)
    } else {
      this.setState({testFinished: true})
    }
  }
  
  answeringClicked (e) {
    e.preventDefault()
    resultsHandler.answering(this.props)
    clearTimeout(eventWorker.timer)
    this.setState({answeringDisabled: true})
  }
  
  render () {
    let language = this.props.language
    let texts = languagesText[this.props.language].workPane.workHeader
    if (this.props.testRendered) {
      if (!this.state.testFinished) {
        let interval = this.props.testInterval
        let testArr = this.props.testArr
        
        let texts = languagesText[language].workPane.testArea
        return (
          <div className='test-area'>
            
            <div className='condition'>
              <TestField
                key='0'
                label={texts.interval}
                text={interval.name[language]}/>
              <TestField
                key='1'
                label={texts.direction}
                text={interval.direction === 'up'
                  ? String.fromCharCode(8593) : String.fromCharCode(8595)}/>
              <TestField
                key='2'
                label={texts.baseTon}
                text={interval.baseTone}/>
            </div>
            
            <AnswerArea disabled={this.state.answeringDisabled}
                        onSendAnswClick={this.answeringClicked}
                        interval={interval}/>
            <button id='next-question' className='summary-field'
                    onClick={eventWorker.nextQuestionClicked.bind(this)}>
              {texts.nextQuest}
            </button>
            
            <ResultStats/>
          
          </div>
        )
      } else {
        // let language = this.props.language
        //   let texts = languagesText[language]
        return (
          <div className='testFinished'>
            <p>Test finished!</p>
            <p>Please choose:</p>
            <Link to='/control-form' className='summary-field' onClick={() => {
              eventWorker.redirectPageWithNullTestData('/control-form')
              window.localStorage.clear()
            }
            }>{texts.fromBeginning.toUpperCase()}</Link>
            
            <button className='summary-field link'
                    onClick={eventWorker.newTestLink.bind(this)}>
              under construction {texts.sameIntervals}
            </button>
          
          </div>
        )
      }
    } else {
      return <div/>
    }
  }
}

const mapStateToProps = store => {
  return {
    timeRemaining: store.timeRemaining,
    timeForAnswer: store.testIntervalData.timeForAnswer,
    language: store.languageSelected,
    testRendered: store.testRendered,
    testIntervalData: store.testIntervalData,
    intervalsForTest: store.testIntervalData.intervalsForTest,
    numberOfTasks: store.testIntervalData.numberOfTasks,
    totalPoints: store.totalPoints,
    sessionPoints: store.sessionPoints,
    sessionAnswers: store.sessionAnswers,
    pointsPerAnswer: store.pointsPerAnswer,
    userAnswer: store.userAnswer,
    tasksRemaining: store.tasksRemaining,
    testInterval: store.currentInterval,
    testArr: store.testArr,
    currentIntervalIdx: store.currentIntervalIdx
    
  }
}
const mapDispatchToProps = (dispatch, state) => ({
  generateNewTest: (intervalsForTest, numberOfTasks) => dispatch(actions.generateTestArr(intervalsForTest, numberOfTasks)),
  addPointsToResult: (number, boolean) => dispatch(actions.addPointsToResult(number, boolean)),
  changeTasksRemaining: number => dispatch(actions.changeTasksRemaining(number)),
  setAnswerVisible: boolean => dispatch(actions.setAnswerVisible(boolean)),
  setTimeRemaining: number => dispatch(actions.setTimeRemaining(number)),
  setCurrentInterval: testArr => dispatch(actions.setCurrentInterval(testArr)),
  addAnswerToResult: (sessionAnswers, intervalName, boolean) => dispatch(actions.addAnswerToResult(sessionAnswers, intervalName, boolean))
})
export default connect(mapStateToProps, mapDispatchToProps)(TestArea)
