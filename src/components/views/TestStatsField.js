import React, { Component } from 'react'

class TestStatsField extends Component {
  render (){
    return (
    <div className="summary-field">
      <p>{this.props.name}:</p>
      <p>Right Answers: {this.props.rightAnswers}</p>
      <p> falseAnswers: {this.props.falseAnswers}</p>
    </div>
  )}
}

export default TestStatsField

