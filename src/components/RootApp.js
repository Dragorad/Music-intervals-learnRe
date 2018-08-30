import React from 'react'
import { Provider } from 'react-redux'
import App from '../App'
import configureStore from '../redux/configureStore'

export const RootApp = (props) => {
  const store = configureStore()
  return(
    <Provider store={store}>
      <App/>
    </Provider>
  )
}