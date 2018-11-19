import React, { Component } from 'react'
import muzWorker from '../../../appWorkers/intervalWorker'
import FormInput from './FormInput'
import IntervalGroup from './IntervalGroup'

let {intervals} = muzWorker
let {secondMinor, secondMajor, thirdMinor, thirdMajor, ...rest} = intervals
let {fourthPerfect, fourthAug, fifthDiminished, fifthPerfect, ...rest1} = rest
let {sixthMinor, sixthMajor, seventhMinor, seventhMajor} = rest1

let firstIntervals = [secondMinor, secondMajor, thirdMinor, thirdMajor]
let secondIntervals = [fourthPerfect, fourthAug, fifthDiminished, fifthPerfect]
let thirdIntervals = [sixthMinor, sixthMajor, seventhMinor, seventhMajor]
let fourthIntervals = [intervals.octave,
  {
  idx: 13,
  name: {
    bg: 'избери всички',
    en: 'select all'
  }
},
  {  idx: 13,
  name: {
    bg: 'освободи всички',
    en: 'deselect all'
  }
},]

let intervalsGroups = [firstIntervals, secondIntervals, thirdIntervals, fourthIntervals]

class IntervalButtonsWrap extends Component {
  constructor (props) {
    super(props)
    this.props.handleSubmit.bind(this)
    this.props.handleInputChange.bind(this)
  }
  
  render () {
    return (<div className='interval-buttons-wrap'>
        {intervalsGroups.map((groupX, i) => {
          return (
            <IntervalGroup
              handleInputChange={this.props.handleInputChange.bind(this)}
              handleEvent={this.props.handleEvent}
              key={i}
              group={groupX}
            />
          )
        })
        }
        <button value="send"
                onClick={this.props.handleSubmit.bind(this)}>GENERATE TEST/ ГЕНЕРИРАЙ ТЕСТ</button>
      </div>
    )
  }
}

export default IntervalButtonsWrap
