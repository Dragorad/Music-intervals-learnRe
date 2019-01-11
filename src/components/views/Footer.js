import React from 'react'
import * as actions from '../../redux/actions/indexActions'
import { connect } from 'react-redux'
import languagesText from '../../LanguagesData/LanguagesText'

function Footer (props) {
  let texts = languagesText[props.language].workPane.workHeader
  return (
      
      <footer>Intervals L <span>DrAgora Soft &reg; </span>"</footer>
      )
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
export default connect(mapStateToProps, mapDispatchToProps)(Footer)
