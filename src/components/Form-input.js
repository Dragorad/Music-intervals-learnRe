import React, {Component} from 'react'

class FormInput extends Component {
    render(props) {
        return (
            < div className="interval-button-medium">
                <input id={this.props.inputId} type={this.props.typeStr} name={this.props.inputName}
                       value={this.props.idx}></input>
                <label htmlFor={this.props.inputId}
                       className={this.props.classString}>{(this.props.labelText).toUpperCase()}
                </label>
            </div>
        )
    }
}

export default FormInput
