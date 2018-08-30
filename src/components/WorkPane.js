import React, { Component } from 'react'
import WorkHeader from './WorkHeader'
import FormSummary from './FormSummary'
import Keyboard from './Keyboard'
import testIntervalData from './ControlForm'



class WorkPane extends Component {
  constructor (props) {
    super(props)
    // this.testIntervalData = this.props.testIntervalData.bind(this)
  }
  render () {
    return (
      <div>
        <WorkHeader
        // testIntervalData={this.testIntervalData.bind(this)}
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