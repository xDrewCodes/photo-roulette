
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CreateGame = ({ user }) => {

    let navigate = useNavigate()

    return (
        <section className="center">
            <div className="title title-space">Create Game</div>
            <input className="name" type="text" placeholder={!!user ? user.displayName + "'s Game" : 'Unnamed Game'} />
            <div className="btn">Create</div>
            <div className="btn btn-dark" onClick={() => navigate(-1)}>Back</div>
        </section>
    )
}

export default CreateGame
