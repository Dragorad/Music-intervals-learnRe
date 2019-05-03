import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
// import {uiConfig} from '../../../appWorkers/firebaseWorker'
import {setIsSigning, setIsSigned, setUserName} from "../../../redux/actions/indexActions"
import {connect} from "react-redux"
import { notify } from 'react-notify-toast'

export const uiConfig =  props => ({
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    // signInSuccessUrl: '/signedIn',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID

    ],
    credentialHelper: 'none',
    callbacks: {
        // Avoid redirects after sign-in.
        // showRedirectLocation: firebase.auth().getRedirectResult().then(result => console.log(result)),
        signInSuccessWithAuthResult: function (authResult) {
            props.setIsSigned(true)
            props.setIsSigning(false)
            let userName = authResult.user.displayName
            notify.show(`Welcome ${userName}`)
            props.setUserName(userName)
        }
    }
})

class SignInScreen extends React.Component {
    state = {
        isSignedIn: false
    }

    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => {
                console.log('user auth state is changing')
                this.props.setIsSigning(true)
                this.setState({isSignedIn: !!user})
                // this.props.setIsSigned(!this.props.isSigned)
                // this.props.setIsSigning(!this.props.isSigning)
            }
        )
    }

    // Make sure we un-register Firebase observers when the component unmounts.
    componentWillUnmount() {

        this.props.setIsSigning(false)
        this.props.setIsSigned(true)
        this.unregisterAuthObserver()

    }

    render() {
        return (
            <div className={'sign-in-screen'}>
                <h1>This is Mint version of music intervals</h1>
                <StyledFirebaseAuth uiConfig={uiConfig(this.props)} firebaseAuth={firebase.auth()}/>
            </div>
        )
    }
}

const mapStateToProps = store => ({
    isSigning: store.isSigning
})

const mapDispatchToProps = dispatch => ({
    setIsSigning: boolean => dispatch(setIsSigning(boolean)),
    setIsSigned: boolean => dispatch(setIsSigned(boolean)),
    setUserName: string => dispatch(setUserName(string)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen)

// export default UserForm
