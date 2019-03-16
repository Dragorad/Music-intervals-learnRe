import React from 'react'
import { connect } from 'react-redux'
import dataWorker from '../../../appWorkers/dataWorker'

function mapStateToProps (state) {
  return {
    isSigned: state.isSigned,
    userName: state.userName,
    testIntervalData: state.testIntervalData,
    sessionPoints: state.sessionPoints,
    sessionAnswers: state.sessionAnswers
  }
}

function SaveResultButton (props) {
  return (
    <button className='save-result'
            onClick={event => {
              event.preventDefault()
              let date = new Date(Date.now())
              console.log(date.toTimeString())
              let resultObj = {
                isSigned: props.isSigned,
                user: props.userName,
                testIntervalData: props.testIntervalData,
                sessionPoints: props.sessionPoints,
                sessionAnswers: props.sessionAnswers,
                timeSaved: date
              }
              console.log(resultObj)
              dataWorker.addResult('results', resultObj)
            }}>Save Result
    </button>
  )
}

export default connect(mapStateToProps)(SaveResultButton)
