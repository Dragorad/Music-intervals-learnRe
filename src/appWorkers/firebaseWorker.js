import app from 'firebase/app'
import {configAPI} from './configAPI'
import React from 'react'
import 'firebase/auth'
import firebase from 'firebase'
import {connect} from "react-redux"
import {setIsSigning, setIsSigned} from "../redux/actions/indexActions"

export const FirebaseContext = React.createContext(null)


export class FirebaseApp {
    constructor() {
        app.initializeApp(configAPI)
        this.auth = app.auth()
    }
}
export const firebaseApp = new FirebaseApp()

// export const firebaseApp = firebase.initializeApp(configAPI)


// const mapStateToProps = store => ( {
//  isSigning: store.isSigning,
//  isSigned: store.isSigned
// })
// const mapDispatchToProps = dispatch => ( {
//  setIsSigning: boolean => dispatch(setIsSigning(boolean)),
//  setIsSigned: boolean => dispatch(setIsSigned(boolean)),
//  })
// export default connect(mapStateToProps, mapDispatchToProps)(uiConfig)