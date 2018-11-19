import React, { Component } from 'react'
import { connect } from 'react-redux'
import TestStatsField from './TestStatsField'

class ResultStats extends Component {
  constructor (props) {
    super(props)
  }
  
  render (props) {
    let sessionAnswers = this.props.sessionAnswers
    return <table>
      <th>interval</th>
      <th>Right Answers</th>
      <th>False Answers</th>
      {this.props.sessionAnswers.map((el, idx) => (
        <tr className='result-stats'>
          <td>{el.name}:</td>
          <td className='data-field'>{el.trueAnswers}</td>
          <td className='data-field'>{el.falseAnswers}</td>
        </tr>))}
    </table>
  }
}

const mapStateToProps = store => ({
  sessionAnswers: store.sessionAnswers
})
export default connect(
  mapStateToProps
)(ResultStats)
