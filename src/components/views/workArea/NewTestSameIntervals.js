import React from 'react'
import { connect } from 'react-redux'
import { reGenerateNewTest } from '../../../redux/actions/indexActions'

const mapStateToProps = state => ({
  testIntervalData: state.testIntervalData
  
})

const mapDispatchToProps = dispatch => ({
  reGenerateNewTest: () => dispatch(reGenerateNewTest())
})
export default connect(mapStateToProps, mapDispatchToProps)(NewTestSameIntervals)

function NewTestSameIntervals (props) {
  return <button className='summary-field link'
                 onClick={(e) => {
                   // e.preventDefault()
                   props.reGenerateNewTest()
    
                 }}
  >{props.texts.sameIntervals.toUpperCase()}</button>
}
