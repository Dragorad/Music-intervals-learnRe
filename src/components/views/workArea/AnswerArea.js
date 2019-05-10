import React, { Component } from 'react'
import languagesText from '../../../LanguagesData/LanguagesText'
import { connect } from 'react-redux'
import * as actions from '../../../redux/actions/indexActions'
import eventWorker from '../../../appWorkers/eventWorker'

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

    {!this.props.answeringDisabled &&  <button id='answering'
              disabled={this.props.answeringDisabled}
              className='summary-field' style={{
        margin: 'auto',
        backgroundColor: '#f9f9f9',
        color: 'crimson'
      }}
              onClick={eventWorker.answeringClicked.bind(this)}>{texts.sendAnswer.toUpperCase()} </button>}


     {this.props.answeringDisabled && <button id='next-question' className='summary-field'
              onClick={eventWorker.nextQuestionClicked.bind(this)}>
        {languagesText[language].workPane.testArea.nextQuest}
      </button>}
      <div className='summary-field right-answer' style={
        this.props.answerVisible ? {display: 'block'} : {display: 'none'}}>
        {texts.rightAnswer.toUpperCase()} <p style={{color: 'red'}}>{this.props.testInterval.answer}</p>
      </div>

    </div>
  }
}

const mapStateToProps = store => ({
  tasksRemaining: store.tasksRemaining,
  answerVisible: store.answerVisible,
  answeringDisabled: store.answeringDisabled,
  userAnswer: store.userAnswer,
  pointsPerAnswer: store.pointsPerAnswer,
  testInterval: store.currentInterval,
  language: store.languageSelected
})
const mapDispatchToProps = (dispatch) => ({
  nextQuestionClickedAction: () => dispatch(actions.nextQuestionClickedAction()),
  setTestFinished : boolean => dispatch(actions.setTestFinished(boolean)),
  timerReset: () => dispatch(actions.timerReset()),
  setTimerWorking: boolean => dispatch(actions.setTimerWorking(boolean)),
  setAnswerVisible: boolean => dispatch(actions.setAnswerVisible(boolean)),
  setAnsweringDisabled: boolean => dispatch(actions.setAnsweringDisabled(boolean)),
  // setTimeRemaining: number => dispatch(actions.setTimeRemaining(number)),
  addPointsToResult: (number, boolean) => dispatch(actions.addPointsToResult(number, boolean)),
  addAnswerToResult: (sessionAnswers, intervalName, boolean) => dispatch(actions.addAnswerToResult(sessionAnswers, intervalName, boolean))
})

export default connect(mapStateToProps, mapDispatchToProps)(AnswerArea)
