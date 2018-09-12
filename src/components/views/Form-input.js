import React, { Component } from 'react'
import jquery from 'jquery'

let $ = jquery

class FormInput extends Component {
  constructor (props) {
    super(props)
    // this.onClick = this.onClick.bind(this)
  }
  
  onClickEvent (e) {
    console.log('new event')
    e.preventDefault()
    $('input[type = "checkbox"]').attr('checked', true)
    let target = e.target
    let value = target.value
    console.log(target + ' ' + value)
  }
 
  render (props) {
    return (
      < div className="interval-button-medium">
        <input id={this.props.inputId} type={this.props.typeStr} name={this.props.inputName}
               value={this.props.idx}
               // onClick={this.props.handleInputChange}
          //      onClick={this.onClickEvent}
        ></input>
        <label htmlFor={this.props.inputId}
               className={this.props.classString}>{(this.props.labelText).toUpperCase()}
        </label>
      </div>
    )
  }
}

export default FormInput
