import React, { Component } from 'react'
import WorkHeader from './WorkHeader'
import FormSummary from './FormSummary'
import Keyboard from './Keyboard'
import jQuery from 'jquery'
import muzWorker from '../intervalWorker'
import { createStore } from 'redux'
import { displayIntervalsNames } from '../redux/reducers/DisplayIntervalsNames'

let $ = jQuery

// let store = createStore(displayIntervalsNames)

class WorkPane extends Component {
  constructor (props) {
    super(props)
    this.state = {
      testIntervalData: {}
    }
  }

  componentWillMount () {
    let testIntervalData = JSON.parse(window.localStorage.getItem('testIntervalData'))
    console.log(testIntervalData)

    this.setState({testIntervalData}, function () {
      console.log(this.state.testIntervalData)
      let {intervalsForTest, numberOfTasks} = this.state.testIntervalData

      console.log(intervalsForTest)
      let testArr = muzWorker.generateTestArr(muzWorker.generateTestArr(intervalsForTest, numberOfTasks))
      console.log(testArr)
    })
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
    let testIntervalData = this.state.testIntervalData
    return (
      <div>
        <WorkHeader
          testIntervalData={testIntervalData}
        />
        <div className='work-pane'>
          <FormSummary
            testIntervalData={testIntervalData} />
          <Keyboard />
        </div>

      </div>
    )
  }
}

export default WorkPane
