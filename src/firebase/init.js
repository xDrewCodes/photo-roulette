
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {

}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const db = getFirestore()