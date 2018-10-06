import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './components/views/Footer'
import Routes from './Routes'
import store from './redux/store/indexStore'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'



class App extends Component {
  constructor (props) {
    super(props)
  
  }

  render () {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div>
          <Routes />
          <Footer />
        </div>
      </BrowserRouter>
      </Provider>
    )
  }
}

export default App
