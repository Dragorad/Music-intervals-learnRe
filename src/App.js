import React, { Component } from 'react'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Footer from './components/views/Footer'
import Routes from './Routes'
import store from './redux/store/indexStore'
import { Provider } from 'react-redux'
import Navbar from './components/views/Navbar'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <Navbar/>
            <Routes />
            <Footer />
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
