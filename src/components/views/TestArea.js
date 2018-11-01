import React, { Component } from 'react'
import TestField from './TestField'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/indexActions'
import jquery from 'jquery'

let $ = jquery

class TestArea extends Component {
  constructor (props) {
    super(props)
    this.state = {
      idxClick: 0,
      testInterval: this.props.testArr[0],
      answerVisible: this.props.answerVisible,
      userAnswer: ''
    }
  }
  
  answeringClicked (e) {
    let pointsPerAnswer = this.props.pointsPerAnswer
    console.log('redux points per answer' + pointsPerAnswer)
    e.preventDefault()
    console.log('answering clicked ' + this.props.testInterval.answer)
    let userAnswer = this.props.userAnswer
    console.log(userAnswer)
    let isAnswerTrue = userAnswer === this.props.testInterval.answer
    
    console.log(isAnswerTrue)
    let intervalName = this.state.testInterval.name.bg
    this.props.addAnswerToResult(intervalName, isAnswerTrue)
    this.props.addPointsToResult(pointsPerAnswer, isAnswerTrue)
    
  }
  
  componentDidMount () {
    // let baseToneId = this.state.testInterval.baseTone.split(' ').join('')
    // let baseKey = $(`path#${baseToneId}`)
    // baseKey.css('fill', 'red')
    //
  }
  
  render () {
    let testArr = this.props.testArr
    let interval = this.props.testInterval
    
    if (this.props.testRendered) {
      if (!this.props.testFinished) {
        return (
          <div className="test-area">
            <div className="condition">
              <TestField
                key="0"
                label={'интервал'}
                text={interval.name.bg}/>
              <TestField
                key="1"
                label={'посока'}
                text={interval.direction === 'up' ?
                  String.fromCharCode(8593) : String.fromCharCode(8595)}/>
              <TestField
                key="2"
                label={'начален тон'}
                text={interval.baseTone}/>
            </div>
            
            <div className='answer-area'>
              <div className="summary-field " style={{display: 'block'}}>
                <label htmlFor="testedAnswer "> отговор </label>
                <input id="testedAnswer" type='text' name="testedAnswer" placeholder="Не знам"></input>
                <button
                  onClick={this.answeringClicked.bind(this)}/>
              </div>
              <button id="next-question" className="summary-field" style={
                {
                  margin: 'auto',
                  backgroundColor: '#f9f9f9',
                  color: 'crimson'
                }} onClick={this.answeringClicked.bind(this)}>
                ИЗПРАЩАМ ОТГОВОР
              </button>
              <div className="summary-field right-answer" style={
                this.props.answerVisible ? {display: 'block'} : {display: 'none'}}>
                Верен отговор <p style={{color: 'red'}}>{interval.answer}</p>
              </div>
            </div>
            <button id="next-question" className="summary-field"
                    onClick={this.props.nextQuestionClicked.bind(this)}>
              СЛЕДВАЩ ВЪПРОС
            </button>
          </div>
        )
      }
      else {
        return (
          <div className={'testFinished'}>
            <p>Test finished!</p>
            <p>Please choose:</p>
            <Link to='/index' className='summary-field' onClick={() => window.localStorage.clear()}>НОВ ТЕСТ
              ОТНАЧАЛО</Link>
            
            <Link to='/work-pane' className='summary-field'
                  onClick={this.props.generateNewTest.bind(this)}>
              НОВ ТЕСТ СЪС СЪЩИТЕ ИНТЕРВАЛИ</Link>
          </div>
        )
      }
    } else {
      return <div></div>
    }
  }
}

const mapStateToProps = store => {
  return {
    intervalsForTest: store.testIntervalData.intervalsForTest,
    numberOfTasks: store.testIntervalData.numberOfTasks,
    totalPoints: store.totalPoints,
    sessionPoints: store.sessionPoints,
    sessionAnswers: store.sessionAnswers,
    pointsPerAnswer: store.pointsPerAnswer,
    userAnswer: store.userAnswer
  }
}
const mapDispatchToProps = (dispatch, state) => ({
  generateNewTest: (intervalsForTest, numberOfTasks) => dispatch(actions.generateTestArr(intervalsForTest, numberOfTasks)),
  addPointsToResult: (number, boolean) => dispatch(actions.addPointsToResult(number, boolean)),
  addAnswerToResult: (intervalName, boolean) => dispatch(actions.addAnswerToResult(intervalName, boolean))
})
export default connect(mapStateToProps, mapDispatchToProps)(TestArea)
