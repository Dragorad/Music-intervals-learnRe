import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import { setTestArr, setTestIntervalData } from '../../../redux/actions/indexActions'

const mapDispatchToProps = dispatch => ({
  setTestIntervalData: () => dispatch(setTestIntervalData({})),
  setTestArr: () => dispatch(setTestArr([]))
})
export default connect(null, mapDispatchToProps)(NewTestLink)

function NewTestLink (props) {
  return (<Link to={'/control-form'}
                onClick={() => {
                  props.setTestIntervalData()
                  props.setTestArr()
                }}
                className='summary-field link'
    // onClick={e => {
    //   e.preventDefault()
    //   eventWorker.redirectPageWithNullTestData('/control-form').bind(this)
    //   window.localStorage.clear()
    // }}
  >{props.texts.fromBeginning.toUpperCase()}</Link>)
}
