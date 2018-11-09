import React, { Component } from 'react'
import WorkHeader from '../views/WorkHeader'
import FormSummary from '../views/FormSummary'
import Keyboard from '../views/Keyboard'
import * as actions from '../../redux/actions/indexActions'
import jQuery from 'jquery'
import { connect } from 'react-redux'


let $ = jQuery

class WorkPaneRedux extends Component {
  // generateNewTest () {
  //   let testData = this.state.testIntervalData
  //   let newTest = muzWorker.generateTestArr(testData.intervalsForTest, testData.numberOfTasks)
  //   console.log(newTest)
  //   window.localStorage.setItem('testArr', JSON.stringify(newTest))
  constructor (props) {
    super(props)
    this.state = {
      testRendered: false
      
    }
  }
  
  componentDidMount () {
    let that = this
    let path = $('path')
    path.on('click', function () {
      console.log($(this))
      let targetId = this.id.split('-').join(' - ')
      console.log(targetId)
      that.props.setUserAnswer(targetId)
      $('#testedAnswer').val(targetId)
      $('.clicked-key').toggleClass()
      $(this).toggleClass('clicked-key')
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
const mapDispatchToProps = dispach => ({
  setUserAnswer: userAnswer => dispach(actions.setUserAnswer(userAnswer))
})
export default connect(mapStateToProps, mapDispatchToProps)(WorkPaneRedux)
