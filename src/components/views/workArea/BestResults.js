import React, { Component } from 'react'
import { connect } from 'react-redux'
import dataWorker from '../../../appWorkers/dataWorker'

class BestResults extends Component {
  constructor (props) {
    super(props)
    this.state = {
      bestResults: []
    }
  }
  
  async componentDidMount () {
    console.log('Did mount started')
    let scoresArr = await dataWorker.getBestScores('results', 5)
    console.log (await scoresArr)
    this.setState({bestResults: await scoresArr})
 
  }
  
  render (props) {
    
    // let bestUser = this.state.data.userName
    // let bestPoints = this.props.language
    // let texts = languagesText[language].workPane.resultStats
    return <table>
      
      <th>User</th>
      <th>Result</th>
      {/*<th>{texts.falseAnsw}</th>*/}
      
      {/*{this.state.bestResults.map((el, idx) => (*/}
      {/*<tr className='result-stats'>*/}
      {/*/!*<td>{el.userName}:</td>*!/*/}
      {/*<td className='data-field'>{el.userName}</td>*/}
      {/*<td className='data-field'>{el.sessionPoints}</td>*/}
      {/*</tr>))}*/}
    </table>
  }
}

const mapStateToProps = store => ({
  language: store.languageSelected,
  sessionAnswers: store.sessionAnswers
})
export default connect(
  mapStateToProps
)(BestResults)
