import React, { Component } from 'react'
import { connect } from 'react-redux'
import dataWorker from '../../../appWorkers/dataWorker'

const db = dataWorker.db

class BestResults extends Component {
  constructor (props) {
    super(props)
    this.state = {
      bestResults: []
    }
  }
  
  async componentDidMount () {
    console.log('Did mount started')
    // console.log(await dataWorker.getBestScores('results'))
    // this.setState({bestResults: await dataWorker.getBestScores('results')})
   await dataWorker.resultsQuery
      .onSnapshot(snapshot => {
        let scoresArr = []
        snapshot.forEach(doc => {
          scoresArr.push(doc.data())
        })
        this.setState({bestResults: scoresArr})
        console.log('new snapshot ')
      })
    // console.log(scoresArr)
    // this.setState({bestResults: scoresArr})
    
  }
  render (props) {
  const changedStyle = {
    "left": 15,
    "background-color": 'yellow'
  }
  
    // {this.props.testFinished ? this.props.style={changedStyle}: null}
  
    // let bestUser = this.state.data.userName
    // let bestPoints = this.props.language
    // let texts = languagesText[language].workPane.resultStats
    return <table className='best-results'>
      <caption> Best Results</caption>
      <tbody>
      <tr>
        <th>User</th>
        <th>Number Of Tasks</th>
        <th>Time Per Answer</th>
        <th>Points</th>
        {/*<th>{texts.falseAnsw}</th>*/}
      </tr>
      {this.state.bestResults.map((el, idx) => (
      <tr className='result-stats'
      key={idx}>
      {/*<td>{el.userName}:</td>*/}
      <td className='data-field'>{el.user}</td>
      <td className='data-field'>{el.testIntervalData.numberOfTasks}</td>
      <td className='data-field'>{el.testIntervalData.timeForAnswer}</td>
      <td className='data-field'>{el.sessionPoints}</td>
      </tr>))}
      </tbody>
    </table>
  }
}

const mapStateToProps = store => ({
  testFinished: store.testFinished,
  language: store.languageSelected,
  sessionAnswers: store.sessionAnswers
})
export default connect( mapStateToProps)(BestResults)
