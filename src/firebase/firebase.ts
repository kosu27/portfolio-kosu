import 'firebase/auth'
import 'firebase/storage'
import 'firebase/functions'
import 'firebase/app'
import 'firebase/firestore'

import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const storage = firebase.storage()
export const functions = firebase.functions()
export const provider = new firebase.auth.GoogleAuthProvider()
// eslint-disable-next-line import/no-default-export
export default firebase
