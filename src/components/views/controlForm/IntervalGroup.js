import React, { Component } from 'react'
import FormInput from './FormInput.js'
import muzWorker from '../../../appWorkers/intervalWorker.js'
import { connect } from 'react-redux'
import { setLanguage } from '../../../redux/actions/indexActions'

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
    let labelLang = this.props.language
    console.log(labelLang)
    return (
      <div className='little-big-intervals'>
        
        {this.props.group.map((obj, i) => {
          return (
            <FormInput
              key={i}
              classString='interval-button-medium'
              typeStr='checkbox'
              inputId={obj.name.en}
              inputName={obj.name[labelLang]}
              idx={obj.idx}
              labelText={obj.name[labelLang]}
            />
          )
        })
        }      </div>)  }
}

const mapStateToProps  = store => {
  return {
    language: store.languageSelected
  }
}
const mapDispatchToProps  = (dispatch, state) =>({
  setLanguage: language => dispatch(setLanguage(language))
})
export default connect(mapStateToProps, mapDispatchToProps)(IntervalGroup)

