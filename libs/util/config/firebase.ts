// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCHyAuHW9Uovt16ZE_x_Q3yafpnyLX-UgA',
  authDomain: 'ultimate-monorepo.firebaseapp.com',
  projectId: 'ultimate-monorepo',
  storageBucket: 'ultimate-monorepo.appspot.com',
  messagingSenderId: '300478362407',
  appId: '1:300478362407:web:92a073f250c0ca2d3c6f02',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
export const storage = getStorage(firebaseApp)
