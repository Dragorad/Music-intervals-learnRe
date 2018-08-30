import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { testIntervalData } from './ControlForm'

class WorkHeader extends Component {
  constructor (props) {
    super(props)
   // this.testIntervalData = JSON.parse(localStorage.getItem('testIntervalData'))
  }
  componentWillMount(){
    console.log('mounting work-pane')
    this.props.testIntervalData = localStorage.getItem('testIntervalData')
    let testIntervalData = this.props.testIntervalData
    console.log(testIntervalData)
  }
  componentWillUnmount(){
    window.localStorage.clear()
  }
  render () {
    return (
      <header>
        <Link to="/index" className="summary-field " onClick={() => localStorage.clear()} >НОВ ТЕСТ ОТНАЧАЛО</Link>
        <Link to="/re-test" className="summary-field ">НОВ ТЕСТ СЪС СЪЩИТЕ ИНТЕРВАЛИ</Link>
        <p> включени интервали
          {/*{<span>{testIntervalData.intervalsForTest}</span>}*/}
        </p>
        <p>общ брой задачи
          {/*<span>{this.testIntervalData.numberOfTasks} </span>*/}
        </p>
        <p>максимално време за задача
          <span>
          {/*{this.testIntervalData.timeForAnswer}*/}
          </span>
        </p>
  
      </header>
    )
  }
}

export default WorkHeader