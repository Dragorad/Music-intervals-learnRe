import React, { Component } from 'react'
import WorkHeader from '../views/WorkHeader'
import FormSummary from '../views/FormSummary'
import Keyboard from '../views/Keyboard'
import jQuery from 'jquery'

import muzWorker from '../../intervalWorker'
import { displayIntervalsNames } from '../../redux/reducers/DisplayIntervalsNames'
import configureStore from '../../redux/configureStore'
import TestArea from '../views/TestArea'

let $ = jQuery

class WorkPaneRedux extends Component {
  constructor (props) {
    super(props)
    this.state = {
      testIntervalData: JSON.parse(window.localStorage.getItem('testIntervalData')),
      testArr: JSON.parse(window.localStorage.getItem('testArr'))
    }
  }
  generateNewTest(){
    let testData = this.state.testIntervalData
    let newTest = muzWorker.generateTestArr(testData.intervalsForTest, testData.numberOfTasks)
    this.setState({testArr: newTest})
    console.log(newTest)
  }
  // componentWillMount () {
  
  
  // let {intervalsForTest, numberOfTasks} = this.state.testIntervalData
  
    // let C1 = $('path').find( el => el.firstChild === 'C - 1')
    // console.log(C1).css('fill', 'green')
    componentDidMount () {
    let path = $('path')
    path.on('click', function () {
        console.log($(this))
        console.log($(this))
        $(this).toggleClass('clicked-key')
      })
      path.on('hover', function () {
        $(this).css('background-color', 'green')
      })
    }
    
  
  render () {
    let testIntervalData = this.state.testIntervalData
    let testArr = this.state.testArr
    return (
      <div className='all-work'>
        <WorkHeader
          testIntervalData={testIntervalData}
          generateNewTest={this.generateNewTest.bind(this) }
        />
        <div className='work-pane'>
          <FormSummary
            testIntervalData={testIntervalData}
            testArr={testArr}
            generateNewTest={this.generateNewTest.bind(this)}/>
          <Keyboard />
          
        </div>
      
      </div>
    
    )
  }
}

export default WorkPaneRedux
