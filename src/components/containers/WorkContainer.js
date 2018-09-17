import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import WorkPane from '../views/WorkPane'
import rootReducer from '../../redux/reducers/defaultReducer'
import { getIntervalForTest, sayMamata } from '../../redux/actions/indexActions'

export const store = createStore(
  rootReducer
  // initialState
  // applyMiddleware(
  //   apiMiddleware,
  //   loggingMiddleware
  // )
  //
)
console.log(store)

function mapStateToProps (state) {
  return {
    testArr: state.testArr,
    testIntervalData: state.testIntervalData
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    sayMamata: text => dispatch(sayMamata(text)),
    getIntervalForTest : () => dispatch(getIntervalForTest)
  }
}
console.log('mamata')
console.log(store)

class WorkContainer extends Component {
  render () {
    return (
      <Provider
        store={store}
      >
        {/*<h1>{store.getState()}</h1>*/}
        <WorkPane
          // store={store}
        />
      </Provider>
    )
  }
}

// export default WorkContainer
export default connect(mapStateToProps, mapDispatchToProps)(WorkContainer)