import React, { Component } from 'react'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Footer from './components/views/Footer'
import Routes from './Routes'
import store from './redux/store/indexStore'
import { Provider } from 'react-redux'

class App extends Component {
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
