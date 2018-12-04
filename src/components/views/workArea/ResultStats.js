import React, { Component } from 'react'
import { connect } from 'react-redux'
import languagesText from '../../../../src/LanguagesData/LanguagesText'

class ResultStats extends Component {
  constructor (props) {
    super(props)
  }
  
  render (props) {
    let sessionAnswers = this.props.sessionAnswers
    let language = this.props.language
    let texts = languagesText[language].workPane.resultStats
    return <table>
      
        <th>{texts.interval}</th>
        <th>{texts.rightAnsw}</th>
        <th>{texts.falseAnsw}</th>
      
      {this.props.sessionAnswers.map((el, idx) => (
        <tr className='result-stats'>
          <td>{el.name[language]}:</td>
          <td className='data-field'>{el.trueAnswers}</td>
          <td className='data-field'>{el.falseAnswers}</td>
        </tr>))}
    </table>
  }
}

const mapStateToProps = store => ({
  language: store.languageSelected,
  sessionAnswers: store.sessionAnswers
})
export default connect(
  mapStateToProps
)(ResultStats)
