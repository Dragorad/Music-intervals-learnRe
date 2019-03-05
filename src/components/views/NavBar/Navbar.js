import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../redux/actions/indexActions'
import LanguageButtons from './LanguageButtons'
import { Link } from 'react-router-dom'
import StatusArea from '../workArea/StatusArea'
import languagesText from '../../../LanguagesData/LanguagesText'
import dataWorker from '../../../appWorkers/dataWorker'
import firebase from 'firebase'

function mapStateToProps (store) {
  return {
    isSigned: store.isSigned,
    userName: store.userName,
    // user: store.user,
    timeRemaining: store.timeRemaining,
    timeForAnswer: store.testIntervalData.timeForAnswer,
    language: store.languageSelected,
    testRendered: store.testRendered,
    // testIntervalData: store.testIntervalData,
    // intervalsForTest: store.testIntervalData.intervalsForTest,
    numberOfTasks: store.testIntervalData.numberOfTasks,
    // totalPoints: store.totalPoints,
    sessionPoints: store.sessionPoints,
    sessionAnswers: store.sessionAnswers,
    pointsPerAnswer: store.pointsPerAnswer,
    // userAnswer: store.userAnswer,
    // tasksRemaining: store.tasksRemaining,
    // testInterval: store.currentInterval,
    // testArr: store.testArr,
    // currentIntervalIdx: store.currentIntervalIdx
    
  }
}

const mapDispatchToProps = {
  ...actions
}
// function mapDispatchToProps (dispatch) {
//   return {
//     setIsSigned: boolean => dispatch(actions.setIsSigned(boolean)),
//     setUserName: string => dispatch(actions.setUserName(string)),
//     setLanguage: language => dispatch(actions.setLanguage(language)),
//     setAnsweringDisabled: boolean => dispatch(actions.setAnsweringDisabled(boolean)),
//     nextQuestionClickedAction: () => dispatch(actions.nextQuestionClickedAction()),
//     timerReset: () => dispatch(actions.timerReset()),
//     actionTimer: () => dispatch(actions.actionTimer()),
//     setTimerWorking: boolean => dispatch(actions.setTimerWorking(boolean)),
//     generateNewTest: (intervalsForTest, numberOfTasks) => dispatch(actions.generateTestArr(intervalsForTest, numberOfTasks)),
//     addPointsToResult: (number, boolean) => dispatch(actions.addPointsToResult(number, boolean)),
//     changeTasksRemaining: number => dispatch(actions.changeTasksRemaining(number)),
//     setAnswerVisible: boolean => dispatch(actions.setAnswerVisible(boolean)),
//     setTimeRemaining: number => dispatch(actions.setTimeRemaining(number)),
//     setCurrentInterval: testArr => dispatch(actions.setCurrentInterval(testArr)),
//     setTestRendered: () => dispatch(actions.setTestRendered()),
//     addAnswerToResult: (sessionAnswers, intervalName, boolean) => dispatch(actions.addAnswerToResult(sessionAnswers, intervalName, boolean))
//   }
// }

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
  
  componentDidMount () {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      user => {
        this.props.setIsSigned(!!user)
        this.props.setUserName(user.displayName)
      }
    )
  }
  
  componentWillUnmount () {
    this.unregisterAuthObserver()
  }
  
  render () {
    let text = languagesText[this.props.language].workPane
    let texts = text.workHeader
    let interval = this.props.testInterval
    let testArr = this.props.testArr
    let user = this.props.user
    let sessionAnswers = this.props.sessionAnswers
    let isSigned = this.props.isSigned
    let sessionPoints = this.props.sessionPoints
    let addTxt = languagesText[this.props.language].header.titleTxt
    return (
      <header className='row'>
        <h1 className={'summary-field'}> Intervals L <br/>
          {!this.props.isSigned ?
            addTxt :
            <strong style={{'color': 'black'}}> Welcome {this.props.userName}</strong>} </h1>
        {this.props.testRendered &&
        <StatusArea/>}
        {this.props.testRendered &&
        <button className=''
                onClick={event => {
                  event.preventDefault()
                  let date = new Date(Date.now())
                  console.log(date.toTimeString())
                  dataWorker.addResult('results', {
                  isSigned,
                  user,
                  sessionPoints, sessionAnswers,
                  timeSaved: date})
                  }}>Save Result
        </button>}
        {this.props.isSigned ?
          <React.Fragment>
            <button className=''
                    onClick={event => {
                      event.preventDefault()
                      firebase.auth().signOut().then(
                        res => {
                          alert(`User ${this.props.userName} has logged out ${res}`)
                        }
                      )
                    }
                    }>Sign Out
            </button>
          </React.Fragment>
          : <Link to={'/login'} className={'summary-field'}>Login
          </Link>}
        {/*<Link to={'/signUp'} className={'summary-field'} style={{'backgroundColor': 'gray'}}>Sign Up*/}
        {/*</Link>*/}
        
        
        
        
        < React.Fragment >
        {/*< button className=''*/}
          {/*onClick={event => {*/}
          {/*event.preventDefault()*/}
          {/*let date = new Date(Date.now())*/}
          {/*console.log(date.toTimeString())*/}
          {/*dataWorker.addResult('results', {*/}
          {/*isSigned,*/}
          {/*user,*/}
          {/*sessionPoints,*/}
          {/*sessionAnswers,*/}
          {/*timeSaved: date*/}
        {/*})*/}
        {/*}}>Save Result*/}
          {/*</button>*/}
        {/*<NewTestLink*/}
        {/*texts={texts}/>*/}
        {/*<NewTestSameIntervals*/}
        {/*texts={texts}/>*/}
          </React.Fragment>
          
        
        < LanguageButtons
          strings={this.state.langButtonTxt}/>
        < Link to={'/'}>Help </Link>
      
      
      </header>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
