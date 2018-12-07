import { Link } from 'react-router-dom'

import React from 'react'
import * as actions from '../../redux/actions/indexActions'
import languagesText from '../../LanguagesData/LanguagesText'

export function NewTestFromBeg (props) {
  let language = props.language
  return <Link to={'/control-form'} className='summary-field link' onClick={props.onClick
  }>{languagesText[language].fromBeginning.toLocaleUpperCase()}
  </Link>
}


export const mapStateToProps = store => {
  return {
    
    testIntervalData: store.testIntervalData,
    pointsPerAnswer: store.pointsPerAnswer,
    sessionPoints: store.sessionPoints,
    intervalsForTest: store.testIntervalData.intervalsForTest,
    numberOfTasks: store.testIntervalData.numberOfTasks,
    language: store.languageSelected
  }
}
export const mapDispatchToProps = (dispatch, state) => ({
  generateNewTest: (intervalsForTest, numberOfTasks) =>
    dispatch(actions.generateTestArr(intervalsForTest, numberOfTasks))
})
