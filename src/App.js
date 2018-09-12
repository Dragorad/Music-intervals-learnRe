import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './components/views/Footer'
import Routes from './Routes'

class App extends Component {
  constructor (props) {
    super(props)
  
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
