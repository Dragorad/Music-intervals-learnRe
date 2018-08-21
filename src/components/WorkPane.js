import React, { Component } from 'react'
import WorkHeader from './WorkHeader'
import Footer from './Footer'
import FormSummary from './FormSummary'
import Keyboard from './Keyboard'

class WorkPane extends Component {
  render () {
    return (
      <div>
        <WorkHeader/>
        <div className="work-pane">
          <FormSummary/>
          <Keyboard/>
        </div>
        
      </div>
    )
  }
}

export default WorkPane