import React, { Component } from 'react'
import firebase from '../../src/Firebase'

class UserForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      fullname: ''
    }
  }
  
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit = e => {
    e.preventDefault()
    console.log('submit starter')
    this.addResult()
    
    this.setState({
      fullName: '',
      email: ''
    })
  }
  addResult = () => {
    console.log('add result started')
    let db = firebase.firestore()
    db.settings({
      timestampsInSnapshots: true
    })
    db.collection('results').add({
        fullName: this.state.fullname,
        email: this.state.email
      })
      .then(docRef => {
        console.log('document written with ID', docRef.id)
      })
      .catch(error => {
        console.log(error)
      })
  }
  getResult = e => {
    e.preventDefault()
    console.log('Getting results started')
    let db = firebase.firestore()
    db.settings({
      timestampsInSnapshots: true
    })
    db.collection('results').get()
      .then(docRef => {
        console.log('documents in base', docRef)
      })
      .catch(error => {
        console.log(error)
      })
  }
  getData = e => {
    e.preventDefault()
    
  }
  
  render () {
    return (
      
      <form>
        <input
          type="text"
          name="fullname"
          placeholder="Full name"
          onChange={this.onChange}
        />
        <input
          type="email"
          name="email"
          placeholder="e-mail"
          onChange={this.onChange}
        />
        <button type="submit" onClick={this.onSubmit.bind(this)}>Submit</button>
        <button type="submit" onClick={this.getResult.bind(this)}>GetData</button>
      </form>
    
    )
  }
}

export default UserForm
