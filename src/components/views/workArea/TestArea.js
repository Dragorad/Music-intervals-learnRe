import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../redux/actions/indexActions'
import ResultStats from './ResultStats'
import eventWorker from '../../../appWorkers/eventWorker'
import languagesText from '../../../LanguagesData/LanguagesText'
import AnswerArea from './AnswerArea'
import ConditionFields from './ConditionFields'
import NewTestLink from './NewTestLink'
import NewTestSameIntervals from './NewTestSameIntervals'
import BestResults from './BestResults'
import Keyboard0 from './Keyboard0'


class TestArea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      idxClick: 0,
      answerVisible: false,
      answeringDisabled: false,
      testFinished: this.props.testFinished
    }
   

  }

  render() {
    let text = languagesText[this.props.language].workPane
    // let BtnTexts = text.workHeader
    let language = this.props.language
    let testBtnVisible = this.props.testArr.length > 0 && !this.props.testRendered
    let texts = languagesText[language].workPane
    let startBtnTxt = texts.conditionArea.testBegin
    let testRendered = this.props.testRendered
    let testFinished = this.props.testFinished

    return (
      <React.Fragment >
        <div className={'summary'}>
          {!testBtnVisible && <Keyboard0 />}
          {testFinished && <ResultStats />}
          {testBtnVisible &&
            <div className={'start-best-results'}>
              <button className='summary-field data-field link'
                id='test-start'
                disabled={this.props.testRendered}
                name='test-start-button'
                onClick={eventWorker.onTestButtonClick.bind(this)}>
                {startBtnTxt}
              </button>
              <BestResults />
            </div>
          }

          {this.props.testRendered &&

            (!testFinished &&
              <div className='test-area'>

                <ConditionFields
                  interval={this.props.interval} language={this.props.language} />

                <AnswerArea
                  onSendAnswClick={this.props.onSendAnswClick}
                  interval={this.props.interval} />
              </div>)}
        </div>
      </React.Fragment>
    )

  }
}

const mapStateToProps = store => {
  return {
    testFinished: store.testFinished,
    interval: store.currentInterval,
    timeRemaining: store.timeRemaining,
    language: store.languageSelected,
    timeForAnswer: store.testIntervalData.timeForAnswer,
    testRendered: store.testRendered,
    testIntervalData: store.testIntervalData,
    intervalsForTest: store.testIntervalData.intervalsForTest,
    numberOfTasks: store.testIntervalData.numberOfTasks,
    totalPoints: store.totalPoints,
    sessionPoints: store.sessionPoints,
    sessionAnswers: store.sessionAnswers,
    pointsPerAnswer: store.pointsPerAnswer,
    answeringDisabled: store.answeringDisabled,
    userAnswer: store.userAnswer,
    tasksRemaining: store.tasksRemaining,
    testInterval: store.currentInterval,
    testArr: store.testArr,
    currentIntervalIdx: store.currentIntervalIdx

  }
}
const mapDispatchToProps = dispatch => ({
  setTestRendered: boolean => dispatch(actions.setTestRendered(boolean)),
  setTestFinished: boolean => dispatch(actions.setTestFinished(boolean)),
  setAnsweringDisabled: boolean => dispatch(actions.setAnsweringDisabled(boolean)),
  nextQuestionClickedAction: () => dispatch(actions.nextQuestionClickedAction()),
  timerReset: () => dispatch(actions.timerReset()),
  setTimerWorking: boolean => dispatch(actions.setTimerWorking(boolean)),
  actionTimer: () => dispatch(actions.actionTimer()),
  generateNewTest: (intervalsForTest, numberOfTasks) => dispatch(actions.generateTestArr(intervalsForTest, numberOfTasks)),
  addPointsToResult: (number, boolean) => dispatch(actions.addPointsToResult(number, boolean)),
  changeTasksRemaining: number => dispatch(actions.changeTasksRemaining(number)),
  toggleBestResults: () => dispatch(actions.toggleBestResults()),
  setBestResultsMinimized: boolean => dispatch(actions.setBestResultsMinimized(boolean)),
  setAnswerVisible: boolean => dispatch(actions.setAnswerVisible(boolean)),
  setTimeRemaining: number => dispatch(actions.setTimeRemaining(number)),
  setCurrentInterval: testArr => dispatch(actions.setCurrentInterval(testArr)),
  setResultSaved: boolean => dispatch(actions.setResultSaved(boolean)),
  addAnswerToResult: (sessionAnswers, intervalName, boolean) => dispatch(actions.addAnswerToResult(sessionAnswers, intervalName, boolean))
})
export default connect(mapStateToProps, mapDispatchToProps)(TestArea)
