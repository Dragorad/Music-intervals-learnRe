import React, { Component } from 'react'
import { connect } from 'react-redux'
import languagesText from '../../../../src/LanguagesData/LanguagesText'

class ResultStats extends Component {
  constructor (props) {
    super(props)
  }
  
  // hideModal (e){
  //   e.preventDefault()
  //   this.props.style({display:'none'})
  // }
  render (props) {
    let sessionAnswers = this.props.sessionAnswers
    let language = this.props.language
    let texts = languagesText[language].workPane.resultStats
    return (
      <div className='modal'>
        <span className="close"> {String.fromCharCode(215)};</span>
        <table>
          <caption> Session Results</caption>
          {/*<tbody>*/}
          <thead>
          <tr style={{'color':'#c10413'}}>
            <th>{texts.interval}</th>
            <th>{texts.rightAnsw}</th>
            <th>{texts.falseAnsw}</th>
          </tr>
          </thead>
          <tbody>
          {this.props.sessionAnswers.map((el, idx) => (
            <tr key={idx} className='result-stats'>
              <td>{el.name[language]}:</td>
              <td className='data-field'>{el.trueAnswers}</td>
              <td className='data-field'>{el.falseAnswers}</td>
            </tr>))}
          </tbody>
        </table>
      </div>)
  }
}

const mapStateToProps = store => ({
  language: store.languageSelected,
  sessionAnswers: store.sessionAnswers
})
export default connect(
  mapStateToProps
)(ResultStats)
