import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
import { uiConfig } from '../../../appWorkers/configAPI'

class SignInScreen extends React.Component {
  render() {
    return (
      <div>
        <h1>Intervals L</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    )
  }
}

export  default SignInScreen

// export default UserForm
