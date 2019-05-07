import {Link} from 'react-router-dom'
import React from 'react'
import {connect} from 'react-redux'
import { reGenerateNewTest } from '../../../redux/actions/indexActions'

const mapDispatchToProps = dispatch => ({
    reGenerateNewTest: boolean => dispatch(reGenerateNewTest(boolean)),
})
export default connect(null, mapDispatchToProps)(NewTestLink)

function NewTestLink(props) {
    return (<Link to={{
        pathname: '/control-form',
        state: props.store
    }}
                  onClick={(e) => {
                      props.reGenerateNewTest(false)
                  }}
                  className='summary-field link'

    >{props.texts.fromBeginning.toUpperCase()}</Link>)
}
