import React, { Component } from 'react'
import { connect } from 'react-redux'
import TestField from './TestField'
import TestStatsField from './TestStatsField'
import ResultStats from './ResultStats'

class ConditionArea extends Component {
  render () {
    return <div className='condition'>
      <TestField
        label={'оставащи задачи до края на теста'}
        text={this.props.tasksRemaining}/>
      <TestField
        label={'натрупани точки'}
        text={this.props.sessionPoints}/>
      <TestField
      label={'време за отгатване'}
      text={this.props.timeRemaining}/>
      
      <button className='summary-field'
              disabled={this.props.testRendered}
              name='test-start-button'
              onClick={this.props.onClick}>Начало на теста
      </button>
    </div>
  }
}

const mapStateToProps = state => ({
  timeForAnswer: state.timeForAnswer,
  pointsPerAnswer: state.pointsPerAnswer,
  sessionPoints: state.sessionPoints,
  sessionAnswers: state.sessionAnswers,
  tasksRemaining: state.tasksRemaining
})
export default connect(mapStateToProps)
(ConditionArea)
