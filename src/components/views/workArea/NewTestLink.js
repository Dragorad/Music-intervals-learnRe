import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import {
  reGenerateNewTest,
  resetStore,
  setSessionPoints,
  setTestArr,
  setTestIntervalData
} from '../../../redux/actions/indexActions'

const mapDispatchToProps = dispatch => ({
  setTestIntervalData: () => dispatch(setTestIntervalData({})),
  setTestArr: () => dispatch(setTestArr([])),
  setSessionPoints: points => dispatch(setSessionPoints(points)),
  // setTestRendered: boolean => dispatch(setTestRendered(boolean)),
   reGenerateNewTest: boolean => dispatch(reGenerateNewTest(boolean)),
    resetStore: () => dispatch(resetStore),
})
export default connect(null, mapDispatchToProps)(NewTestLink)

function NewTestLink (props) {
  return (<Link to={'/control-form'}
                onClick={() => {
                  // props.setTestIntervalData([])
                  // props.setTestArr([])
                  // props.setSessionPoints(0)
                  props.reGenerateNewTest(false)
                  // props.setTestRendered(false)
                  
                  // props.resetStore()
                }}
                className='summary-field link'
    // onClick={e => {
    //   e.preventDefault()
    //   eventWorker.redirectPageWithNullTestData('/control-form').bind(this)
    //   window.localStorage.clear()
    // }}
  >{props.texts.fromBeginning.toUpperCase()}</Link>)
}
