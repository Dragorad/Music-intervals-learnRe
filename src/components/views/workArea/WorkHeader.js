import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import TestField from './TestField'
import eventWorker from '../../../appWorkers/eventWorker'
import * as actions from '../../../redux/actions/indexActions'
import languagesText from '../../../LanguagesData/LanguagesText'

class WorkHeader extends Component {

    componentDidMount(props) {
        console.log('mounting work-pane')
        console.log(this.props.testIntervalData)
    }

    componentWillUnmount() {
        window.localStorage.clear()
    }

    render() {
        let texts = languagesText[this.props.language].workPane.workHeader

        return (
           <React.Fragment>
                <TestField
                    label={texts.pointsPerAnswer}
                    text={this.props.pointsPerAnswer} />
                <Link to={'/control-form'} className='summary-field link' onClick={() => {
                    eventWorker.redirectPageWithNullTestData('/control-form')
                    window.localStorage.clear()}
                }>{texts.fromBeginning.toLocaleUpperCase()}</Link>
                <Link to={'/controlForm'} className='summary-field link'
                        onClick={(e) => {
                            e.preventDefault()
                            let intervalsForTest = this.props.intervalsForTest.map(el => el.name.bg)
                            let numberOfTasks = this.props.numberOfTasks
                            this.props.generateNewTest(intervalsForTest, numberOfTasks)
                            console.log(intervalsForTest)
                        }
                            // eventWorker.newTestLink.bind(this)
                        }>{texts.sameIntervals.toUpperCase()}</Link>

            </React.Fragment>
        )
    }
}

const mapStateToProps = store => {
    return {
        testRendered: store.testRendered,
        testIntervalData: store.testIntervalData,
        pointsPerAnswer: store.pointsPerAnswer,
        sessionPoints: store.sessionPoints,
        intervalsForTest: store.testIntervalData.intervalsForTest,
        numberOfTasks: store.testIntervalData.numberOfTasks,
        language: store.languageSelected
    }
}
const mapDispatchToProps = dispatch => ({
    generateNewTest: (intervalsForTest, numberOfTasks) =>
        dispatch(actions.generateTestArr(intervalsForTest, numberOfTasks))
})
export default connect(mapStateToProps, mapDispatchToProps)(WorkHeader)
