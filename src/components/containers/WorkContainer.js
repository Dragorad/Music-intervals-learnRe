import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import WorkPane from './WorkPane'
import rootReducer from '../../redux/reducers/defaultReducer'
import store from '../../redux/store/indexStore'
import WorkPaneRedux from './WorkPaneRedux'


console.log(store)
//
// function mapStateToProps (state) {
//   return {
//     testArr: state.testArr,
//     testIntervalData: state.testIntervalData
//   }
// }
//
// const mapDispatchToProps = dispatch =>{
//   return {
//     sayMamata: text => dispatch(sayMamata(text)),
//     getIntervalForTest : () => dispatch(getIntervalForTest)
//   }
// }
// console.log('mamata')
// console.log(store)
//
class WorkContainer extends Component {
  render () {
    return (
      <Provider
        store={store}>
        <WorkPaneRedux />
      </Provider>
    )
  }
}

export default WorkContainer
// export default connect(mapStateToProps, mapDispatchToProps)(WorkContainer)