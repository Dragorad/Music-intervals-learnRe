import { connect } from 'react-redux'
import { toggleBestResults } from '../../../redux/actions/indexActions'
import languagesText from '../../../../src/LanguagesData/LanguagesText'

function ResultStats(props) {

  let language = props.language
  let texts = languagesText[language].workPane.resultStats
  return (
    <div className='modal'>

      <table>
        <thead>
          <tr>
            <td style={{ 'color': '#c10413' }}>Session Results
                    <span className="close" onClick={() => props.toggleBestResults()}
                style={{
                  'position': 'absolute',
                  'right': '8em',
                  'cursor': 'pointer'
                }
                }>
                {props.bestResultsMinimized ?
                  'minimize ' + String.fromCharCode(215) : 'maximize ' + String.fromCharCode(9645)}

              </span>
            </td>
          </tr>
        </thead>
        {/*<tbody>*/}
        <thead>
          <tr style={{ 'color': '#c10413' }}>
            <th>{texts.interval}</th>
            <th>{texts.rightAnsw}</th>
            <th>{texts.falseAnsw}</th>
          </tr>
        </thead>
        <tbody>
          {props.sessionAnswers.map((el, idx) => (
            <tr style={{ 'fontSize': (!props.bestResultsMinimized) ? '0.01em' : '100%' }}
              key={idx} className='result-stats'>
              <td>{el.name[language]}:</td>
              <td className='data-field'>{el.trueAnswers}</td>
              <td className='data-field'>{el.falseAnswers}</td>
            </tr>))}
        </tbody>
      </table>
    </div>)
}

const mapStateToProps = store => ({
  bestResultsMinimized: store.bestResultsMinimized,
  language: store.languageSelected,
  sessionAnswers: store.sessionAnswers
})

const mapDispatchToProps = dispatch => ({
  toggleBestResults: () => dispatch(toggleBestResults())
})
export default connect(mapStateToProps, mapDispatchToProps)(ResultStats)
