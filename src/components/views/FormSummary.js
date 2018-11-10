import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import TestArea from './TestArea'
import TestField from './TestField'
import jquery from 'jquery'
import ConditionArea from './ConditionArea'
import eventWorker from '../../appWorkers/eventWorker'
import * as actions from '../../redux/actions/indexActions'

let $ = jquery

class FormSummary extends Component {
  constructor (props) {
    super(props)
    this.state = {
      timeRemaining: this.props.testIntervalData.timeForAnswer,
      tasksRemaining: this.props.testArr.length,
      testInterval: this.props.testArr[0]
    }
  
    this.timer = () => setTimeout(
      () => {
        let timeRemaining = this.state.timeRemaining
        if (timeRemaining > 0) {
          setTimeout(this.timer)
          this.setState({'timeRemaining': this.state.timeRemaining - 1})
        } else {
          this.setState({answerVisible: true})
          $('#testedAnswer').val('Не знам')
          clearTimeout(this.timer)
        }
      }, 500)
  }
  
  onTestButtonClick (e) {
    e.preventDefault()
    let answerBase = this.state.testInterval.baseTone
    eventWorker.baseKeyColorize(this.state.testInterval)
    this.testRendered = true
    
    this.props.changeTasksRemaining(this.props.tasksRemaining)
    this.timer()
  }
  
  // nextQuestionClicked (e) {
  //   e.preventDefault()
  //   console.log('next question clicked')
  //   $('#testedAnswer').val('Не знам')
  //   this.setState({
  //     answerVisible: false,
  //     tasksRemaining: this.state.tasksRemaining - 1,
  //     answeringDisabled: false
  //   })
  //   let idxClicked = eventWorker.passIndex()
  //   if (idxClicked === this.props.testArr.length) {
  //     // alert('test finished')
  //     this.setState({testFinished: true})
  //   }
  //   let interval = this.props.testArr[idxClicked]
  //   this.setState({
  //     testInterval: interval,
  //     answerVisible: false,
  //     timeRemaining: this.props.testIntervalData.timeForAnswer
  //   })
  //   this.timer()
  //   eventWorker.baseKeyColorize(interval)
  // }
  
  render () {
    let testArr = this.props.testArr
    let intervalData = this.props.testIntervalData
    let testRendered = this.testRendered
    console.log(testRendered)
    return (
      <div className='summary'>
        <ConditionArea timeRemaining={this.state.timeRemaining} text1={this.state.tasksRemaining}
                       intervalData={intervalData}
                       onClick={this.onTestButtonClick.bind(this)}/>
        <TestArea
          testRendered={testRendered}
          testArr={testArr}
          testInterval={this.state.testInterval}
          answerVisible={this.state.answerVisible}
          testFinished={this.state.testFinished}
          timer={this.timer}
          
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({testArr: state.testArr,
  tasksRemaining: state.tasksRemaining,
  testIntervalData: state.testIntervalData
})
const mapDispatchToProps = (dispatch,state) => ({
  changeTasksRemaining: number => dispatch(actions.changeTasksRemaining(number))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormSummary)
