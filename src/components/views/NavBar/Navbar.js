import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../redux/actions/indexActions'
import LanguageButtons from './LanguageButtons'
import { Link } from 'react-router-dom'
import StatusArea from '../workArea/StatusArea'
import languagesText from '../../../LanguagesData/LanguagesText'
import { notify } from 'react-notify-toast'
import firebase from 'firebase'
import SignInScreen from '../userForms/SignInScreen'
import SaveResultButton from './SaveResultButton'

function mapStateToProps (store) {
  return {
    isSigned: store.isSigned,
    userName: store.userName,
    // user: store.user,
    // timeRemaining: store.timeRemaining,
    // timeForAnswer: store.testIntervalData.timeForAnswer,
    language: store.languageSelected,
    testRendered: store.testRendered,
    // testIntervalData: store.testIntervalData,
    // intervalsForTest: store.testIntervalData.intervalsForTest,
    numberOfTasks: store.testIntervalData.numberOfTasks,
    sessionPoints: store.sessionPoints,
    sessionAnswers: store.sessionAnswers,
    pointsPerAnswer: store.pointsPerAnswer,
    testIntervalData: store.testIntervalData
     }
}

const mapDispatchToProps = {
  ...actions
}

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      idxClick: 0,
      answerVisible: false,
      answeringDisabled: false,
      testFinished: false,
      langButtonTxt: ['БГ', 'EN'],
      isSigning: false
    }
  }
  
  loginClicked (e) {
    e.preventDefault()
    this.setState({isSigning: true})
    
  }
  
  signingOut (event) {
    event.preventDefault()
    firebase.auth().signOut()
      .then(res => {
        this.setState({signingIn: false})
        // this.props.setLoggedOut()
        notify.show(`User ${this.props.userName} has logged out`, 'warning')
      })
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
    let testIntervalData = this.props.testIntervalData
    let user = this.props.user
    let sessionAnswers = this.props.sessionAnswers
    let isSigned = this.props.isSigned
    let sessionPoints = this.props.sessionPoints
    let addTxt = languagesText[this.props.language].header.titleTxt
    return (
      <header className='navbar'>
        <h1 className={'summary-field'}> Intervals L <br/>
          {!this.props.isSigned ?
            addTxt :
            <strong style={{'color': 'black'}}> Welcome {this.props.userName}</strong>} </h1>
        {this.props.testRendered &&
        <StatusArea/>}
        {this.props.testRendered && this.props.isSigned &&<SaveResultButton/>}
        {/*<button className=''*/}
                {/*onClick={event => {*/}
                  {/*event.preventDefault()*/}
                  {/*let date = new Date(Date.now())*/}
                  {/*console.log(date.toTimeString())*/}
                  {/*let resultObj = {*/}
                    {/*isSigned,*/}
                    {/*user: this.props.userName,*/}
                    {/*testIntervalData,*/}
                    {/*sessionPoints, sessionAnswers,*/}
                    {/*timeSaved: date*/}
                  {/*}*/}
                  {/*console.log(resultObj)*/}
                  {/*dataWorker.addResult('results', resultObj)*/}
                {/*}}>Save Result*/}
        {/*</button>}*/}
        {/*<button*/}
        {/*onClick={e => {*/}
        {/*e.preventDefault()*/}
        {/*dataWorker.getBestScores('results', 10)*/}
        {/*}}*/}
        {/*>Get Top Scores*/}
        {/*</button>*/}
        {this.props.isSigned ?
          <button onClick={this.signingOut.bind(this)}
          >Sign Out </button>
          : <button
            onClick={this.loginClicked.bind(this)}
            style={{display: this.state.isSigning ? 'none' : 'block'}}
            className={'summary-field link'}>Login
          </button>}
        {this.state.isSigning && <SignInScreen/>}
        
        < React.Fragment>
          
          {/*}}>Save Result*/}
          {/*</button>*/}
          {/*<NewTestLink*/}
          {/*texts={texts}/>*/}
          {/*<NewTestSameIntervals*/}
          {/*texts={texts}/>*/}
        </React.Fragment>
        
        
        < LanguageButtons
          strings={this.state.langButtonTxt}/>
        < Link
          className={'button'}
          to={'/'}>Help </Link>
      
      
      </header>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
