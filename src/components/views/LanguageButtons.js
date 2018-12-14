import { Component } from 'react'
import React from 'react'
import { connect } from 'react-redux'
import { setLanguage } from '../../redux/actions/indexActions'
import eventWorker from '../../appWorkers/eventWorker'

class LanguageButtons extends Component {
  constructor (props){
    super(props)
    this.strings = this.props.strings
  this.callBackFn =  (el, idx) => {
    return (
      <button
      key={idx}
      onClick={eventWorker.onLangButtonClick.bind(this)}>{el}</button>
    )
}
  }

  render () {
    return <div className='lang-buttons summary-field'>{this.strings.map(this.callBackFn)}</div>
  }
}
function mapStateToProps (state) {
  return {
    language: state.languageSelected
  }
}

function mapDispatchToProps (dispatch) {
  return {setLanguage: language => dispatch(setLanguage(language))}
}
export default connect(
  mapStateToProps, mapDispatchToProps
)(LanguageButtons)
