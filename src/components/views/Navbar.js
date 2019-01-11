import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/indexActions'
import { setLanguage } from '../../redux/actions/indexActions'
import LanguageButtons from './LanguageButtons'
import { Link } from 'react-router-dom'
import StatusArea from './workArea/StatusArea'
import languagesText from '../../LanguagesData/LanguagesText'
import NewTestLink from './workArea/NewTestLink'
import NewTestSameIntervals from './workArea/NewTestSameIntervals'

function mapStateToProps (store) {
  return {
    timeRemaining: store.timeRemaining,
    timeForAnswer: store.testIntervalData.timeForAnswer,
    language: store.languageSelected,
    testRendered: store.testRendered,
    testIntervalData: store.testIntervalData,
    intervalsForTest: store.testIntervalData.intervalsForTest,
    numberOfTasks: store.testIntervalData.numberOfTasks,
    totalPoints: store.totalPoints,
    sessionPoints: store.sessionPoints,
    sessionAnswers: store.sessionAnswers,
    pointsPerAnswer: store.pointsPerAnswer,
    userAnswer: store.userAnswer,
    tasksRemaining: store.tasksRemaining,
    testInterval: store.currentInterval,
    testArr: store.testArr,
    currentIntervalIdx: store.currentIntervalIdx
    
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setLanguage: language => dispatch(setLanguage(language)),
    setAnsweringDisabled: boolean => dispatch(actions.setAnsweringDisabled(boolean)),
    nextQuestionClickedAction: () => dispatch(actions.nextQuestionClickedAction()),
    timerReset: () => dispatch(actions.timerReset()),
    actionTimer: () => dispatch(actions.actionTimer()),
    setTimerWorking: boolean => dispatch(actions.setTimerWorking(boolean)),
    generateNewTest: (intervalsForTest, numberOfTasks) => dispatch(actions.generateTestArr(intervalsForTest, numberOfTasks)),
    addPointsToResult: (number, boolean) => dispatch(actions.addPointsToResult(number, boolean)),
    changeTasksRemaining: number => dispatch(actions.changeTasksRemaining(number)),
    setAnswerVisible: boolean => dispatch(actions.setAnswerVisible(boolean)),
    setTimeRemaining: number => dispatch(actions.setTimeRemaining(number)),
    setCurrentInterval: testArr => dispatch(actions.setCurrentInterval(testArr)),
    setTestRendered: () => dispatch(actions.setTestRendered()),
    addAnswerToResult: (sessionAnswers, intervalName, boolean) => dispatch(actions.addAnswerToResult(sessionAnswers, intervalName, boolean))
  }
}

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      idxClick: 0,
      answerVisible: false,
      answeringDisabled: false,
      testFinished: false,
      langButtonTxt: ['БГ', 'EN']
    }
  }
  
  render () {
    let text = languagesText[this.props.language].workPane
    let texts = text.workHeader
    let interval = this.props.testInterval
    let testArr = this.props.testArr
    
    let addTxt = languagesText[this.props.language].header.titleTxt
    return (
      <header>
        <h1 className={'summary-field'}> Intervals L <br/>
          {!this.props.testRendered && addTxt}</h1>
        {this.props.testRendered &&
        <StatusArea/>}
        
        
        {this.props.testRendered &&
        <React.Fragment>
          <NewTestLink
            texts={texts}/>
          <NewTestSameIntervals
            texts={texts}/>
        </React.Fragment>
        }
        
        < LanguageButtons
          strings={this.state.langButtonTxt}/>
        < Link to={'/'}>Help </Link>
      
      
      </header>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
