
import React, { useState } from 'react'
import Login from './Login'

const Nav = ({ logged, setLogged, user, setUser }) => {

    const [displayLogin, setDisplayLogin] = useState(false)

    function dispLogin() {
        setDisplayLogin(!displayLogin)
    }

    console.log(user)

    return (
        <nav>
            {
                displayLogin &&
                <Login logClose={dispLogin} setLogged={setLogged} user={user} setUser={setUser} />
            }
            {
                !logged && user == null
                    ?
                    <div className="btn" onClick={dispLogin}>Create Account</div>
                    :
                    <div className="align">
                        <div className="btn-small">Log Out</div>
                        <img src={user.photoURL} className="profile__img" />
                    </div>
            }
        </nav>
    )
}

export default Nav
