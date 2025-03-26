
import React, { useState } from 'react'
import Login from './Login'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/init'
import { ToastContainer } from 'react-toastify'

const Nav = ({ logged, setLogged, user, setUser }) => {

    const [displayLogin, setDisplayLogin] = useState(false)

    function dispLogin() {
        setDisplayLogin(!displayLogin)
    }

    return (
        <nav className="align">
            <div className="title">Photo Roulette.</div>

            {
                displayLogin &&
                <Login logClose={dispLogin} setLogged={setLogged} user={user} setUser={setUser} />
            }
            {
                !logged && user == null
                    ?
                    <div className="btn-small" onClick={dispLogin}>Create Account</div>
                    :
                    <div className="align">
                        <div className="btn-small" onClick={() => {
                            signOut(auth)
                            setUser(null)
                            setLogged(false)
                        }}>Log Out</div>
                        <img src={(user && user.photoURL) || ""} alt="profile pic" className="profile__img" />
                    </div>
            }
        </nav>
    )
}

export default Nav
