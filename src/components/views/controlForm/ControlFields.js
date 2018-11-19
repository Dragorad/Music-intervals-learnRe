import React, { Component } from 'react'
import NumericControlField from './NumericControlField.js'
import FormInput from './FormInput.js'
import muzWorker from '../../../appWorkers/intervalWorker'
import { setLanguage } from '../../../redux/actions/indexActions'
import connect from 'react-redux/es/connect/connect'
import languagesText  from '../../../LanguagesData/LanguagesText'

let regimes = [
  ['only-generate', 'само генериране'],
  ['local-store', 'генериране и запазване локално'],
  ['exam', 'изпит']]

class ControlFields extends Component {
  constructor (props) {
    super(props)
    this.handleInputChange = this.props.handleInputChange.bind(this)
  }
  
  render () {
    let texts = languagesText[this.props.language].controlForm
    
    return (
      
      <div className="controls-wrap">
        {texts.inputs.map((el, idx) => {
          console.log(languagesText.en.controlForm.inputs.idx)
          return (<NumericControlField
              key={idx}
              handleInputChange={this.handleInputChange.bind(this)}
              fieldName={languagesText.en.controlForm.inputs[idx][0]}
              placeholder={el[1]}
              text={el[1]}/>)
          }
        )}
        
        <div className="regimes">
          <p>Режими на ползване</p>
          <div className="radio-inputs">
            {regimes.map((obj, i) => {
                return (<FormInput
                  key={i}
                  // onClick={this.props.handleInputChange}
                  classString='radio-input'
                  typeStr='radio'
                  inputId={obj[0]}
                  inputName='regime'
                  idx='M2'
                  labelText={obj[1]}
                />)
              }
            )}
          
          </div>
        </div>
      </div>)
  }
}

const mapStateToProps = store => {
  return {
    language: store.languageSelected
  }
}
const mapDispatchToProps = (dispatch, state) => ({
  setLanguage: language => dispatch(setLanguage(language))
})
export default connect(mapStateToProps, mapDispatchToProps)(ControlFields)


