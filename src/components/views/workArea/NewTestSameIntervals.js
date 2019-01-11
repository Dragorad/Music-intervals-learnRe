import { Link } from 'react-router-dom'
import React from 'react'

export default  function NewTestSameIntervals (props) {
  return <Link to={'/controlForm'} className='summary-field link'
               onClick={(e) => {
                 e.preventDefault()
                 let intervalsForTest = this.props.intervalsForTest.map(el => el.name.bg)
                 let numberOfTasks = this.props.numberOfTasks
                 this.props.generateNewTest(intervalsForTest, numberOfTasks)
                 console.log(intervalsForTest)
               }}
               >{props.texts.sameIntervals.toUpperCase()}</Link>
}
