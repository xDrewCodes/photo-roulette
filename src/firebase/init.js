
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, getRedirectResult } from 'firebase/auth'
//import { GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBE1kBNvdEhuauIhzPHPIl98I38JVpTymE",
    authDomain: "photo-roulette-app.firebaseapp.com",
    projectId: "photo-roulette-app",
    storageBucket: "photo-roulette-app.firebasestorage.app",
    messagingSenderId: "649335296457",
    appId: "1:649335296457:web:8775f3ab6df2fd03041818"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
getRedirectResult(auth)
    .then((result) => {
        if (result) {
            //const cred = GoogleAuthProvider.credentialFromResult(result)
            //const token = cred.accessToken
            console.log(result.user)
        } else {
            console.log("No redirect result available.")
        }
    })
    .catch((error) => {
        console.error("Error during redirect result handling:", error)
    });

export const db = getFirestore()
export default app
