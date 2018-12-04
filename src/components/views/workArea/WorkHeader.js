import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import TestField from './TestField'
import eventWorker from '../../../appWorkers/eventWorker'
import * as actions from '../../../redux/actions/indexActions'
import languagesText from '../../../LanguagesData/LanguagesText'

class WorkHeader extends Component {
  
  componentDidMount (props) {
    console.log('mounting work-pane')
    console.log(this.props.testIntervalData)
  }
  
  componentWillUnmount () {
    window.localStorage.clear()
  }
  
  render () {
    let texts = languagesText[this.props.language].workPane.workHeader
    return (
      <header>
        <Link to='/index' className='summary-field' onClick={() => window.localStorage.clear()}>{texts.fromBeginning.toLocaleUpperCase()}
        </Link>
        <button className='summary-field link'
                onClick={eventWorker.newTestLink.bind(this)
                }>{texts.sameIntervals.toUpperCase()}</button>
        
        
        <TestField
          label={texts.pointsPerAnswer}
          text={this.props.pointsPerAnswer}/>
      
      
      </header>
    )
  }
}

const mapStateToProps  = store => {
  return {
    testIntervalData: store.testIntervalData,
    pointsPerAnswer: store.pointsPerAnswer,
    sessionPoints: store.sessionPoints,
    intervalsForTest: store.testIntervalData.intervalsForTest,
    numberOfTasks: store.testIntervalData.numberOfTasks,
    language:store.languageSelected
  }
}
const mapDispatchToProps  = (dispatch, state) =>({
  generateNewTest: (intervalsForTest, numberOfTasks) =>
    dispatch(actions.generateTestArr(intervalsForTest, numberOfTasks))
})
export default connect(mapStateToProps, mapDispatchToProps)(WorkHeader)
