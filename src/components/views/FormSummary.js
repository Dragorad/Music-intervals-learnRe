import React, { Component } from 'react'
import muzWorker from '../../intervalWorker'
import TestArea from './TestArea'

class FormSummary extends Component {
  constructor (props) {
    super(props)
  }
  
  componentDidMount () {
    console.log('Form summary rendering')
    console.log(this.props.testArr)
  }
  
  onTestButtonClick (e) {
    e.preventDefault()
    console.log('test button clicked')
    this.testRendered = true
    this.setState({'testRendered': true})
    
  }
  
  render () {
    let testArr = this.props.testArr
    let intervalData = this.props.testIntervalData
    let testRendered = this.testRendered
    console.log(testRendered)
    return (
      
      <div className='summary'>
        
        <div id='summary-time' className='summary-field'>
          време за отгатване<br/> <span>{}</span>
        </div>
        <div id='summary-tasks' className='summary-field'>
          оставащи задачи до края на теста <br/> <span>{testArr.length}</span><span/>
        </div>
        <div id='summary-intervals' className='summary-field'>
          включени интервали: <br/>
          <span>{intervalData.intervalsForTest.join(', ')}</span>
        </div>
        <button className='summary-field' name='test-start-button'
                onClick={this.onTestButtonClick.bind(this)}>Начало на теста
        </button>
        
        < TestArea
          testRendered={testRendered}
          testArr={testArr}/>
      </div>
    
    )
  }
}

export default FormSummary
