import { Link } from 'react-router-dom'
import React from 'react'
import eventWorker from '../../../appWorkers/eventWorker'

export default function NewTestLink (props) {
  return (<Link to={'/control-form'} className='summary-field link'
               onClick={() => {
                 eventWorker.redirectPageWithNullTestData('/control-form')
                 window.localStorage.clear()
               }}>{props.texts.fromBeginning.toUpperCase()}</Link>)
}
