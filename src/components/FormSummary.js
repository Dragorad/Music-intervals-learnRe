import React, { Component } from 'react'
import muzWorker from '../intervalWorker'

class FormSummary extends Component {
  componentDidMount () {
    console.log('Form summary rendering')
    // // console.log(this.props.testIntervalData)
    // let {intervalsForTest, numberOfTasks, timeForAnswer} = this.props.testIntervalData
    // console.log(numberOfTasks)
    // let workData = muzWorker.generateTestArr(intervalsForTest, numberOfTasks)
    // console.log(workData)
  }
  render () {
    let intervalData = this.props.testIntervalData
    return (
      <div className='summary'>

        <div id='summary-time' className='summary-field'>
          време за отгатване<br /> <span>{}</span>
        </div>
        <div id='summary-tasks' className='summary-field'>
          оставащи задачи до края на теста <br /> <span />
        </div>
        <div id='summary-intervals' className='summary-field'>
          включени интервали: <br />
          <span>{intervalData.intervalsForTest.join(', ')}</span>
        </div>
        <a href='/#startTest' className='summary-field'>Начало на теста</a>

      </div>
    )
  }
}

export default FormSummary
