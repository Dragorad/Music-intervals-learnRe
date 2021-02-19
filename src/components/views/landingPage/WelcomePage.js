import { connect } from 'react-redux'
import languagesText from '../../../../src/LanguagesData/LanguagesText'

function WelcomePage (props) {

  let texts =languagesText[props.language].welcomePage
    return (
          
      <div className='landing'>
        <h2 className='welcome-text'>{texts.welcomeH2}</h2>
        <h3 className='welcome-text'>{texts.welcomeH3}</h3>
        {texts.exampleTexts.map((el, idx) => <p className={'welcome-text'} key={idx}>{el}</p>)}
        <button className='button'
                onClick={() => props.history.push('/control-form')}>{texts.startButton.toUpperCase()}</button>
      </div>
    )
  }
  
  
function mapStateToProps (state) {
  return {
    language: state.languageSelected
  }
}

export default connect(mapStateToProps)(WelcomePage)
