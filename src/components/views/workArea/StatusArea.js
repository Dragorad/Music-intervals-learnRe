import { connect } from 'react-redux'
import TestField from './TestField'
import languagesText from '../../../LanguagesData/LanguagesText'

function StatusArea(props) {

  let texts = languagesText[props.language].workPane.conditionArea
  return (<div className='condition status-area'>
    <TestField
      label={texts.taskRemaining}
      text={props.tasksRemaining} />
    <TestField
      label={texts.pointsAccum}
      text={props.sessionPoints} />
  </div>)
}


const mapStateToProps = state => ({
  timeRemaining: state.timeRemaining,
  language: state.languageSelected,
  sessionPoints: state.sessionPoints,
  sessionAnswers: state.sessionAnswers,
  tasksRemaining: state.tasksRemaining,

})

export default connect(mapStateToProps)(StatusArea)
