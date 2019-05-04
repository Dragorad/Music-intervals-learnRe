import app from 'firebase/app'
import {configAPI} from './configAPI'
import React from 'react'
import 'firebase/auth'

export const FirebaseContext = React.createContext(null)


export class FirebaseApp {
    constructor() {
        app.initializeApp(configAPI)
        this.auth = app.auth()
    }
}
export const firebaseApp = new FirebaseApp()

