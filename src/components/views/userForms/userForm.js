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
// onChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }
  // onSubmit = e => {
  //   e.preventDefault()
  //   console.log('submit started')
  //   dataWorker.addResult('results', this.state)
  //
  //   this.setState({
  //     fullName: '',
  //     email: ''
  //   })
  // }
  // addResult = () => {
  //   console.log('add result started')
  //   let db = firebase.firestore()
  //   db.settings({
  //     timestampsInSnapshots: true
  //   })
  //   db.collection('results').add({
  //       fullName: this.state.fullname,
  //       email: this.state.email
  //     })
  //     .then(docRef => {
  //       console.log('document written with ID', docRef.id)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }
  // getResult = e => {
  //   e.preventDefault()
  //   console.log('Getting results started')
  //   let db = firebase.firestore()
  //   db.settings({
  //     timestampsInSnapshots: true
  //   })
  //   db.collection('results').get()
  //     .then(docRef => {
  //       console.log('documents in base', docRef)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }
//   getData = e => {
//     e.preventDefault()
//
//   }
//
//   render () {
//     return (
//
//       <form>
//         <TextField
//             color='primary'>userName
//         </TextField>
//         <TextField/>
//         <TextField/>
//         <Button>
//           Sign In</Button>
//         {/*<input*/}
//         {/*type="text"*/}
//         {/*name="fullname"*/}
//         {/*placeholder="Full name"*/}
//         {/*onChange={this.onChange}*/}
//         {/*/>*/}
//         {/*<input*/}
//         {/*type="email"*/}
//         {/*name="email"*/}
//         {/*placeholder="e-mail"*/}
//         {/*onChange={this.onChange}*/}
//         {/*/>*/}
//         {/*<button type="submit" onClick={this.onSubmit.bind(this)}>Submit</button>*/}
//         {/*/!*<button type="submit" onClick={this.getResult.bind(this)}>GetData</button>*!/*/}
//       </form>
//
//     )
//   }
// }
//
// export default UserForm
