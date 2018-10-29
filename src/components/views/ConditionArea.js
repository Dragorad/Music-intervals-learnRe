import React, { Component } from 'react'
import {connect} from 'react-redux'
import TestField from './TestField'

class ConditionArea extends Component {
  render () {
    return <div className='condition'><TestField
      label={'време за отгатване'}
      text={this.props.timeRemaining} />
      <TestField
        label={'оставащи задачи до края на теста'}
        text={this.props.text1} />
      <TestField
        label={'включени интервали'}
        text={this.props.intervalData.intervalsForTest.join(', ')} />
      <TestField
        label={'точки за верен отговор'}
        text={this.props.pointsPerAnswer} />

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
  pointsPerAnswer: state.pointsPerAnswer
})
export default connect(mapStateToProps)
(ConditionArea)
