import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import jquery from 'jquery'
import muzWorker from '../../appWorkers/intervalWorker'
import { generateNewTest } from '../../redux/actions/indexActions'

let $ = jquery

const WorkHeader = (props) => {
  
  function componentDidMount (props) {
    console.log('mounting work-pane')
    console.log(props.testIntervalData)
  }
  
  function componentWillUnmount () {
    window.localStorage.clear()
  }
  
  let intervalData = props.testIntervalData
  
  console.log(props.testArr)
  
  function setNewTest (intervalData) {
    let newTest = muzWorker.generateTestArr(intervalData.intervalsForTest, intervalData.numberOfTasks)
    console.log(newTest)
    return newTest
  }
  
  return (
    <header>
      <Link to='/index' className='summary-field' onClick={() => window.localStorage.clear()}>НОВ ТЕСТ ОТНАЧАЛО</Link>
      <Link to='/work-pane' className='summary-field'
            onClick={(e) => {
              e.preventDefault()
              props.generateNewTest(props.testIntervalData.intervalsForTest,
                props.testIntervalData.numberOfTasks)
            }
            }
      >НОВ ТЕСТ СЪС СЪЩИТЕ ИНТЕРВАЛИ</Link>
      <p> включени интервали: <br/>
        <span>{intervalData.intervalsForTest.map(el => el.name).join(', ')}</span>
      </p>
      <p>общ брой задачи: <br/>
        <span>{intervalData.numberOfTasks} </span>
      </p>
      <p>максимално време за задача: <br/>
        <span>
            {intervalData.timeForAnswer}
          </span>
      </p>
    
    </header>
  )
  
}

function mapStateToProps (state) {
  return {testIntervalData: state.testIntervalData}
}

function mapDispatchToProps (dispatch) {
  return {
    generateNewTest: (intervalsForTest, numberOfTasks) => {dispatch(generateNewTest(intervalsForTest, numberOfTasks))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkHeader)
