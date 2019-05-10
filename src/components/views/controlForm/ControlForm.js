import React, {Component} from 'react'
import jquery from 'jquery'
import ControlFields from './ControlFields.js'
import IntervalButtonsWrap from './IntervalButtonsWrap'
import {connect} from 'react-redux'
import * as actions from '../../../redux/actions/indexActions'
import languagesText from '../../../LanguagesData/LanguagesText'
import muzWorker from '../../../appWorkers/intervalWorker'
import {notify} from 'react-notify-toast'

let $ = jquery
let testIntervalData = {
    timeForAnswer: 0,
    numberOfTasks: 0
}

// let testArr = {}

function mapForMuzWorkerGenerateTest(intervalsForTest, language) {

  testIntervalData['intervalsForTest'] = intervalsForTest.serializeArray().map(function (el) {
                // console.log(el)
                let elName = Object.values(muzWorker.intervals).find(elem => elem.name[language] === el.name)
                return {
                    name: elName.name,
                    trueAnswers: 0,
                    falseAnswers: 0
                }

            }
        )
}

class ControlForm extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.redirectPage.bind(this)
    }

    redirectPage() {
        this.props.push('/work-pane', testIntervalData)
    }

    handleInputChange(event) {
        event.preventDefault()
        let target = event.target
        // let field = target.type === 'checkbox' ? target.checked : target.value
        let value = target.value
        testIntervalData[target.name] = Number(target.value)
        // console.log(testIntervalData)
        this.setState({[target]: value})
    }

    handleSubmit(event) {
        event.preventDefault()
        let intervalsForTest = $('input[type="checkbox"]:checked').not(
            $('#select-all'))
        // console.log(testIntervalData)
        let alerts = languagesText[this.props.language].alerts
        let {timeForAnswer, numberOfTasks} = testIntervalData
        // // console.log(timeForAnswer)
        if (timeForAnswer < 2 || timeForAnswer > 20) {
            notify.show(alerts.alertTime, 'success')
            return
        }
        if (numberOfTasks < 2) {
            notify.show(alerts.alertTasks, 'error')
            return
        }
        // // console.log(testIntervalData.intervalsForTest)
        let language = this.props.language
        mapForMuzWorkerGenerateTest(intervalsForTest, language);
        if (intervalsForTest.length === 0) {
            notify.show(alerts.alertIntervals, 'warning')
        } else {
            let bgIntervalsForTest = [...testIntervalData.intervalsForTest].map(el => el.name.bg)
          // console.log(bgIntervalsForTest)
          this.props.generateTestArr(
                bgIntervalsForTest,
                numberOfTasks
            )
            this.props.setTestIntervalData(testIntervalData)
            this.props.setPointsPerAnswer(testIntervalData)
            let newTestArr = this.props.testArr
            // window.localStorage.setItem(
            //   'testIntervalData',
            //   JSON.stringify(testIntervalData)
            // )
            // window.localStorage.setItem('testArr', JSON.stringify(testArr))
            this.props.history.push('/work-pane')
        }
    }

    componentDidMount() {
        let boxes = $('input[type = "checkbox"]')
        let selectAllBox = $('#select-all')
        let deselectAllBox = $('#deselect-all')
        let simpleBoxes = boxes.filter((i, el) => Number(el.value) < 13)
        // // console.log(selectAllBox)
        selectAllBox.on('click', function () {
            simpleBoxes.prop('checked', true)
        })
        deselectAllBox.on('click', function () {
            boxes.prop('checked', false)
        })
    }

    render() {
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
