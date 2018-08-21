import React, { Component } from 'react'

class FormInput extends Component {
  constructor (props){
    super(props)
    // this.onClick = this.onClick.bind(this)
  }
  onClick(e){
    e.preventDefault()
    let target = e.target
    let name = target.name
    console.log(target + ' '+ name)
  }
  render (props) {
    return (
      < div className="interval-button-medium">
        <input id={this.props.inputId} type={this.props.typeStr} name={this.props.inputName}
               value={this.props.idx}
               onClick={this.props.handleInputChange}
               ></input>
        <label htmlFor={this.props.inputId}
               className={this.props.classString}>{(this.props.labelText).toUpperCase()}
        </label>
      </div>
    )
  }
}

export default FormInput
