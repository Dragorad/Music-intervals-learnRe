import React, { Component } from 'react'
import TestField from './TestField'
import { Link } from 'react-router-dom'

class TestArea extends Component {
  constructor (props) {
    super(props)
    this.state = {
      idxClick: 0,
      testInterval: this.props.testArr[0],
      answerVisible: this.props.answerVisible
    }
  }
  
  answeringClicked (e) {
    e.preventDefault()
    console.log('answering clicked')
  }
  
  render () {
    let testArr = this.props.testArr
    let interval = this.props.testInterval
    // testArr[this.state.idxClick]
    console.log(interval)
    
    if (this.props.testRendered) {
      if(!this.props.testFinished){
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
            
            <div className="summary-field">
              <label htmlFor="testedAnswer "> отговор </label>
              <input id="testedAnswer" type='text' name="testedAnswer" placeholder="Не знам"></input>
              <button
                onClick={this.answeringClicked.bind(this)}/>
            </div>
            <div className="summary-field right-answer" style={
              this.props.answerVisible ? {display: 'block'} : {display: 'none'}}>
              Верен отговор <p style={{color: 'red'}}>{interval.answer}</p>
            </div>
            <button id="next-question" className="summary-field"
                    onClick={this.props.nextQuestionClicked.bind(this)}>
              СЛЕДВАЩ ВЪПРОС
            </button>
          </div>
        </div>
      )}
      else {
        return(
          <div className={'testFinished'}>
            <p>Test finished!</p>
            <p>Please choose:</p>
            <Link to='/index' className='summary-field' onClick={() => window.localStorage.clear()}>НОВ ТЕСТ ОТНАЧАЛО</Link>
            
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


export default TestArea
