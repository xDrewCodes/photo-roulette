import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateGame = ({ user, createGame }) => {
    const [gameName, setGameName] = useState('')
    let navigate = useNavigate()

    const handleCreateGame = () => {
        const nameToPass = gameName.trim() || (!!user ? user.displayName + "'s Game" : 'Unnamed Game')
        createGame(nameToPass)
    }

    return (
        <section className="sec center">
            <div className="title title-space">Create Game</div>
            <input
                className="name"
                type="text"
                placeholder={!!user ? user.displayName + "'s Game" : 'Unnamed Game'}
                value={gameName}
                onChange={(e) => setGameName(e.target.value)}
            />
            <div className="btn" onClick={handleCreateGame}>Create</div>
            <div className="btn btn-dark" onClick={() => navigate(-1)}>Back</div>
        </section>
    )
}

export default CreateGame