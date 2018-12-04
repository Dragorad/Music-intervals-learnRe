import React, { Component } from 'react'
import { connect } from 'react-redux'
import TestArea from './TestArea'
import ConditionArea from './ConditionArea'
import eventWorker from '../../../appWorkers/eventWorker'
import * as actions from '../../../redux/actions/indexActions'

class FormSummary extends Component {
  
  componentDidMount () {
    let idx = this.props.currentIntervalIdx
    let testArr = this.props.testArr
  }
  
  render () {
    let idx = this.props.currentIntervalIdx
    let testArr = this.props.testArr
    let intervalData = this.props.testIntervalData
    eventWorker.baseKeyColorize(this.props.testInterval)
    
    return (
      <div className='summary'>
        <ConditionArea/>
        <TestArea/>
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
