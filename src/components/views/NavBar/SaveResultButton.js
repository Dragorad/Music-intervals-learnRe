import React from 'react'
import {connect} from 'react-redux'
import dataWorker from '../../../appWorkers/dataWorker'
import languagesText from '../../../LanguagesData/LanguagesText'
import {notify} from 'react-notify-toast'
import {setResultSaved} from "../../../redux/actions/indexActions";

function mapStateToProps(state) {
    return {
        isSigned: state.isSigned,
        userName: state.userName,
        testIntervalData: state.testIntervalData,
        sessionPoints: state.sessionPoints,
        sessionAnswers: state.sessionAnswers,
        language: state.languageSelected,
        resultSaved: state.resultSaved
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setResultSaved: boolean => dispatch(setResultSaved(boolean))
    }
}

function SaveResultButton(props) {
    let sessionPoints = props.sessionPoints
    let resultSaved = props.resultSaved
    return (
        <button className='save-result'
                // disabled={resultSaved}
                onClick={event => {
                    event.preventDefault()
                    if (sessionPoints <= 0) {
                        let messageTxt = languagesText[props.language].alerts.alertNullPoints
                        notify.show(messageTxt, 'warning')
                        return
                    }
                    if (resultSaved) {
                        notify.show("You can't save result more than once, please start new test from beginning of with the same intervals", 'warning')
                        return;
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
                    props.setResultSaved(true)
                }
                }>Save Result
        </button>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(SaveResultButton)
