import React, { Component } from 'react'
import WorkHeader from '../views/WorkHeader'
import FormSummary from '../views/FormSummary'
import Keyboard from '../views/Keyboard'
import jQuery from 'jquery'

import muzWorker from '../../intervalWorker'
import { connect } from 'react-redux'

let $ = jQuery

class WorkPaneRedux extends Component {
  generateNewTest () {
    let testData = this.state.testIntervalData
    let newTest = muzWorker.generateTestArr(testData.intervalsForTest, testData.numberOfTasks)
    console.log(newTest)
    window.localStorage.setItem('testArr', JSON.stringify(newTest))
    this.setState({
      testArr: newTest,
      testRendered: false
    })
  }

  componentDidMount () {
    let path = $('path')
    path.on('click', function () {
      console.log($(this))
      let targetId = this.id

      console.log(targetId)
      $('#testedAnswer').val(targetId.split('').join(' '))
      $('.clicked-key').toggleClass()
      $(this).toggleClass('clicked-key')
    })
    path.on('hover', function () {
      $(this).css('background-color', 'green')
    })
  }

  render () {
    let testIntervalData = this.props.testIntervalData
    let testArr = this.props.testArr
    return (
      <div className='all-work'>
        <WorkHeader
          testIntervalData={testIntervalData}
          testArr={testArr}
        />
        <div className='work-pane'>
          <FormSummary
            testIntervalData={testIntervalData}
            testArr={testArr}
          />
          <Keyboard />
        </div>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    testArr: state.testArr,
    testIntervalData: state.testIntervalData
  }
}
export default connect(mapStateToProps)(WorkPaneRedux)
