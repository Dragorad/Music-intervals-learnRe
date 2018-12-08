import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from '../reducers/RootReducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(
  applyMiddleware(thunk)
))

//
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(rootReducer)

export default store

