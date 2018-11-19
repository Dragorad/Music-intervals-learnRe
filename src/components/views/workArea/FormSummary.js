import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import TestArea from './TestArea'
import TestField from './TestField'
import jquery from 'jquery'
import ConditionArea from './ConditionArea'
import eventWorker from '../../../appWorkers/eventWorker'
import * as actions from '../../../redux/actions/indexActions'
import resultsHandler from '../../../appWorkers/resultHandler'

let $ = jquery

class FormSummary extends Component {
  constructor (props) {
    super(props)
    this.state = {
      timeRemaining: this.props.testIntervalData.timeForAnswer,
      tasksRemaining: this.props.testArr.length,
      testRendered: false
    }
    
    this.timer = () => setTimeout(
      () => {
        let timeRemaining = this.state.timeRemaining
        if (timeRemaining > 0) {
          setTimeout(this.timer)
          this.setState({'timeRemaining': this.state.timeRemaining - 1})
        } else {
          this.setState({answerVisible: true})
          //   answeringDisabled: true
          // })
          // this.props.style = {color: 'yellow'}
          $('#testedAnswer').val('Не знам')
          clearTimeout(this.timer)
        }
      }, 500)
  }
  
  onTestButtonClick (e) {
    e.preventDefault()
    // let testInterval = this.props.currentInterval
    // let answerBase = testInterval.baseTone
    this.setState({testRendered: true})
    this.props.changeTasksRemaining(this.props.tasksRemaining)
    this.timer()
  }
  
  componentDidMount () {
    let idx = this.props.currentIntervalIdx
    let testArr = this.props.testArr
  }
  
  render () {
    let idx = this.props.currentIntervalIdx
    let testArr = this.props.testArr
    let intervalData = this.props.testIntervalData
    eventWorker.baseKeyColorize(this.props.testInterval)
    let testRendered = this.testRendered
    console.log(testRendered)
    return (
      <div className='summary'>
        <ConditionArea timeRemaining={this.state.timeRemaining}
                       testRendered={this.state.testRendered}
                       intervalData={intervalData}
                       onClick={this.onTestButtonClick.bind(this)}/>
        <TestArea
          testRendered={this.state.testRendered}
          answerVisible={this.state.answerVisible}
          testFinished={this.state.testFinished}
          timer={this.timer}
          setTestRendered={this.setTestRendered}
        
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  testArr: state.testArr,
  tasksRemaining: state.tasksRemaining,
  testIntervalData: state.testIntervalData,
  intervalIdx: state.currentIntervalIdx,
  testInterval: state.currentInterval
})
const mapDispatchToProps = (dispatch, state) => ({
  changeTasksRemaining: number => dispatch(actions.changeTasksRemaining(number)),
  setCurrentIntervalIdx: number => dispatch(actions.setCurrentIntervalIdx(number))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormSummary)
