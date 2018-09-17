import React, { Component } from 'react'

const TestField = ({label, text}) => (
  <div className="summary-field">
    {label}: <p>{text} </p>
  </div>
)
export default TestField


