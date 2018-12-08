import React, { Component } from 'react'
import { connect } from 'react-redux'
import TestArea from './TestArea'
import ConditionArea from './ConditionArea'
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
    this.timer  = () => {
    
      setTimeout(
        () => {
          let timeRemaining = this.props.timeRemaining
          if (timeRemaining > 0) {
            setTimeout(this.timer)
            this.setState({'timeRemaining': this.props.timeRemaining - 1})
          } else {
            this.setState({setAnswerVisible: true})
            this.answering()
            let language = this.props.language
            let dontKnowTxt = languagesText[language].workPane.answerArea.dontKnow
            $('#testedAnswer').val(dontKnowTxt)
            clearTimeout(this.timer)
          }
        }, 500)
    }
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
    // this.timer()
  }
  
  render () {
    let idx = this.props.currentIntervalIdx
    let testArr = this.props.testArr
    let intervalData = this.props.testIntervalData
    
    return (
      <div className='summary'>
        <ConditionArea
          timer={this.timer}
        />
        <TestArea
          timer={this.timer}
          timeRemaining={this.state.timeRemaining}
          updateFormState={this.updateFormSummState}
          answering={this.answering}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
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
  actionTimer:() => dispatch(actions.actionTimer()),
  setTimeRemaining: number => dispatch(actions.setTimeRemaining(number)),
  changeTasksRemaining: number => dispatch(actions.changeTasksRemaining(number)),
  setCurrentIntervalIdx: number => dispatch(actions.setCurrentIntervalIdx(number)),
  addPointsToResult: (number, boolean) => dispatch(actions.addPointsToResult(number, boolean)),
  setCurrentInterval: testArr => dispatch(actions.setCurrentInterval(testArr)),
  addAnswerToResult: (sessionAnswers, intervalName, boolean) => dispatch(actions.addAnswerToResult(sessionAnswers, intervalName, boolean))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormSummary)
