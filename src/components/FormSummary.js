import React, { Component } from 'react'

class FormSummary extends Component {
  render () {
    return (
      <div className="summary">
    
        <div id="summary-time" className="summary-field">
          време за отгатване<br/> <span>{}</span>
        </div>
        <div id="summary-tasks" className="summary-field">
          оставащи задачи до края на теста <br/> <span>
         
          </span>
        </div>
        <div id="summary-intervals" className="summary-field">
          включени интервали <br/> <span>
          
        </span>}
        </div>
        <a href="/#startTest" className="summary-field">Начало на теста</a>
  
      </div>
    )
  }
}

export default FormSummary