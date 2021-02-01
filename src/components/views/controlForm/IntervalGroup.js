// import { Component } from 'react'
import FormInput from './FormInput.js'
// import muzWorker from '../../../appWorkers/intervalWorker.js'
import { connect } from 'react-redux'
import { setLanguage } from '../../../redux/actions/indexActions'

function IntervalGroup (props) {
       let labelLang = props.language
    // console.log(labelLang)
    return (
      <div className='little-big-intervals'>
        
        {props.group.map((obj, i) => {
          return (
            <FormInput
              key={i}
              classString='interval-button-medium level-item'
              typeStr='checkbox'
              inputId={obj.name.en}
              inputName={obj.name[labelLang]}
              idx={obj.idx}
              labelText={obj.name[labelLang]}
            />
          )
        })
        }      </div>)  
}

const mapStateToProps  = store => {
  return {
    language: store.languageSelected
  }
}
const mapDispatchToProps  = dispatch =>({
  setLanguage: language => dispatch(setLanguage(language))
})
export default connect(mapStateToProps, mapDispatchToProps)(IntervalGroup)

