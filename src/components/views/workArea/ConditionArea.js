import React, { Component } from 'react'
import { connect } from 'react-redux'
import TestField from './TestField'
import * as actions from '../../../redux/actions/indexActions'
import jquery from 'jquery'
import languagesText from '../../../LanguagesData/LanguagesText'

let $ = jquery
class ConditionArea extends Component {
  constructor (props) {
    super(props)
    this.state = {
      timeRemaining: this.props.timeForAnswer,
      tasksRemaining: this.props.testArr.length
    }
    
    this.timer = () => setTimeout(
      () => {
        let timeRemaining = this.state.timeRemaining
        if (timeRemaining > 0) {
          setTimeout(this.timer)
          this.setState({'timeRemaining': this.state.timeRemaining - 1})
        } else {
          this.setState({answerVisible: true})
          //   answeringDisabled: true
          // })
          // this.props.style = {color: 'yellow'}
          $('#testedAnswer').val('Не знам')
          clearTimeout(this.timer)
        }
      }, 500)
  }
  
  componentDidMount () {
    let idx = this.props.currentIntervalIdx
    let testArr = this.props.testArr
  }
  onTestButtonClick (e) {
    e.preventDefault()
    this.props.changeTasksRemaining(this.props.tasksRemaining)
    this.props.setTestRendered()
    this.timer()
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
      text={this.state.timeRemaining}/>
      
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
