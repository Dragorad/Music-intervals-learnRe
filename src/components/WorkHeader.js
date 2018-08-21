import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class WorkHeader extends Component {
  render () {
    return (
      <header>
        <Link to="/index" className="summary-field ">НОВ ТЕСТ ОТНАЧАЛО</Link>
        <Link to="/re-test" className="summary-field ">НОВ ТЕСТ СЪС СЪЩИТЕ ИНТЕРВАЛИ</Link>
        <p> regime включени интервали <span> intervals </span></p>
        <p>общ брой задачи <span> tasksNumber </span></p>
        <p>максимално време за задача <span>  time </span></p>
  
      </header>
    )
  }
}

export default WorkHeader