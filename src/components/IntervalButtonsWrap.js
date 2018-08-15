import React, { Component } from 'react'
import muzWorker from '../intervalWorker'
import FormInput from './Form-input'
import IntervalGroup from './IntervalGroup'

let {intervals} = muzWorker

console.log(intervals)

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
    en: 'unselect all'
  }
},]
console.log(fourthIntervals)
let intervalsGroups = [firstIntervals, secondIntervals, thirdIntervals, fourthIntervals]

class IntervalButtonsWrap extends Component {
  render () {
    return (<div className='interval-buttons-wrap'>
        {intervalsGroups.map((groupX, i) => {
          return (
            <IntervalGroup
              key={i}
              group={groupX}
            />
          )
        })
        }
        <button value="send">ГЕНЕРИРАЙ ТЕСТ</button>
      </div>
    )
  }
}

export default IntervalButtonsWrap