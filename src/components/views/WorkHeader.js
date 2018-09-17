import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { testIntervalData } from './ControlForm'
import jquery from 'jquery'
import muzWorker from '../../intervalWorker'

let $ = jquery

class WorkHeader extends Component {
  constructor (props) {
    super(props)
  }
  
  
  componentDidMount (props) {
    console.log('mounting work-pane')
    console.log(this.props.testIntervalData)
  }
  
  componentDidUnmount () {
    window.localStorage.clear()
  }
  
  render () {
    let intervalData = this.props.testIntervalData
    return (
      <header>
        <Link to='/index' className='summary-field' onClick={() => window.localStorage.clear()}>НОВ ТЕСТ ОТНАЧАЛО</Link>
        <Link to='/re-test' className='summary-field'
              // onClick={this.props.renderNewTest.bind(this)}
        >
          НОВ ТЕСТ СЪС СЪЩИТЕ ИНТЕРВАЛИ</Link>
        <p> включени интервали: <br/>
          <span>{intervalData.intervalsForTest.join(', ')}</span>
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
}

export default WorkHeader