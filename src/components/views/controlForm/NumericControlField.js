import React, { Component } from 'react'

class NumericControlField extends Component {
  constructor (props) {
    super(props)
    this.handleInputChange = this.props.handleInputChange.bind(this)
  }
  
  render () {
    return (
      <div className="control-field">
        <label className="control">{this.props.text}
          <input type="number" className='input is-info'
                 onChange={this.handleInputChange.bind(this)}
                 name={this.props.fieldName}
                 placeholder={this.props.placeholder}
          >
          </input>
        </label>
        <span className='error'></span>
      </div>
    )
    
  }
}

export default NumericControlField
