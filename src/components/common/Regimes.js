import React from 'react'
import { connect } from 'react-redux'
import languagesText from '../../LanguagesData/LanguagesText'

const mapStateToProps = store => ({
  language: store.languageSelected
})

function Regimes (props) {
  let regimeTexts = languagesText[props.language].regimes.options
  return (
    <div className='container'>
      
        {regimeTexts.map(el =>
          
          <button variant={'outlined'}
                  className='col s8 scale-transition scale-in'>{el}</button>
        )}
      
      {/*<Button*/}
      {/*color='primary'>Sign In</Button>*/}
      {/*<Button>Competition</Button>*/}
      {/*<Button>Demo</Button>*/}
    </div>
  
  )
  
}

export default connect(mapStateToProps)(Regimes)
