import React, { Component } from 'react'
// import muzWorker from '../intervalWorker.js'
import ControlFields from './ControlFields.js'
import IntervalButtonsWrap from './IntervalButtonsWrap'
import Footer from './Footer'
class ControlForm extends Component {
  render () {
    return (
      <form method='GET' action='#/conditions'>
        <h2> Добре дошли в Intervals L </h2>
        <p> Опитвайте и ще успеете!Никой не се е родил научен!!! </p>
        <div className='fields-wrap'>
          <ControlFields/>
          <IntervalButtonsWrap/>
          <Footer/>
        </div>
      </form>)
  }
}

export default ControlForm
