import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
import { uiConfig } from '../../../appWorkers/configAPI'

class SignInScreen extends React.Component {
  componentDidMount () {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => this.setState({isSignedIn: !!user})
    )
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount () {
    this.unregisterAuthObserver()
    
  }
  
  render () {
    return (
      <div className={'sign-in-screen'}>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    )
  }
}

export default SignInScreen

// export default UserForm
