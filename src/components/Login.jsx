
import { signInWithPopup } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase/init'

const Login = ({ logClose, setLogged, setUser }) => {

    function googleLog() {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider).then(async (result) => {
            if (result.user) {
                logClose()
                setLogged(true)
                setUser(result.user)
            }
        })
    }

    return (
        <section className="sec-transp login center">
            <div className="login__card center">
                <div>
                    <div className="btn" onClick={googleLog}>Continue With Google</div>
                    <div className="btn">Continue With Phone</div>
                    <div className="btn" onClick={logClose}>Continue As Guest</div>
                </div>
                <div className="btn btn-dark" onClick={logClose}>Close</div>
            </div>
        </section>
    )
}

export default Login
