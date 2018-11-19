import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setLanguage } from '../../redux/actions/indexActions'
import LanguageButtons from './LanguageButtons'

function mapStateToProps (state) {
  return {
    language: state.languageSelected
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setLanguage: language => dispatch(setLanguage(language))
  }
}

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      langButtonTxt: ['БГ', 'EN']
    }
  }
  
  render () {
    return (
      <header>
        <h1>Intervals L<br/></h1>
        <LanguageButtons strings={this.state.langButtonTxt}
        className='lang-buttons'/>
      
      </header>
    )
  }
}

export default connect(
  mapStateToProps
)(Navbar)
