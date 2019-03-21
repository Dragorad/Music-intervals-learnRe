import React from 'react'
import { connect } from 'react-redux'
import dataWorker from '../../../appWorkers/dataWorker'
import languagesText from '../../../LanguagesData/LanguagesText'
import { notify } from 'react-notify-toast'

function mapStateToProps (state) {
  return {
    isSigned: state.isSigned,
    userName: state.userName,
    testIntervalData: state.testIntervalData,
    sessionPoints: state.sessionPoints,
    sessionAnswers: state.sessionAnswers,
    language: state.languageSelected
  }
}

function SaveResultButton (props) {
  let sessionPoints = props.sessionPoints
  
  return (
    <button className='save-result'
            onClick={event => {
              event.preventDefault()
              if (sessionPoints <= 0) {
                let messageTxt = languagesText[props.language].alerts.alertNullPoints
                notify.show(messageTxt, 'warning')
                return
              }
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
            }
      
            }>Save Result
    </button>
  )
}

export default connect(mapStateToProps)(SaveResultButton)
