import React, { Component } from 'react'
import jquery from 'jquery'
// import muzWorker from '../intervalWorker.js'
import ControlFields from './ControlFields.js'
import IntervalButtonsWrap from './IntervalButtonsWrap'
import Footer from './Footer'
import { Redirect } from 'react-router-dom'
import NumericControlField from './NumericControlField'
import FormInput from './Form-input'

let $ = jquery
let intervalData = {}
let regimes = [['only-generate', 'само генериране'],
  ['local-store', 'генериране и запазване локално'],
  ['exam', 'изпит']]

class ControlForm extends Component {
  constructor (props) {
    super(props)
    this.input = React.createRef()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.redirectPage.bind(this)
    this.state = {
      timeForAnswer: '',
      numberOfTasks: ''
    }
  }
  
  redirectPage () {
    this.props.push('/work-pane')
  }
  
  handleInputChange (event) {
    event.preventDefault()
    
    let target = event.target
    let field = target.type === 'checkbox' ? target.checked : target.value
    let value = target.value
    this.setState({[target]: value})
    console.log({[target]: value})
    
  }
  
  handleSubmit (event) {
    event.preventDefault()
    this.props.history.push('/work-pane')
    // let timeForAnswer = $('input[name="time-for-answer"]').value()
    let numberOfTasks = $('input[name="number-of-tasks"]')
    let intervalsForTest = $('input[type="checkbox"]:checked')
    intervalData = this.state.data
    console.log(intervalData)
    // let stateObj = {
    //   'intervalsForTest': intervalsForTest,
    //   'timeForAnswer': timeForAnswer,
    //   'numberOfTasks': numberOfTasks
    // }
    // console.log(stateObj)
    console.log(this.state.numberOfTasks)
    this.redirectPage.bind(this)
  }
  
  render () {
    return (
      <form method='GET' action='#/conditions'
            onSubmit={this.handleSubmit.bind(this)}>
        <h2> Добре дошли в Intervals L </h2>
        <p> Опитвайте и ще успеете!Никой не се е родил научен!!! </p>
        <div className='fields-wrap'>
          <ControlFields
          handleInputChange={this.handleInputChange.bind(this)}/>
          
          <IntervalButtonsWrap
            handleSubmit={this.handleSubmit.bind(this)}/>
        </div>
      </form>)
  }
}

export default ControlForm
