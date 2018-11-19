import React, { Component } from 'react'
import jquery from 'jquery'
import ControlFields from './ControlFields.js'
import IntervalButtonsWrap from './IntervalButtonsWrap'
import { connect } from 'react-redux'
import * as actions from '../../../redux/actions/indexActions'
import languagesText from '../../../LanguagesData/LanguagesText'
import muzWorker from '../../../appWorkers/intervalWorker'

let $ = jquery
let testIntervalData = {
  timeForAnswer: 0,
  numberOfTasks: 0
}
let testArr = {}
let regimes = [
  ['only-generate', 'само генериране'],
  ['local-store', 'генериране и запазване локално'],
  ['exam', 'изпит']
]

class ControlForm extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.redirectPage.bind(this)
  }
  
  redirectPage () {
    this.props.push('/work-pane', testIntervalData)
  }
  
  handleInputChange (event) {
    event.preventDefault()
    let target = event.target
    // let field = target.type === 'checkbox' ? target.checked : target.value
    let value = target.value
    testIntervalData[target.name] = Number(target.value)
    console.log(testIntervalData)
    this.setState({[target]: value})
  }
  
  handleSubmit (event) {
    event.preventDefault()
    let intervalsForTest = $('input[type="checkbox"]:checked').not(
      $('#select-all'))
    console.log(testIntervalData)
    let alerts = languagesText[this.props.language].alerts
    let {timeForAnswer, numberOfTasks} = testIntervalData
    console.log(timeForAnswer)
    if (timeForAnswer < 2 || timeForAnswer > 20) {
      alert(alerts.alertTime)
      return
    }
    // let numberOfTasks = testIntervalData.numberOfTasks
    if (numberOfTasks < 2) {
      alert(alerts.alertTasks)
      return
    }
    console.log(testIntervalData.intervalsForTest)
    let language = this.props.language
    // console.log(Object.values(muzWorker.intervals))
    
    testIntervalData['intervalsForTest'] = intervalsForTest.serializeArray()
      .map(function (el) {
        console.log(el)
        let elName = Object.values(muzWorker.intervals).find(elem => elem.name[language] === el.name)
        return {
            name: elName.name,
            trueAnswers: 0,
            falseAnswers: 0
          }
          
        }
      )
    if (intervalsForTest.length === 0) {
      alert(alerts.alertIntervals)
    } else {
      let bgIntervalsForTest = [...testIntervalData.intervalsForTest].map(el => el.name.bg)
      console.log(bgIntervalsForTest)
      this.props.generateTestArr(
        bgIntervalsForTest,
        numberOfTasks
      )
      this.props.setTestIntervalData(testIntervalData)
      this.props.setPointsPerAnswer(testIntervalData)
      let newTestArr = this.props.testArr
      console.log('new test Arr' + newTestArr)
      window.localStorage.setItem(
        'testIntervalData',
        JSON.stringify(testIntervalData)
      )
      window.localStorage.setItem('testArr', JSON.stringify(testArr))
      this.props.history.push('/work-pane')
    }
  }
  
  componentDidMount () {
    let boxes = $('input[type = "checkbox"]')
    let selectAllBox = $('#select-all')
    let deselectAllBox = $('#deselect-all')
    let simpleBoxes = boxes.filter((i, el) => Number(el.value) < 13)
    selectAllBox.on('click', function () {
      simpleBoxes.prop('checked', true)
    })
    deselectAllBox.on('click', function () {
      boxes.prop('checked', false)
    })
  }
  
  render () {
    return (
      <form
        method='GET'
        action='#/conditions'
        className='control-form'
        onSubmit={this.handleSubmit.bind(this)}
      >
        <div className='fields-wrap'>
          <ControlFields
            handleInputChange={this.handleInputChange.bind(this)}
          />
          
          <IntervalButtonsWrap
            handleInputChange={this.handleInputChange.bind(this)}
            handleSubmit={this.handleSubmit.bind(this)}
          />
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  testArr: state.testArr,
  language: state.languageSelected
})
const mapDispatchToProps = dispatch => ({
  setTestIntervalData: testIntervalData =>
    dispatch(actions.setTestIntervalData(testIntervalData)),
  generateTestArr: (intervalsForTest, numberOfTasks) =>
    dispatch(actions.generateTestArr(intervalsForTest, numberOfTasks)),
  setPointsPerAnswer: testIntervalData =>
    dispatch(actions.setPointsPerAnswer(testIntervalData))
  
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlForm)
