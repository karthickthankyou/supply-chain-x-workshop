import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCQA1-VONk37GRAlCWSB9L-m0ofEmiWVzo',
  authDomain: 'supplychainx.firebaseapp.com',
  projectId: 'supplychainx',
  storageBucket: 'supplychainx.appspot.com',
  messagingSenderId: '696183481416',
  appId: '1:696183481416:web:32f35b7f6a5973cfb2647d',
  measurementId: 'G-8L9FGK1X8S',
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)

export const db = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp)

export const auth = getAuth(firebaseApp)
