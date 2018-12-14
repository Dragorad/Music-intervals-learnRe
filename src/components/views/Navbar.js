import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setLanguage} from '../../redux/actions/indexActions'
import LanguageButtons from './LanguageButtons'
import {Link} from 'react-router-dom'
import WorkHeader from "./workArea/WorkHeader";

function mapStateToProps(state) {
    return {
        language: state.languageSelected,
        testRendered: state.testRendered
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setLanguage: language => dispatch(setLanguage(language))
    }
}

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            langButtonTxt: ['БГ', 'EN']
        }
    }

    render() {
        return (
            <header>
                {!this.props.testRendered ?<h1 className={'summary-field'}> Intervals L <br /></h1> : <WorkHeader/>}
                <LanguageButtons
                    strings={this.state.langButtonTxt}
                />
                <Link to={'/'}>Help </Link>
            </header>
        )
    }
}

export default connect(
    mapStateToProps
)(Navbar)
