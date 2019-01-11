import React, { Component } from 'react'
import { connect } from 'react-redux'
import TestField from './TestField'
import * as actions from '../../../redux/actions/indexActions'
import languagesText from '../../../LanguagesData/LanguagesText'
import NewTestLink from './NewTestLink'
import NewTestSameIntervals from './NewTestSameIntervals'

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
      <React.Fragment>
        <TestField
          label={texts.pointsPerAnswer}
          text={this.props.pointsPerAnswer}/>
        <NewTestLink
        texts={texts}/>
        <NewTestSameIntervals
        texts={texts}/>
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
