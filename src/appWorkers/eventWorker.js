import jquery from 'jquery'
import { generateNewTest } from '../redux/actions/indexActions'
import muzWorker from './intervalWorker'
import { Redirect } from 'react-router-dom'

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
    const timer = () => setTimeout(
      () => {
        let timeRemaining = this.state.timeRemaining
        if (timeRemaining > 0) {
          setTimeout(this.timer)
          this.setState({'timeRemaining': this.state.timeRemaining - 1})
        } else {
          this.setState({answerVisible: true})
          clearTimeout(this.timer)
        }
      }, 500)
    
    function newTestLink () {
      this.props.generateNewTest(this.props.intervalsForTest,
        this.props.numberOfTasks)
      this.props.setTestRendered.bind(this)
      this.setState({
        testFinished: false,
        answeringDisabled: false
      })
    }
    function onLangButtonClick (el){
      el.preventDefault()
      let payload = el.target.textContent
      console.log(payload)
      this.props.setLanguage(el.target.textContent ==='ENGLISH' || el.target.textContent ==='EN' ?
        'en' : 'bg')
    }
    // function setCurrentInterval (stateObj) {
    //   let currentInterval = stateObj.currentInterval
    //   let idx = stateObj.currentIntervalIdx
    //   idx = (eventWorker.passIndex(idx))
    //   let newInterval = {...stateObj.testArr[idx]}
    //   return {
    //     ...stateObj, currentInterval: newInterval,
    //     currentIntervalIdx: idx
    //   }
    // }
    
    return {
      pathClicked,
      baseKeyColorize,
      onLangButtonClick,
      passIndex,
      generateNewTestLink,
      newTestLink
      // setCurrentInterval
    }
  }

)()

// let props = {
//   intervalsForTest: ['голяма секунда'],
//   numberOfTasks: 4
// }
// console.log(eventWorker.generateNewTestLink(props))

export default eventWorker

