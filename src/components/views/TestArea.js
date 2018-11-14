import React, { Component } from 'react'
import TestField from './TestField'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/indexActions'
import jquery from 'jquery'
import ResultStats from './ResultStats'
import eventWorker from '../../appWorkers/eventWorker'
import initialState from '../../redux/initialState/initialState'

let $ = jquery

class TestArea extends Component {
  constructor (props) {
    super(props)
    this.state = {
      idxClick: 0,
      answerVisible: false,
      answeringDisabled: false,
      testFinished: false
    }
  }
  
  nextQuestionClicked (e) {
    e.preventDefault()
    console.log('next question clicked')
    if (this.props.tasksRemaining > 0) {
      $('#testedAnswer').val('Не знам')
      this.props.changeTasksRemaining(this.props.tasksRemaining)
      this.setState({
        answerVisible: false,
        answeringDisabled: false
      })
      let testArr = this.props.testArr
      this.props.setCurrentInterval(testArr)
      this.setState({
        // testInterval: this.props.interval,
        answerVisible: false,
        timeRemaining: this.props.testIntervalData.timeForAnswer
      })
      this.props.timer()
      eventWorker.baseKeyColorize(this.props.testInterval)
    } else {
      this.setState({testFinished: true})
    }
  }
  
  answeringClicked (e) {
    let pointsPerAnswer = this.props.pointsPerAnswer
    console.log('redux points per answer ' + pointsPerAnswer)
    e.preventDefault()
    console.log('answering clicked ' + this.props.testInterval.answer)
    let userAnswer = this.props.userAnswer
    let isAnswerTrue = userAnswer === this.props.testInterval.answer
    let intervalName = this.props.testInterval.name.bg
    console.log(intervalName)
    this.props.addAnswerToResult(intervalName, isAnswerTrue)
    this.props.addPointsToResult(pointsPerAnswer, isAnswerTrue)
    this.setState({answeringDisabled: true})
  }
  
  // newTestLink () {
  //   this.props.generateNewTest(this.props.intervalsForTest,
  //     this.props.numberOfTasks)
  //   this.props.setTestRendered.bind(this)
  //   this.setState({testFinished: false})
  // }
  
  render () {
    if (this.props.testRendered) {
      if (!this.state.testFinished) {
        let interval = this.props.testInterval
        let testArr = this.props.testArr
        return (
          <div className='test-area'>
            
            <div className='condition'>
              <TestField
                key='0'
                label={'интервал'}
                text={interval.name.bg}/>
              <TestField
                key='1'
                label={'посока'}
                text={interval.direction === 'up'
                  ? String.fromCharCode(8593) : String.fromCharCode(8595)}/>
              <TestField
                key='2'
                label={'начален тон'}
                text={interval.baseTone}/>
            </div>
            
            <div className='answer-area'>
              <div className='summary-field ' style={{display: 'block'}}>
                <label htmlFor='testedAnswer '> отговор </label>
                <input id='testedAnswer' type='text' name='testedAnswer' placeholder='Не знам'/>
              </div>
              <button id='answering'
                      disabled={this.state.answeringDisabled}
                      className='summary-field' style={{
                margin: 'auto',
                backgroundColor: '#f9f9f9',
                color: 'crimson'
              }}
                      onClick={this.answeringClicked.bind(this)}>
                ИЗПРАЩАМ ОТГОВОР
              </button>
              <div className='summary-field right-answer' style={
                this.props.answerVisible ? {display: 'block'} : {display: 'none'}}>
                Верен отговор <p style={{color: 'red'}}>{interval.answer}</p>
              </div>
            </div>
            <button id='next-question' className='summary-field'
                    onClick={this.nextQuestionClicked.bind(this)}>
              СЛЕДВАЩ ВЪПРОС
            </button>
            <table>
              <ResultStats/>
            </table>
          </div>
        )
      } else {
        // let intervalsForTest = this.props.testIntervalData.intervalsForTest
        // let numberOfTasks = this.props.numberOfTasks
        // let generateNewTest = this.props.generateNewTest(intervalsForTest, numberOfTasks)
        return (
          
          <div className='testFinished'>
            <p>Test finished!</p>
            <p>Please choose:</p>
            <Link to='/index' className='summary-field' onClick={() => {window.localStorage.clear()}}>
              НОВ ТЕСТ ОТНАЧАЛО</Link>
            
            <button className='summary-field link'
                 onClick={eventWorker.newTestLink.bind(this)}>
              New New Test Generate
            </button>
            <Link to='/work-pane' className='summary-field'
              // OnClick={
              //   eventWorker.generateNewTestLink.bind(this)}
            > НОВ ТЕСТ СЪС СЪЩИТЕ ИНТЕРВАЛИ</Link>
          </div>
        )
      }
    } else {
      return <div/>
    }
  }
}

const mapStateToProps = store => {
  return {
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
const mapDispatchToProps = (dispatch, state) => ({
  generateNewTest: (intervalsForTest, numberOfTasks) => dispatch(actions.generateTestArr(intervalsForTest, numberOfTasks)),
  addPointsToResult: (number, boolean) => dispatch(actions.addPointsToResult(number, boolean)),
  changeTasksRemaining: number => dispatch(actions.changeTasksRemaining(number)),
  setCurrentInterval: testArr => dispatch(actions.setCurrentInterval(testArr)),
  addAnswerToResult: (sessionAnswers, intervalName, boolean) => dispatch(actions.addAnswerToResult(sessionAnswers, intervalName, boolean))
})
export default connect(mapStateToProps, mapDispatchToProps)(TestArea)
