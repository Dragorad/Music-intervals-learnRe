import jquery from 'jquery'
import languagesText from '../LanguagesData/LanguagesText'

let $ = jquery
const eventWorker = (() => {
    function pathClicked (event, props) {
      event.preventDefault()
      let targetId = event.target.id.split('-').join(' - ')
      console.log(targetId)
      $('#testedAnswer').val(targetId)
      $('.clicked-key').toggleClass()
      props.setUserAnswer(targetId)
      $(this).addClass('clicked-key')
    }
    
    function baseKeyColorize (testInterval) {
      $('path').removeClass('base-key clicked-key')
      let baseToneId = testInterval.baseTone.split(' ').join('')
      let baseKey = $(`path#${baseToneId}`)
      baseKey.addClass('base-key')
    }
    
    function redirectPageWithNullTestData (pathString) {
      let testIntervalData = {
        timeForAnswer: 0,
        numberOfTasks: 0
      }
      this.props.push(pathString, testIntervalData)
    }
    
    function generateNewTestLink (e) {
      console.log(this.props.intervalsForTest)
      let intervalsForTest = this.props.intervalsForTest
      // .map(el => el.name)
      console.log(intervalsForTest)
      let numberOfTasks = this.props.numberOfTasks
      e.preventDefault()
      let testIntervalData = this.props.generateNewTest(intervalsForTest, numberOfTasks)
      console.log(testIntervalData)
      
    }
    
    const passIndex = (() => {
      let idx = 0
      return function () {
        console.log(idx++)
        return idx
      }
    })()
    
    function testButtonsCommon () {
      eventWorker.baseKeyColorize(this.props.testInterval)
      this.props.changeTasksRemaining(this.props.tasksRemaining)
      this.props.setTimeRemaining(this.props.timeForAnswer)
      // this.props.setTimerWorking(true)
      this.props.actionTimer()
      // eventWorker.timer(this.props)
      console.log('testButtonCommon started')
    }
    
    function onTestButtonClick (e, props) {
      e.preventDefault()
      this.props.setTestRendered(true)
      this.props.setTimerWorking(true)
      testButtonsCommon.call(this)
    }
    
    function nextQuestionClicked (e, props) {
      e.preventDefault()
      // this.props.setTimeRemaining(0)
      // this.props.setTimerWorking(false)
      // this.props.timerReset()
      
      // this.props.changeTasksRemaining(this.props.tasksRemaining)
      // this.props.setTimeRemaining(this.props.timeForAnswer)
      // let timeForAnswer = this.props.timeForAnswer
      // let testInterval = {...this.props.testInterval}
      // this.props.setTimeRemaining(timeForAnswer)
      // eventWorker.baseKeyColorize(testInterval)
      console.log('next question clicked')
      let language = this.props.language
      if (this.props.tasksRemaining > 0) {
        this.props.setCurrentInterval(this.props.testArr)
        this.props.setTimeRemaining(this.props.timeForAnswer)
        $('#testedAnswer').val(`${languagesText[language].workPane.answerArea.dontKnow}`)
        this.props.changeTasksRemaining(this.props.tasksRemaining)
        this.props.setAnswerVisible(false)
        // testButtonsCommon.call(this)
        this.setState({answeringDisabled: false})
        eventWorker.baseKeyColorize(this.props.testInterval)
        this.props.actionTimer()
        console.log(this.props.testInterval.baseTone)
        // let testArr = this.props.testArr
        this.props.updateFormState()
      } else {
        this.setState({testFinished: true})
      }
    }
    
    // const timer = (props) => {
    //   let timeForAnswer = props.timeForAnswer
    //   let timerId = setTimeout(function inner (time) {
    //     // let reset = props.timeRemaining
    //     // if (props.timeRemaining === 0) {
    //     //   return
    //     // }
    //     time -= 1
    //     let timerWorking = props.timerWorking
    //     console.log(timerWorking + ' timer ')
    //     props.setTimeRemaining(time)
    //     console.log(timerWorking)
    //     timerId = setTimeout(inner, 1500, time)
    //     if (time === 0) {
    //       props.setAnswerVisible(true)
    //       console.log('HO')
    //       clearTimeout(timerId)
    //     }
    //   }, 1500, timeForAnswer)
    // }
    
    function newTestLink () {
      this.props.generateNewTest(this.props.intervalsForTest,
        this.props.numberOfTasks)
      this.props.setTestRendered.bind(this)
      this.setState({
        testFinished: false,
        answeringDisabled: false
      })
    }
    
    function onLangButtonClick (el) {
      el.preventDefault()
      let payload = el.target.textContent
      console.log(payload)
      this.props.setLanguage(el.target.textContent === 'ENGLISH' || el.target.textContent === 'EN' ?
        'en' : 'bg')
    }

    function setTestRendered () {
      return this.setState({testRendered: !this.testRendered})
    }
    
    return {
      setTestRendered,
      pathClicked,
      baseKeyColorize,
      onLangButtonClick,
      passIndex,
      generateNewTestLink,
      newTestLink,
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
// console.log(eventWorker.generateNewTestLink(props))
// eventWorker.timer(props)
export default eventWorker

