
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({ user }) => {

    let navigate = useNavigate()

    return (
        <section className="home center">
            <h1 className="home__title">Photo Roulette</h1>
            <input className="name" placeholder={ user && user.displayName || 'Nickname'}></input>
            <div className="btn">Set Name</div>
            <div className="btn" onClick={() => navigate('/game')}>Join Game</div>
        </section>
    )
}

export default Home
