import jquery from 'jquery'

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
      passIndex,
      // setCurrentInterval
    }
  }

)()

export default eventWorker
