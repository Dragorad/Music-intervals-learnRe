import  React, { Component } from 'react'

export default function NumericControlField (props) {
 
  return (
      <div className="control-field">
        <label className="control">{props.text}
          <input type="number" className='input is-info'
                 onChange={props.handleInputChange.bind(this)}
                 name={props.fieldName}
                 placeholder={props.placeholder}
          >
          </input>
        </label>
        <span className='error'></span>
      </div>
    )
    
  }

// export default NumericControlField
