
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Game = () => {

    let navigate = useNavigate()

    return (
        <section className="sec game center">
            <div className="title title-space">Play</div>
            <div className="btn" onClick={() => navigate('/games')}>View Games</div>
            <div className="btn" onClick={() => navigate('/create-game')}>Create Game</div>
            <div className="btn btn-dark" onClick={() => navigate('/')}>Back To Home</div>
        </section>
    )
}

export default Game
