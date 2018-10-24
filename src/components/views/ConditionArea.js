import React, { Component } from 'react'
import {connect} from 'react-redux'

class ConditionArea extends Component {
  render () {
    return (
      <ConditionArea text={this.state.timeRemaining} text1={this.state.tasksRemaining} intervalData={intervalData}
                     onClick={this.onTestButtonClick.bind(this)}/>
    )
  }
}

function mapStateToProps () {

}
export default connect(mapStateToProps)
(ConditionArea)
