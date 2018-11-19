import React, { Component } from 'react'
import WorkHeader from '../views/workArea/WorkHeader'
import FormSummary from '../views/workArea/FormSummary'
import Keyboard from '../views/workArea/Keyboard'
import * as actions from '../../redux/actions/indexActions'
import jQuery from 'jquery'
import { connect } from 'react-redux'
import eventWorker from '../../appWorkers/eventWorker'

let $ = jQuery

class WorkPaneRedux extends Component {
  constructor (props) {
    super(props)
    this.state = {
      testRendered: false
      
    }
  }
  
  setTestRendered () {
    return this.setState({testRendered: !this.testRendered})
  }
  
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
        <WorkHeader
          testIntervalData={testIntervalData}
          testArr={testArr}
          setTestRendered={this.setTestRendered}
        />
        <div className='work-pane'>
          <FormSummary
            testIntervalData={testIntervalData}
            testArr={testArr}
            setTestRendered={this.setTestRendered}
          />
          <Keyboard/>
        </div>
      </React.Fragment>
    
    )
  }
}

const mapStateToProps = state => {
  return {
    testArr: state.testArr,
    testIntervalData: state.testIntervalData
  }
}
const mapDispatchToProps = dispach => ({
  setUserAnswer: userAnswer => dispach(actions.setUserAnswer(userAnswer))
})
export default connect(mapStateToProps, mapDispatchToProps)(WorkPaneRedux)
