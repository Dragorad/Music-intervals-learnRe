import React, { Component } from 'react'
import * as actions from '../../redux/actions/indexActions'
import jQuery from 'jquery'
import { connect } from 'react-redux'
import Keyboard0 from '../views/workArea/Keyboard0'
import BestResults from '../views/workArea/BestResults'
import TestArea from '../views/workArea/TestArea'

let $ = jQuery

class WorkPaneRedux extends Component {
  
  componentDidMount () {
    let that = this
    let path = $('path')
    
    function pathClicked () {
      let targetId = this.id.split('-').join(' - ')
      console.log(targetId)
      that.props.setUserAnswer(targetId)
      $('#testedAnswer').val(targetId)
      $('.clicked-key').toggleClass()
      that.props.setUserAnswer(targetId)
      $(this).toggleClass('clicked-key')
    }
    
    path.on('click', pathClicked)
  }
  
  render () {
    let testIntervalData = this.props.testIntervalData
    let testArr = this.props.testArr
    return (
      <React.Fragment>
        <div className='work-pane'>
          <Keyboard0/>
          <TestArea/>
          <BestResults/>
        </div>
      </React.Fragment>
    
    )
  }
}

const mapStateToProps = state => {
  return {
    testRendered: state.testRendered,
    testArr: state.testArr,
    testIntervalData: state.testIntervalData
  }
}
const mapDispatchToProps = dispach => ({
  setUserAnswer: userAnswer => dispach(actions.setUserAnswer(userAnswer))
})
export default connect(mapStateToProps, mapDispatchToProps)(WorkPaneRedux)
