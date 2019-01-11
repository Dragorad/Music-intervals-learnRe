import React, { Component } from 'react'
import { connect } from 'react-redux'
import TestField from './TestField'
import * as actions from '../../../redux/actions/indexActions'
import languagesText from '../../../LanguagesData/LanguagesText'

class StatusArea extends Component {
  
  componentDidMount () {
    this.props.setTimeRemaining(this.props.timeForAnswer)
    
  }
  
  render () {
    let language = this.props.language
    let texts = languagesText[language].workPane.conditionArea
    return <div className='condition'>
      <TestField
        label={texts.taskRemaining}
        text={this.props.tasksRemaining}/>
      <TestField
        label={texts.pointsAccum}
        text={this.props.sessionPoints}/>
      {/*<TestField*/}
        {/*label={texts.timeRemaining}*/}
        {/*text={this.props.timeRemaining}/>*/}
      
      {/*<button className='summary-field'*/}
              {/*disabled={this.props.testRendered}*/}
              {/*name='test-start-button'*/}
              {/*onClick={eventWorker.onTestButtonClick.bind(this)}>{texts.testBegin}*/}
      {/*</button>*/}
    </div>
  }
}

const mapStateToProps = state => ({
  timerWorking: state.timerWorking,
  timerId: state.timerId,
  timeRemaining: state.timeRemaining,
  language: state.languageSelected,
  timeForAnswer: state.testIntervalData.timeForAnswer,
  testInterval: state.currentInterval,
  pointsPerAnswer: state.pointsPerAnswer,
  sessionPoints: state.sessionPoints,
  sessionAnswers: state.sessionAnswers,
  tasksRemaining: state.tasksRemaining,
  testRendered: state.testRendered
})

const mapDispatchToProps = dispatch => ({
  setAnsweringDisabled: boolean => (actions.setAnsweringDisabled(boolean)),
  actionTimer: () => dispatch(actions.actionTimer()),
  changeTasksRemaining: number => dispatch(actions.changeTasksRemaining(number)),
  setTimeRemaining: number => dispatch(actions.setTimeRemaining(number)),
  setTimerWorking: (boolean) => dispatch(actions.setTimerWorking(boolean)),
  setAnswerVisible: boolean => dispatch(actions.setAnswerVisible(boolean)),
  setTestRendered: () => dispatch(actions.setTestRendered())
})
export default connect(mapStateToProps, mapDispatchToProps)
(StatusArea)
