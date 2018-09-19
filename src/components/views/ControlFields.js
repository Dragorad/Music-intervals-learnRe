import React, { Component } from 'react'
import NumericControlField from './NumericControlField.js'
import FormInput from './Form-input.js'
// import IntervalButtonsWrap from './IntervalButtonsWrap.js'
import muzWorker from '../../intervalWorker'
// import IntervalGroup from './IntervalGroup'
// import props from './ControlForm'

let {intervals} = muzWorker

let regimes = [
  ['only-generate', 'само генериране'],
  ['local-store', 'генериране и запазване локално'],
  ['exam', 'изпит']]

class ControlFields extends Component {
  constructor (props) {
    super(props)
    this.handleInputChange = this.props.handleInputChange.bind(this)
  }
  
  render () {
    return (
      
      <div className="controls-wrap">
        <NumericControlField
          handleInputChange={this.handleInputChange.bind(this)}
          fieldName='timeForAnswer'
          placeholder='time for answer'
          text='време за отгатване'/>
        <NumericControlField
          handleInputChange={this.handleInputChange.bind(this)}
          fieldName='numberOfTasks'
          placeholder='number of tasks'
          text='брой задачи'/>
        <div className="regimes">
          <p>Режими на ползване</p>
          <div className="radio-inputs">
            {regimes.map((obj, i) => {
              return (<FormInput
                key={i}
                // onClick={this.props.handleInputChange}
                classString='radio-input'
                typeStr='radio'
                inputId={obj[0]}
                inputName='regime'
                idx='M2'
                labelText={obj[1]}
              />)
            })}
          </div>
        </div>
      </div>)
  }
}

export default ControlFields


