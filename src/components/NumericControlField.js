import React from 'react'

function NumericControlField(props) {
    return (
        <div className="control-field">
            <label className="control">{props.text}
                <input type="number" name={props.fieldName}>
                </input>
            </label>
        </div>
    )

}

export default NumericControlField