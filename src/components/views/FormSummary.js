import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import TestArea from './TestArea'
import TestField from './TestField'
import jquery from 'jquery'
import ConditionArea from './ConditionArea'

let $ = jquery

class FormSummary extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // testArr: this.props.testArr,
      // testIntervalData: this.props.testIntervalData,
      timeRemaining: this.props.testIntervalData.timeForAnswer,
      tasksRemaining: this.props.testArr.length,
      answerVisible: false,
      testInterval: this.props.testArr[0],
      testFinished: false
    }
    this.passIndex = (() => {
      let idx = 0
      return function () {
        console.log(idx++)
        return idx
      }
    })()
    this.timer = () => setTimeout(
      () => {
        let timeRemaining = this.state.timeRemaining
        if (timeRemaining > 0) {
          setTimeout(this.timer)
          this.setState({'timeRemaining': this.state.timeRemaining - 1})
        } else {
          this.setState({answerVisible: true})
          let answerBase = this.state.testInterval.baseTone
          answerBase.split(' ').join('')
          let selector = `path#${answerBase.split(' ').join('')}`
          console.log(selector)
          $('svg #answerBase').css('background-color', 'red')
          
          clearTimeout(this.timer)
        }
      }, 500)
  }
  
  onTestButtonClick (e) {
    e.preventDefault()
    console.log('test button clicked')
    this.testRendered = true
    this.setState(
      {tasksRemaining: this.state.tasksRemaining - 1}
    )
    this.timer()
  }
  
  nextQuestionClicked (e) {
    e.preventDefault()
    console.log('next question clicked')
    this.setState({
      answerVisible: false,
      tasksRemaining: this.state.tasksRemaining - 1
    })
    let idxClicked = this.passIndex()
    if (idxClicked === this.props.testArr.length) {
      // alert('test finished')
      this.setState({testFinished: true})
    }
    let interval = this.props.testArr[idxClicked]
    this.setState({
      testInterval: interval,
      answerVisible: false,
      timeRemaining: this.props.testIntervalData.timeForAnswer
    })
    this.timer()
    let testedAnswer = $('#testedAnswer').val()
    console.log(testedAnswer)
  }
  
  render () {
    let testArr = this.props.testArr
    let intervalData = this.props.testIntervalData
    let testRendered = this.testRendered
    console.log(testRendered)
    return (
      <div className='summary'>
        <ConditionArea timeRemaining={this.state.timeRemaining} text1={this.state.tasksRemaining} intervalData={intervalData}
                       onClick={this.onTestButtonClick.bind(this)}/>
        <TestArea
          testRendered={testRendered}
          testArr={testArr}
          testInterval={this.state.testInterval}
          answerVisible={this.state.answerVisible}
          testFinished={this.state.testFinished}
          nextQuestionClicked={this.nextQuestionClicked.bind(this)}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  testArr: state.testArr,
  testIntervalData: state.testIntervalData
})
export default connect(mapStateToProps)(FormSummary)
