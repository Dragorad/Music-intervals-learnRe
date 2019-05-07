import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../redux/actions/indexActions'
import ResultStats from './ResultStats'
import eventWorker from '../../../appWorkers/eventWorker'
import languagesText from '../../../LanguagesData/LanguagesText'
import AnswerArea from './AnswerArea'
import ConditionFields from './ConditionFields'
import NewTestLink from './NewTestLink'
import NewTestSameIntervals from './NewTestSameIntervals'

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
  
  render () {
    let text = languagesText[this.props.language].workPane
    let BtnTexts = text.workHeader
    let language = this.props.language
    let testBtnVisible = this.props.testArr.length > 0 && !this.props.testRendered
    let texts = languagesText[language].workPane
    let startBtnTxt = texts.conditionArea.testBegin
    // let interval = this.props.testInterval
    // let testArr = this.props.testArr
    let testRendered = this.props.testRendered
    let testFinished = this.state.testFinished
    // let resultSaved = this.props.resultSaved
    
    return (
      <div className={'summary'}>
        {testFinished && <ResultStats/>}
        {testBtnVisible &&
        <button className='summary-field'
                disabled={this.props.testRendered}
                name='test-start-button'
                onClick={eventWorker.onTestButtonClick.bind(this)}>
          {startBtnTxt}
        </button>
        }
        
        <div className='re-test-area'>
          <NewTestLink
            props={this.props}
            texts={text.workHeader}/>
          <NewTestSameIntervals
            texts={text.workHeader}/>
        </div>
        {this.props.testRendered &&
        
        (!testFinished &&
          <div className='test-area'>
            
            <ConditionFields
              interval={this.props.interval} language={this.props.language}/>
            
            <AnswerArea

              onSendAnswClick={this.props.onSendAnswClick}
              interval={this.props.interval}/>
            <button id='next-question' className='summary-field'
                    onClick={eventWorker.nextQuestionClicked.bind(this)}>
              {texts.testArea.nextQuest}
            </button>
          
          </div>)}
      
      </div>
    )
    
  }
}

const mapStateToProps = store => {
  return {
    interval: store.currentInterval,
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
    answeringDisabled: store.answeringDisabled,
    userAnswer: store.userAnswer,
    tasksRemaining: store.tasksRemaining,
    testInterval: store.currentInterval,
    testArr: store.testArr,
    currentIntervalIdx: store.currentIntervalIdx
    
  }
}
const mapDispatchToProps = dispatch => ({
  setTestRendered: boolean => dispatch(actions.setTestRendered(boolean)),
  setAnsweringDisabled: boolean => dispatch(actions.setAnsweringDisabled(boolean)),
  nextQuestionClickedAction: () => dispatch(actions.nextQuestionClickedAction()),
  timerReset: () => dispatch(actions.timerReset()),
  actionTimer: () => dispatch(actions.actionTimer()),
  setTimerWorking: boolean => dispatch(actions.setTimerWorking(boolean)),
  generateNewTest: (intervalsForTest, numberOfTasks) => dispatch(actions.generateTestArr(intervalsForTest, numberOfTasks)),
  addPointsToResult: (number, boolean) => dispatch(actions.addPointsToResult(number, boolean)),
  changeTasksRemaining: number => dispatch(actions.changeTasksRemaining(number)),
  setAnswerVisible: boolean => dispatch(actions.setAnswerVisible(boolean)),
  setTimeRemaining: number => dispatch(actions.setTimeRemaining(number)),
  setCurrentInterval: testArr => dispatch(actions.setCurrentInterval(testArr)),
  setResultSaved: boolean => dispatch(actions.setResultSaved(boolean)),
  addAnswerToResult: (sessionAnswers, intervalName, boolean) => dispatch(actions.addAnswerToResult(sessionAnswers, intervalName, boolean))
})
export default connect(mapStateToProps, mapDispatchToProps)(TestArea)
