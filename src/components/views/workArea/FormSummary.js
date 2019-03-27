import React, { Component } from 'react'
import { connect } from 'react-redux'
import TestArea from './TestArea'
import * as actions from '../../../redux/actions/indexActions'
import { CSSTransitionGroup, Transition } from 'react-transition-group'

class FormSummary extends Component {
  constructor(props) {
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
  
  
  answering() {
    let pointsPerAnswer = this.props.pointsPerAnswer
    console.log('answering clicked ' + this.props.testInterval.answer)
    let userAnswer = this.props.userAnswer
    let isAnswerTrue = userAnswer === this.props.testInterval.answer
    let intervalName = this.props.testInterval.name
    console.log(intervalName)
    this.props.setAnsweringDisabled(true)
    this.props.addAnswerToResult(intervalName, isAnswerTrue)
    this.props.addPointsToResult(pointsPerAnswer, isAnswerTrue)
  }
  
  componentDidMount() {
    let idx = this.props.currentIntervalIdx
    let testArr = this.props.testArr
    // this.timer()
  }
  
  render() {
    let idx = this.props.currentIntervalIdx
    let testArr = this.props.testArr
    let intervalData = this.props.testIntervalData
    
    return (
      <div className='summary'>
        {/*<ConditionArea*/}
          {/*// timer={this.timer}*/}
        {/*/>*/}
        <TestArea/>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  testRendered: state.testRendered,
  pointsPerAnswer: state.pointsPerAnswer,
  language: state.languageSelected,
  timeRemaining: state.timeRemaining,
  timeForAnswer: state.testIntervalData.timeForAnswer,
  testArr: state.testArr,
  tasksRemaining: state.tasksRemaining,
  testIntervalData: state.testIntervalData,
  intervalIdx: state.currentIntervalIdx,
  testInterval: state.currentInterval
})
const mapDispatchToProps = (dispatch, state) => ({
  setAnsweringDisabled: boolean => dispatch(actions.setAnsweringDisabled(boolean)),
  actionTimer: () => dispatch(actions.actionTimer()),
  setTimeRemaining: number => dispatch(actions.setTimeRemaining(number)),
  changeTasksRemaining: number => dispatch(actions.changeTasksRemaining(number)),
  setCurrentIntervalIdx: number => dispatch(actions.setCurrentIntervalIdx(number)),
  addPointsToResult: (number, boolean) => dispatch(actions.addPointsToResult(number, boolean)),
  setCurrentInterval: testArr => dispatch(actions.setCurrentInterval(testArr)),
  addAnswerToResult: (sessionAnswers, intervalName, boolean) => dispatch(actions.addAnswerToResult(sessionAnswers, intervalName, boolean))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormSummary)
