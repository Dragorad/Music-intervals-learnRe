import React, { Component } from 'react'
import FormInput from './Form-input.js'
import muzWorker from '../../intervalWorker.js'

let {intervals} = muzWorker

let {secondMinor, secondMajor, thirdMinor, thirdMajor, ...rest} = intervals
let {fourthPerfect, fourthAug, fifthDiminished, fifthPerfect, ...rest1} = rest
let {sixthMinor, sixthMajor, seventhMinor, seventhMajor, ...rest2} = rest1

let firstIntervals = [secondMinor, secondMajor, thirdMinor, thirdMajor]
let secondIntervals = [fourthPerfect, fourthAug, fifthDiminished, fifthPerfect]
let thirdIntervals = [sixthMinor, sixthMajor, seventhMinor, seventhMajor]

let intervalsGroups = [firstIntervals, secondIntervals, thirdIntervals]

class IntervalGroup extends Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return (
      <div className='little-big-intervals'>
        
        {this.props.group.map((obj, i) => {
          return (
            <FormInput
              key={i}
              classString='interval-button-medium'
              typeStr='checkbox'
              inputId={obj.name.en}
              inputName={obj.name.bg}
              idx={obj.idx}
              labelText={obj.name.bg}
            />
          )
        })
        }      </div>)  }
}

export default IntervalGroup
