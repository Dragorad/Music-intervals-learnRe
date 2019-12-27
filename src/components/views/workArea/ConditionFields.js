import TestField from './TestField'
import React from 'react'
import languagesText from '../../../LanguagesData/LanguagesText'
import { connect } from 'react-redux'
import StatusArea from './StatusArea'

const mapStateToProps = store => ({
 language : store.languageSelected,
  timeRemaining: store.timeRemaining
})
// const mapDispatchToProps = dispatch => ({

// })


function ConditionFields (props) {
  let texts = languagesText[props.language].workPane.testArea
  return( <div className='condition'>
    <StatusArea/>
    <TestField
    label={texts.timeRemaining}
    text={props.timeRemaining}/>
  
  
    <TestField
      key='0'
      label={texts.interval}
      text={props.interval.name[props.language]}/>
    <TestField
      key='1'
      label={texts.direction}
      style={{'font-size':'large'}}
      text={props.interval.direction === 'up'
        ?  String.fromCharCode(8593) :  String.fromCharCode(8595)}/>
    <TestField
      key='2'
      label={texts.baseTon}
      text={props.interval.baseTone}/>
  </div>)
}
export default connect (mapStateToProps)(ConditionFields)
  // mapDispatchToProps)
  
