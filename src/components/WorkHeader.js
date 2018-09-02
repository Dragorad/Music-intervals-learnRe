import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { testIntervalData } from './ControlForm'
import jquery from 'jquery'

let $ = jquery
class WorkHeader extends Component {
  constructor (props) {
    super(props)
   
  }
  componentDidMount(props){
    console.log('mounting work-pane')
 
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
          {/*{<span>{ this.testIntervalData.intervalsForTest }</span>}*/}
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