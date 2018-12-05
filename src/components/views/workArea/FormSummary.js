import React, { Component } from 'react'
import { connect } from 'react-redux'
import TestArea from './TestArea'
import ConditionArea from './ConditionArea'
import eventWorker from '../../../appWorkers/eventWorker'
import * as actions from '../../../redux/actions/indexActions'
import jquery from 'jquery'
import languagesText from '../../../LanguagesData/LanguagesText'

let $ = jquery

class FormSummary extends Component {
  constructor (props) {
    super(props)
    this.state = {
      timeRemaining: this.props.timeForAnswer,
      tasksRemaining: this.props.testArr.length,
      answerVisible: false
    }
    
    this.updateFormSummState = () => {
      this.setState({
        'timeRemaining': this.props.timeForAnswer,
        'answerVisible': false
      })
    }
    
  }
  
  timer () {
    setTimeout(
      () => {
        let timeRemaining = this.state.timeRemaining
        if (timeRemaining > 0) {
          setTimeout(this.timer)
          this.setState({'timeRemaining': this.state.timeRemaining - 1})
        } else {
          this.setState({answerVisible: true})
          this.answering()
          let language = this.props.language
          let dontKnowTxt = languagesText[language].workPane.answerArea.dontKnow
          $('#testedAnswer').val(dontKnowTxt)
          clearTimeout(this.timer)
        }
      }, 500)
  }
  
  answering () {
    let pointsPerAnswer = this.props.pointsPerAnswer
    console.log('answering clicked ' + this.props.testInterval.answer)
    let userAnswer = this.props.userAnswer
    let isAnswerTrue = userAnswer === this.props.testInterval.answer
    let intervalName = this.props.testInterval.name
    console.log(intervalName)
    this.props.addAnswerToResult(intervalName, isAnswerTrue)
    this.props.addPointsToResult(pointsPerAnswer, isAnswerTrue)
  }
  
  componentDidMount () {
    let idx = this.props.currentIntervalIdx
    let testArr = this.props.testArr
    this.timer()
  }
  
  render () {
    let idx = this.props.currentIntervalIdx
    let testArr = this.props.testArr
    let intervalData = this.props.testIntervalData
    eventWorker.baseKeyColorize(this.props.testInterval)
    
    return (
      <div className='summary'>
        <ConditionArea
          timer={this.timer}
          timeRemaining={this.state.timeRemaining}/>
        <TestArea
          timer={this.timer}
          updateFormState={this.updateFormSummState}
          answerVisible={this.state.answerVisible}
          answering={this.answering}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pointsPerAnswer: state.pointsPerAnswer,
  language: state.languageSelected,
  timeForAnswer: state.testIntervalData.timeForAnswer,
  testArr: state.testArr,
  tasksRemaining: state.tasksRemaining,
  testIntervalData: state.testIntervalData,
  intervalIdx: state.currentIntervalIdx,
  testInterval: state.currentInterval
})
const mapDispatchToProps = (dispatch, state) => ({
  changeTasksRemaining: number => dispatch(actions.changeTasksRemaining(number)),
  setCurrentIntervalIdx: number => dispatch(actions.setCurrentIntervalIdx(number)),
  addPointsToResult: (number, boolean) => dispatch(actions.addPointsToResult(number, boolean)),
  setCurrentInterval: testArr => dispatch(actions.setCurrentInterval(testArr)),
  addAnswerToResult: (sessionAnswers, intervalName, boolean) => dispatch(actions.addAnswerToResult(sessionAnswers, intervalName, boolean))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormSummary)
