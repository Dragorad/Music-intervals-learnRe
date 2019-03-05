import React from 'react'
import { connect } from 'react-redux'
import { generateNewTest } from '../../../redux/actions/indexActions'

const mapStateToProps = state => ({
  testIntervalData: state.testIntervalData
  
})

const mapDispatchToProps = dispatch => ({
  generateNewTest: () => dispatch(generateNewTest())
})
export default connect(mapStateToProps, mapDispatchToProps)(NewTestSameIntervals)

function NewTestSameIntervals (props) {
  return <button className='summary-field link'
                 onClick={(e) => {
                   // e.preventDefault()
                   props.generateNewTest()
    
                 }}
  >{props.texts.sameIntervals.toUpperCase()}</button>
}
