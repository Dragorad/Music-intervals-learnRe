import React, { Component } from 'react'
import { connect } from 'react-redux'
import TestField from './TestField'
import * as actions from '../../../redux/actions/indexActions'
import jquery from 'jquery'
import languagesText from '../../../LanguagesData/LanguagesText'

let $ = jquery

class ConditionArea extends Component {
  
  
  componentDidMount () {
    let testArr = this.props.testArr
  }
  
  onTestButtonClick (e) {
    e.preventDefault()
    this.props.changeTasksRemaining(this.props.tasksRemaining)
    this.props.setTestRendered()
    this.props.timer()
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
      <TestField
        label={texts.timeRemaining}
        text={this.props.timeRemaining}/>
      
      <button className='summary-field'
              disabled={this.props.testRendered}
              name='test-start-button'
              onClick={this.onTestButtonClick.bind(this)}>{texts.testBegin}
      </button>
    </div>
  }
}

const mapStateToProps = state => ({
  language: state.languageSelected,
  timeForAnswer: state.testIntervalData.timeForAnswer,
  testArr: state.testArr,
  pointsPerAnswer: state.pointsPerAnswer,
  sessionPoints: state.sessionPoints,
  sessionAnswers: state.sessionAnswers,
  tasksRemaining: state.tasksRemaining,
  testRendered: state.testRendered
})

const mapDispatchToProps = dispatch => ({
  changeTasksRemaining: number => dispatch(actions.changeTasksRemaining(number)),
  setTestRendered: () => dispatch(actions.setTestRendered())
})
export default connect(mapStateToProps, mapDispatchToProps)
(ConditionArea)
