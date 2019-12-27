import React, { Component } from 'react'
// import * as actions from '../../redux/actions/indexActions'
// import jQuery from 'jquery'
// import { connect } from 'react-redux'
// import Keyboard0 from '../views/workArea/Keyboard0'
// import BestResults from '../views/workArea/BestResults'
import TestArea from './TestArea'
import ReTestArea from './ReTestArea'

// let $ = jQuery

export default function WorkPaneRedux(props) {
  
  
  // render () {
        return (
      <React.Fragment>
        <div className='work-pane'>
          {/* <Keyboard0/> */}
          <TestArea/>
          <ReTestArea/>
          {/* <BestResults/> */}
        </div>
      </React.Fragment>
    
    )
  // }
}

// const mapStateToProps = state => {
//   return {
//     testRendered: state.testRendered,
//     testArr: state.testArr,
//     testIntervalData: state.testIntervalData
//   }
// }
// // const mapDispatchToProps = dispach => ({
// //   setUserAnswer: userAnswer => dispach(actions.setUserAnswer(userAnswer))
// // })
// export default connect(mapStateToProps
  // , mapDispatchToProps
  // )(WorkPaneRedux)
