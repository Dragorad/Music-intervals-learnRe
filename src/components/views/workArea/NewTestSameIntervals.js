import React from 'react'
import { connect } from 'react-redux'
import { reGenerateNewTest } from '../../../redux/actions/indexActions'

const mapStateToProps = state => ({
  testIntervalData: state.testIntervalData
  
})

const mapDispatchToProps = dispatch => ({
  reGenerateNewTest: boolean => dispatch(reGenerateNewTest(boolean))
})
export default connect(mapStateToProps, mapDispatchToProps)(NewTestSameIntervals)

function NewTestSameIntervals (props) {
  return <button className='summary-field link'
                 onClick={(e) => {
                   // e.preventDefault()
                   props.reGenerateNewTest(true)

                 }}
  >{props.texts.sameIntervals.toUpperCase()}</button>
}
