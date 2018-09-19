// import { createStore, combineReducers , applyMiddleware} from 'redux'
// // import { reducer, initialState as userInitialState } from './currentUser'
// import rootReducer from './reducers/RootReducer'
//
// // const loggingMiddleware = (store)=>(next)=> (action)=>{
// //   console.log('Redux log', action)
// //   next(action)
// // }
//
// const initialState = {
//   testArr: JSON.parse(window.localStorage.getItem('testArr')),
//   testIntervalData: JSON.parse(window.localStorage.getItem('testIntervalData'))
// }
// const configureStore = () => {
//   const store = createStore(
//     rootReducer,
//     // initialState,
//     // applyMiddleware(
//     //   apiMiddleware,
//     //   loggingMiddleware
//     // )
//     //
//   )
//   return store
// }
//
// export default configureStore