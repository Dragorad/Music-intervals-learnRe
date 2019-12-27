import React from 'react'
import NewTestLink from './NewTestLink'
import NewTestSameIntervals from './NewTestSameIntervals'
import { connect } from 'react-redux'
import languagesText from '../../../LanguagesData/LanguagesText'

const ReTestArea = props => {
    
    let language = props.language
    let text = languagesText[language].workPane
    // let testBtnVisible = this.props.testArr.length > 0 && !this.props.testRendered
    let texts = languagesText[language].workPane
   return ( <div className='re-test-area'>
      <NewTestLink props={props.props} texts={texts.workHeader} />
      <NewTestSameIntervals texts={texts.workHeader} />
    </div>)
  }
const mapStateToProps = store => ({
    language: store.languageSelected,
})

// const mapDispatchToProps = {
  
// }

  export default connect(mapStateToProps)(ReTestArea)