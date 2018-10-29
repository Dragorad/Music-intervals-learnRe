import React, { Component } from 'react'
import jquery from 'jquery'
import ControlFields from './ControlFields.js'
import IntervalButtonsWrap from './IntervalButtonsWrap'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/indexActions'

let $ = jquery
let testIntervalData = {}
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
    // if (target.type === 'checkbox') {
    //   console.log(this)
    // }
    let field = target.type === 'checkbox' ? target.checked : target.value
    let value = target.value

    testIntervalData[target.name] = Number(target.value)
    this.setState({ [target]: value })
  }

  handleSubmit (event) {
    event.preventDefault()
    let intervalsForTest = $('input[type="checkbox"]:checked').not(
      $('#select-all')
    )
    let timeForAnswer = testIntervalData.timeForAnswer
    if (timeForAnswer < 2 || timeForAnswer > 20) {
      alert('time for answer must be between 2 and 20 seconds')
      return
    }
    let numberOfTasks = testIntervalData.numberOfTasks
    if (numberOfTasks < 2) {
      alert('number of tasks must be at last 2')
      return
    }

    testIntervalData[
      'intervalsForTest'
    ] = intervalsForTest.serializeArray().map(el => el.name)
    if (intervalsForTest.length === 0) {
      alert('You have to select at last one interval for test')
    } else {
      this.props.generateTestArr(
        testIntervalData.intervalsForTest,
        numberOfTasks
      )
      this.props.setTestIntervalData(testIntervalData)
      this.props.setPointsPerAnswer(testIntervalData)
      window.localStorage.setItem(
        'testIntervalData',
        JSON.stringify(testIntervalData)
      )
      window.localStorage.setItem('testArr', JSON.stringify(testArr))

      $('#C-1').css('color', 'red')
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
        <h2> Добре дошли в Intervals L </h2>
        <h3> Опитвайте и ще успеете! Никой не се е родил научен!!! </h3>
        <div className='example'>
          <p>
            {' '}
            Задайте време за отговор между 2 и 20 секунди, брой на задачите не
            по-малък от 2 и изберете поне един интервал върху който да се
            задават въпроси.
          </p>
          <p>
            {' '}
            Всеки вид интервал включен в теста дава по 20 точки за верен отговор
          </p>
          <p>
            {' '}
            Всяка секунда отпусната за отговаряне намалява резултата за верен
            отговор с 1 точка
          </p>
        </div>
        <div className='example'>
          <p>
            {' '}
            Пример:
            <br />
          </p>
          <p>
            Ако тестът включва само малки секунди за всеки отговор ще получите
            20 точки минус броя на секундите за отговор. Ако си дадете 15
            секунди за мислене ви остават по 5 точки за всеки верен отговор.
          </p>
          <p>
            {' '}
            Ако тестът включва малки секунди, малки и големи терци за всеки
            отговор ще получите по 60 точки минус броя на секундите. Ако
            секундите са по 5 за отговор ще получите по 55. Всеки грешен отговор
            отнема по толкова точки, колкото се дават за верен отговор.
          </p>
        </div>
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

const mapDispatchToProps = dispatch => ({
  setTestIntervalData: testIntervalData =>
    dispatch(actions.setTestIntervalData(testIntervalData)),
  generateTestArr: (intervalsForTest, numberOfTasks) =>
    dispatch(actions.generateTestArr(intervalsForTest, numberOfTasks)),
  setPointsPerAnswer: testIntervalData =>
    dispatch(actions.setPointsPerAnswer(testIntervalData))
})

export default connect(
  null,
  mapDispatchToProps
)(ControlForm)
