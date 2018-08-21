import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ControlForm from './components/ControlForm'
import Footer from './components/Footer'
import Routes from './Routes'

class App extends Component {
  render () {
    return (
      <div>
      <Routes/>
      <Footer/>
      </div>
    )
  }
}

export default App
