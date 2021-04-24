import { connect } from 'react-redux'
import languagesText from '../../../../src/LanguagesData/LanguagesText'
import { useSpring, useTrail, useTransition, animated } from 'react-spring'
import ControlForm from '../controlForm/ControlForm'



function WelcomePage(props) {
  let texts = languagesText[props.language].welcomePage
  // const styleProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 5200 })

  const routeDivProps = useSpring({ opacity: 1, from: { opacity: 0 }})
  const trail = useTrail(texts.exampleTexts.length, { opacity: 1, from: { opacity: 0 }, delay: 500 })
  
  const h3styleProps = useSpring({
    to: {
      color: 'rgb(192, 217, 240)',
      fontSize: '1.1 rem'
    },
    from: {
      fontSize: '1.3rem',
      color: 'red'
    },
    delay: 2800
  })
  return (
    <animated.div style={routeDivProps} className='landing'>
      <h2 className='welcome-text'>{texts.welcomeH2}</h2>
      <animated.h3 style={h3styleProps} className='welcome-text'>{texts.welcomeH3}</animated.h3>
      {trail.map((props, idx) =>
      (<animated.p className='welcome-text' key={idx} style={props}>{texts.exampleTexts[idx]}
      </animated.p>)
      )}
      {/* {texts.exampleTexts.map((el, idx) => 
      <animated.p style={styleProps}
        className={'welcome-text'} key={idx}>{el}</animated.p>)} */}
      <button className='button'
        onClick={() => props.history.push('/control-form')}>{texts.startButton.toUpperCase()}</button>
    </animated.div>
  )
}


function mapStateToProps(state) {
  return {
    language: state.languageSelected
  }
}

export default mapStateToProps.language === '' ? null : connect(mapStateToProps)(WelcomePage)
