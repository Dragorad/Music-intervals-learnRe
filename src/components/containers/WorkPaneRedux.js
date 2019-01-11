import React, { Component } from 'react'
import FormSummary from '../views/workArea/FormSummary'
import * as actions from '../../redux/actions/indexActions'
import jQuery from 'jquery'
import { connect } from 'react-redux'
import Keyboard0 from '../views/workArea/Keyboard0'

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
          <FormSummary/>
          {/*{this.props.testRendered &&*/}
          {/*<ResultStats/>}*/}
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
