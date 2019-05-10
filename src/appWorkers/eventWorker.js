import jquery from 'jquery'
import resultsHandler from './resultHandler'
import muzWorker from "./intervalWorker";

let $ = jquery
const eventWorker = (() => {
    function mapForMuzWorkerGenerateTest(testIntervalData, language) {
      testIntervalData['intervalsForTest'].serializeArray()
        .map(function (el) {
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

    function pathClicked(event, props) {
      event.preventDefault()
      let targetId = event.target.id.split('-').join(' - ')
      // console.log(targetId)
      $('#testedAnswer').val(targetId)
      $('.clicked-key').toggleClass()
      props.setUserAnswer(targetId)
      $(this).addClass('clicked-key')
    }

    function baseKeyColorize(testInterval) {
      $('path').removeClass('base-key clicked-key')
      let baseToneId = testInterval.baseTone.split(' ').join('')
      let baseKey = $(`path#${baseToneId}`)
      baseKey.addClass('base-key')
    }

    function redirectPageWithNullTestData(pathString) {
      let testIntervalData = {
        timeForAnswer: 0,
        numberOfTasks: 0
      }
      this.props.push(pathString, testIntervalData)
    }

    const passIndex = (() => {
      let idx = 0
      return function () {
        // console.log(idx++)
        return idx
      }
    })()

    function testButtonsCommon() {
      eventWorker.baseKeyColorize(this.props.testInterval)
      // eventWorker.answeringClicked.bind(this)
      this.props.setCurrentInterval(this.props.testArr)
      this.props.changeTasksRemaining(this.props.tasksRemaining)
      this.props.setTimeRemaining(this.props.timeForAnswer)
      this.props.setAnswerVisible(false)
      this.props.actionTimer()
      // console.log('testButtonCommon started')
    }

    function onTestButtonClick(e, props) {
      e.preventDefault()
      this.props.setTestRendered(true)
      this.props.setTestFinished(false)
      this.props.setTimerWorking(true)
      testButtonsCommon.call(this)
      this.props.setResultSaved(false)
    }

    function answeringClicked(e) {
      e.preventDefault()
      resultsHandler.answering(this.props)
      // clearTimeout(eventWorker.timer)
      // this.props.setAnsweringDisabled(true)
    }

    function nextQuestionClicked(e) {
      e.preventDefault()
      resultsHandler.answering(this.props)
      this.props.setAnsweringDisabled(false)
      this.props.setAnsweringDisabled(false)
      // ({answeringDisabled: false})
      if (this.props.tasksRemaining > 0) {
        this.props.nextQuestionClickedAction()
      } else {
        this.props.setTestFinished(true )
      }

    }

    // function newTestLink() {
    //   this.props.generateNewTest(this.props.intervalsForTest,
    //     this.props.numberOfTasks)
    //   this.props.setTestRendered.bind(this)
    //   this.setState({
    //     testFinished: false,
    //     answeringDisabled: false
    //   })
    // }

    function onLangButtonClick(el) {
      el.preventDefault()
      let payload = el.target.textContent
      // console.log(payload)
      this.props.setLanguage(el.target.textContent === 'ENGLISH' || el.target.textContent === 'EN' ?
        'en' : 'bg')
    }

    function setTestRendered() {
      return this.setState({testRendered: !this.testRendered})
    }
   return {
      answeringClicked,
      setTestRendered,
      pathClicked,
      baseKeyColorize,
      onLangButtonClick,
      passIndex,
      onTestButtonClick,
      nextQuestionClicked,
      redirectPageWithNullTestData

    }
  }
)()

// let props = {
//   intervalsForTest: ['голяма секунда'],
//   numberOfTasks: 4,
// timeForAnswer:4
// }
// // console.log(eventWorker.generateNewTestLink(props))
// eventWorker.timer(props)
export default eventWorker

