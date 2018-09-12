import React, { Component } from 'react'

class TestArea extends Component {
  constructor (props) {
    super(props)
    // this.state = {
    //   testInterval:this.props.testArr[0]
    // }
  }
  
  passIndex = (() => {
    let idx = 0
    return function () {
      console.log(idx++)
      return idx
    }
  })()
  
  nextQuestionClicked (e) {
    e.preventDefault()
    console.log('next question clicked')
    let idxClick = this.passIndex()
    let testInterval = this.props.testArr[idxClick]
    
  }
  
  answeringClicked (e) {
    e.preventDefault()
    console.log('answering clicked')
  }
  
  render () {
    let testArr = this.props.testArr
    console.log(testArr)
    let interval = testArr[0]
    console.log(interval)
    // let intervalState = this.props.testArr[0].toString()
    // console.log('props interval = ' + intervalState)
    //
    if (this.props.testRendered) {
      return (
        <div className="test-area">
          <div className="condition">
            <div className="summary-field">
              интервал<span>
            {interval.name.bg} {interval.direction}
            </span>
            </div>
            <div className="summary-field">
              начален тон<span>
            {interval.baseTone}
            </span>
            </div>
            <div className="summary-field">
              <label htmlFor="testedAnswer "> отговор </label>
              <input id="testedAnswer" type='text' name="testedAnswer" placeholder="Не знам"></input>
              <button
                onClick={this.answeringClicked.bind(this)}/>
            </div>
            <div className="summary-field right-answer" style={{display:'none'}}>
              Верен отговор <span>{interval.answer}</span>
            </div>
            <button id="next-question" className="summary-field"
                    onClick={this.nextQuestionClicked.bind(this)}>
              СЛЕДВАЩ ВЪПРОС
            </button>
          </div>
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

export default TestArea
//
// export default connect(
//   mapStateToProps
// )(TestArea)