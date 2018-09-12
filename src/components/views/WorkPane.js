import React, { Component } from 'react'
import WorkHeader from './WorkHeader'
import FormSummary from './FormSummary'
import Keyboard from './Keyboard'
import jQuery from 'jquery'

import muzWorker from '../../intervalWorker'
import { displayIntervalsNames } from '../../redux/reducers/DisplayIntervalsNames'
import configureStore from '../../redux/configureStore'
import TestArea from './TestArea'

let $ = jQuery

let store = configureStore()

class WorkPane extends Component {
  constructor (props) {
    super(props)
    this.state = {
      testIntervalData: {}
    }
  }
  
  componentWillMount () {
    let testIntervalData = JSON.parse(window.localStorage.getItem('testIntervalData'))
    let testArr = JSON.parse(window.localStorage.getItem('testArr'))
    
    this.setState({testIntervalData, testArr}, function () {
      console.log(this.state.testIntervalData)
      console.log(this.state.testArr)
      // let {intervalsForTest, numberOfTasks} = this.state.testIntervalData
      // console.log(testArr)
    })
    
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
    let testArr = this.state.testArr
    return (
      <div>
        <WorkHeader
          testIntervalData={testIntervalData}
        />
        <div className='work-pane'>
          <FormSummary
            testIntervalData={testIntervalData}
            testArr={testArr}/>
          
          <Keyboard/>
        </div>
      
      </div>
    
    )
  }
}

export default WorkPane
