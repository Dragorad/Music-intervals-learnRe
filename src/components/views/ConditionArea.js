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
        text={this.props.text1}/>
      <TestField
        label={'натрупани точки'}
        text={this.props.sessionPoints}/>
      <TestField
      label={'време за отгатване'}
      text={this.props.timeRemaining}/>
      
      <button className='summary-field' name='test-start-button'
              onClick={this.props.onClick}>Начало на теста
      </button>
    </div>
  }
}

//
// ConditionArea.propTypes = {
//   text: PropTypes.any,
//   text1: PropTypes.any,
//   intervalData: PropTypes.any,
//   onClick: PropTypes.any
// }
const mapStateToProps = state => ({
  timeForAnswer: state.timeForAnswer,
  pointsPerAnswer: state.pointsPerAnswer,
  sessionPoints: state.sessionPoints,
  sessionAnswers: state.sessionAnswers
})
export default connect(mapStateToProps)
(ConditionArea)
