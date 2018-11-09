import React, { Component } from 'react'
import { connect } from 'react-redux'
import TestStatsField from './TestStatsField'

class ResultStats extends Component {
  render () {
    return  this.props.sessionAnswers.map((el, idx) => (<div>
    <p>{el.name}:</p>
    <span>Right Answers: {el.trueAnswers}</span>
    <span> False Answers: {el.falseAnswers}</span>
    </div>))
  }
}

const mapStateToProps = store => ({
  sessionAnswers: store.sessionAnswers
})
export default connect(
  mapStateToProps
)(ResultStats)
