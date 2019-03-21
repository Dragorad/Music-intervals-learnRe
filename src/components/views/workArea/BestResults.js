import React, { Component } from 'react'
import { connect } from 'react-redux'
import dataWorker from '../../../appWorkers/dataWorker'

class BestResults extends Component {
  constructor (props) {
    super(props)
    this.state = {
      bestResults: [],
      minimized: false
    }
  }
  
  toggleMinimizing (e) {
    e.preventDefault()
    this.setState({minimized: !this.state.minimized})
  }
  
  async componentDidMount () {
      await dataWorker.resultsQuery
      .onSnapshot(snapshot => {
        let scoresArr = []
        snapshot.forEach(doc => {
          scoresArr.push(doc.data())
        })
        this.setState({
          minimized: this.props.testRendered,
          bestResults: scoresArr})
        console.log('new snapshot ')
      })
   
  }
  
  render (props) {
   
    return <table className='best-results'>
      
      <tr><p>Best Results<span className="close"
                               onClick={this.toggleMinimizing.bind(this)}
                               style={{
                                 'position': 'absolute',
                                 'top': '1em',
                                 'right': '1em',
                                 'cursor': 'pointer'
                               }
                               }> {!this.state.minimized ?
        String.fromCharCode(215) : String.fromCharCode(9645)}</span>
      </p>
      </tr>
      
      <tbody>
      {/*// 'transition': 'display 2s ease-in 3s'}}>*/}
      <tr >
        <th>User</th>
        <th>Number Of Tasks</th>
        <th>Time Per Answer</th>
        <th>Points</th>
        {/*<th>{texts.falseAnsw}</th>*/}
      </tr>
      {this.state.bestResults.map((el, idx) => (
        <tr className={'data-field'}
            style={{'font-size': this.state.minimized ? '0.1em' : '100%'}}
            key={idx}>
          <td className='data-field'
          >{el.user}</td>
          <td className='data-field'>{el.testIntervalData.numberOfTasks}</td>
          <td className='data-field'>{el.testIntervalData.timeForAnswer}</td>
          <td className='data-field'>{el.sessionPoints}</td>
        </tr>))}
      </tbody>
    </table>
  }
}

const mapStateToProps = store => ({
  testRendered: store.testRendered,
  testFinished: store.testFinished,
  language: store.languageSelected,
  sessionAnswers: store.sessionAnswers
})
export default connect(mapStateToProps)(BestResults)
