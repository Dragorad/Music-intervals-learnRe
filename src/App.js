import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Routes from './Routes'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      timeForAnswer: 0,
      numberOfTasks: 0,
      intervalsForTest: [],
      error: ''
    }
  }

  render () {
    return (
      <BrowserRouter>
        <div>
          <Routes />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
