import React  from 'react'
// import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/views/Footer'
import Routes from './Routes'
import store from './redux/store/indexStore'
import { Provider } from 'react-redux'
import Navbar from './components/views/NavBar/Navbar'
import Notifications from 'react-notify-toast'
import { notifyOptions } from './notifyOptions'
import 'firebase/auth'


export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          {<Routes />}
          <Footer />
          <Notifications
            options={notifyOptions}
          />
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  )
}
