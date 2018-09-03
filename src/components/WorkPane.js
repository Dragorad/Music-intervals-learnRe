import React, { Component } from 'react'
import WorkHeader from './WorkHeader'
import FormSummary from './FormSummary'
import Keyboard from './Keyboard'
import testIntervalData from './ControlForm'
import jQuery from 'jquery'
import muzWorker from '../intervalWorker'
import intervals from '../intervalWorker'


let $ = jQuery

class WorkPane extends Component {
  constructor (props) {
    super(props)
    this.state = {
      testIntervalData: {}
    }
  }
  
  componentDidMount () {
    let {intervalsForTest, timeForAnswer, numberOfTasks} = JSON.parse(localStorage.getItem('testIntervalData'))
    let testArr = muzWorker.generateTestArr(intervalsForTest,numberOfTasks)
    console.log(testArr)
    // let testArr = muzWorker.generateTestArr(intervalsForTest, numberOfTasks)
    // console.log(testArr)
    // console.log(this.props)
    // let C1 = $('path').find( el => el.firstChild === 'C - 1')
    // console.log(C1)
    //   // .css('fill', 'green')
    $('path').on('click', function () {
      console.log($(this))
      $(this).toggleClass('clicked-key')
    })
    // $('.clicked-key').css('fill', 'red')
  }
  
  render () {
    return (
      <div>
        <WorkHeader
          testIntervalData={this.state.testIntervalData}
        />
        <div className="work-pane">
          <FormSummary/>
          <Keyboard/>
        </div>
      
      </div>
    )
  }
}

export default WorkPane