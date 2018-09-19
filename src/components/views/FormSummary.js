import React, { Component } from 'react'
import muzWorker from '../../intervalWorker'
import TestArea from './TestArea'
import TestField from './TestField'

class FormSummary extends Component {
  constructor (props) {
    super(props)
    this.state = {
      testArr: this.props.testArr,
      testIntervalData: this.props.testIntervalData,
      timeRemaining: this.props.testIntervalData.timeForAnswer,
      answerVisible: false,
      testInterval: this.props.testArr[0]
    }
    this.passIndex = (() => {
      let idx = 0
      return function () {
        console.log(idx++)
        return idx
      }
    })()
    this.timer = () => setTimeout(
      () => {
        let timeRemaining = this.state.timeRemaining
        if (timeRemaining > 0) {
          setTimeout(this.timer)
          this.setState({'timeRemaining': this.state.timeRemaining - 1})
        }
        else {
          this.setState({answerVisible: true})
          clearTimeout(this.timer)
        }
      }, 500)
  }
  
  componentDidMount () {
    console.log('Form summary rendering')
  }
  
  onTestButtonClick (e) {
    e.preventDefault()
    console.log('test button clicked')
    this.testRendered = true
    this.timer()
  }
  
  nextQuestionClicked (e) {
    e.preventDefault()
    console.log('next question clicked')
    this.setState({answerVisible: false})
    let idxClicked = this.passIndex()
    
    if(idxClicked === this.props.testArr.length){
      alert('test finished')
      this.props.history.push('/index')
    }
    let interval = this.props.testArr[idxClicked]
    this.setState({
      testInterval: interval,
      answerVisible: false,
      timeRemaining: this.props.testIntervalData.timeForAnswer
    })
    this.timer()
  }
  
  render () {
    let testArr = this.props.testArr
    let intervalData = this.props.testIntervalData
    let testRendered = this.testRendered
    console.log(testRendered)
    return (
      
      <div className='summary'>
        <TestField
          label={'време за отгатване'}
          text={this.state.timeRemaining}/>
        <TestField
          label={'оставащи задачи до края на теста'}
          text={this.state.testArr.length}/>
        <TestField
          label={'включени интервали'}
          text={intervalData.intervalsForTest.join(', ')}/>
        
        {/*<div id='summary-time' className='summary-field'>*/}
        {/*време за отгатване<br/> <span>{this.state.timeRemaining}</span>*/}
        {/*</div>*/}
        {/*<div id='summary-tasks' className='summary-field'>*/}
        {/*оставащи задачи до края на теста <br/> <span>{testArr.length}</span><span/>*/}
        {/*</div>*/}
        {/*<div id='summary-intervals' className='summary-field'>*/}
        {/*включени интервали: <br/>*/}
        {/*<span>{intervalData.intervalsForTest.join(', ')}</span>*/}
        {/*</div>*/}
        <button className='summary-field' name='test-start-button'
                onClick={this.onTestButtonClick.bind(this)}>Начало на теста
        </button>
        
        < TestArea
          testRendered={testRendered}
          testArr={testArr}
          testInterval={this.state.testInterval}
          answerVisible={this.state.answerVisible}
          nextQuestionClicked={this.nextQuestionClicked.bind(this)}
        />
      </div>
    
    )
  }
}

export default FormSummary
