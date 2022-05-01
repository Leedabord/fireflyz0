// the main file in our front-end app
// create-react-app expects a file in src/index.js and loads everything from here

import Firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'

import App from './src/views/App'

console.log('create-react-app env:', process.env.NODE_ENV)
console.log('firefly project:', process.env.REACT_APP_ENV)

// connect our app to firebase 
const dbConfig = {
  apiKey: "AIzaSyAvB4R09YDHtfxOW7C3OQNLUGi9ce4qrws",
  authDomain: "todo-firebase-17b28.firebaseapp.com",
  databaseURL: "https://todo-firebase-17b28.firebaseio.com",
  projectId: "todo-firebase-17b28",
  storageBucket: "todo-firebase-17b28.appspot.com",
  messagingSenderId: "62533171737"
//  appId: "1:62533171737:web:44045ffb6a9f46327e8888"
//  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
}
Firebase.initializeApp(dbConfig)

// render the App component to our document root with React
ReactDOM.render(<App />, document.getElementById('root'))