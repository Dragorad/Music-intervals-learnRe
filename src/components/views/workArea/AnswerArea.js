import React, { Component } from 'react'
import languagesText from '../../../LanguagesData/LanguagesText'
import { connect } from 'react-redux'
import * as actions from '../../../redux/actions/indexActions'

class AnswerArea extends Component {
  constructor (props){
    super(props)
    this.state = {
      answeringDisabled: false
    }
  }
  render () {
    let language = this.props.language
    let texts = languagesText[language].workPane.answerArea
    
    return <div className='answer-area'>
      <div className='summary-field ' style={{display: 'block'}}>
        <label htmlFor='testedAnswer '> {texts.answer} </label>
        <input id='testedAnswer' type='text' name='testedAnswer' placeholder={texts.dontKnow}/>
      </div>
      <button id='answering'
              disabled={this.state.disabled}
              className='summary-field' style={{
        margin: 'auto',
        backgroundColor: '#f9f9f9',
        color: 'crimson'
      }}
              onClick={this.props.onSendAnswClick.bind(this)}>{texts.sendAnswer.toUpperCase()} </button>
      <div className='summary-field right-answer' style={
        this.props.answerVisible ? {display: 'block'} : {display: 'none'}}>
        {texts.rightAnswer.toUpperCase()} <p style={{color: 'red'}}>{this.props.interval.answer}</p>
      </div>
    </div>
  }
}

const mapStateToProps = store => ({
  answerVisible: store.answerVisible,
  userAnswer: store.userAnswer,
  pointsPerAnswer: store.pointsPerAnswer,
  testInterval: store.currentInterval,
  language: store.languageSelected
})
const mapDispatchToProps = (dispatch) => ({
  timerReset: () => dispatch(actions.timerReset()),
  setTimerWorking: boolean => dispatch(actions.setTimerWorking(boolean)),
  setAnswerVisible: boolean => dispatch(actions.setAnswerVisible(boolean)),
  setTimeRemaining: number => dispatch(actions.setTimeRemaining(number)),
  addPointsToResult: (number, boolean) => dispatch(actions.addPointsToResult(number, boolean)),
  addAnswerToResult: (sessionAnswers, intervalName, boolean) => dispatch(actions.addAnswerToResult(sessionAnswers, intervalName, boolean))
})

export default connect(mapStateToProps, mapDispatchToProps)(AnswerArea)
