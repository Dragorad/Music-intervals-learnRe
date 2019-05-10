import React, {Component} from 'react'
import {connect} from 'react-redux'
import dataWorker from '../../../appWorkers/dataWorker'
import {setTestRendered} from '../../../redux/actions/indexActions'

class BestResults extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bestResults: [],
            minimized: false
        }
    }

    toggleMinimizing(e) {
        e.preventDefault()
        this.props.setTestRendered(!this.state.minimized)
        // this.setState({minimized: !this.state.minimized})
    }

    convertDataString(timeStamp) {
        let date = timeStamp.toDate()
        let year = date.getFullYear()
        let mount = (date.getMonth() +1).toString().padStart(2, '0')
        let day = date.getDate().toString().padStart(2, '0')

        return ` ${day}-${mount}-${year}`
    }

    async componentDidMount() {
        await dataWorker.resultsQuery
            .onSnapshot(snapshot => {
                let scoresArr = []
                snapshot.forEach(doc => {

                    let dateString = this.convertDataString(doc.data().timeSaved)
                    // console.log(dateString);
                    scoresArr.push(doc.data())
                    // console.log('scores arr')
                    // console.log(scoresArr)
                })
                this.setState({
                    minimized: this.props.testRendered,
                    bestResults: scoresArr
                })
            })

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.testRendered === prevState.minimized) {
            // console.log(' best result props changed')
            this.setState({minimized: !this.state.minimized})
        }
    }


    render(props) {

        return <table className='best-results'>
            <thead>
            <tr>
                <td style={{'color': '#c10413'}}>Best Results
                    <span className="close" onClick={this.toggleMinimizing.bind(this)}
                          style={{
                              'position': 'absolute',
                              'top': '1em',
                              'right': '1em',
                              'cursor': 'pointer'
                          }
                          }> {!this.state.minimized ?
                        String.fromCharCode(215) : String.fromCharCode(9645)}</span>
                </td>
            </tr>
            </thead>
            <tbody>

            <tr>
                <th>User</th>
                <th>Number Of Tasks</th>
                <th>Time Per Answer</th>
                <th>Points</th>
                <th>Saved On</th>
                {/*<th>{texts.falseAnsw}</th>*/}
            </tr>
            {this.state.bestResults.map((el, idx) => (
                <tr className={'data-field'}
                    style={{'fontSize': this.state.minimized ? '0.1em' : '100%'}}
                    key={idx}>
                    <td className='data-field'>{el.user}</td>
                    <td className='data-field'>{el.testIntervalData.numberOfTasks}</td>
                    <td className='data-field'>{el.testIntervalData.timeForAnswer}</td>
                    <td className='data-field'>{el.sessionPoints}</td>
                    <td className='data-field'>{this.convertDataString(el.timeSaved)}</td>
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
const mapDispatchToProps = dispatch => ({
    setTestRendered: boolean => dispatch(setTestRendered(boolean))
})
export default connect(mapStateToProps, mapDispatchToProps)(BestResults)
