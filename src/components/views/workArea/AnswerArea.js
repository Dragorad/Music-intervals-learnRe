import React, { Component } from 'react'
import languagesText from '../../../LanguagesData/LanguagesText'
import { connect } from 'react-redux'

class AnswerArea extends Component {
  render () {
    let language = this.props.language
    let texts = languagesText[language].workPane.answerArea
    
    return <div className='answer-area'>
      <div className='summary-field ' style={{display: 'block'}}>
        <label htmlFor='testedAnswer '> {texts.answer} </label>
        <input id='testedAnswer' type='text' name='testedAnswer' placeholder={texts.dontKnow}/>
      </div>
      <button id='answering'
              disabled={this.props.disabled}
              className='summary-field' style={{
        margin: 'auto',
        backgroundColor: '#f9f9f9',
        color: 'crimson'
      }}
              onClick={this.props.onClick}>{texts.sendAnswer.toUpperCase()} </button>
      <div className='summary-field right-answer' style={
        this.props.answerVisible ? {display: 'block'} : {display: 'none'}}>
        {texts.rightAnswer.toUpperCase()} <p style={{color: 'red'}}>{this.props.interval.answer}</p>
      </div>
    </div>
  }
}

const mapStateToProps = store => ({
  language: store.languageSelected
})

export default connect(mapStateToProps)(AnswerArea)
