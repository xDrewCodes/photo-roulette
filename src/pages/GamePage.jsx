
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const GamePage = ({ games }) => {

    const { gameid } = useParams()
    const [currentGame, setCurrentGame] = useState()
    let navigate = useNavigate()
    let rn = new Date()

    function getGame() {
        let game = games.filter((g) => (g.id === gameid))
        setCurrentGame(game[0])
    }

    useEffect(() => {
        getGame()
    }, []) // eslint-disable-next-line react-hooks/exhaustive-deps

    return (

        <section className="sec gamePage center">
            {
                currentGame &&
                <div className="game-card">
                    <div className="title">{currentGame.name}</div>
                    <div className="para title-space">- Started about {
                        Math.floor(((rn.getTime() / 1000) - currentGame.createdAt.seconds) / 60)
                    } minutes ago</div>
                </div>
            }
            <div className="btn" onClick={() => {
                toast('Unable to join game. Try refreshing games.', {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    progress: undefined,
                    theme: "dark"
                })
            }}>Join Game</div>
            <div className="btn btn-dark" onClick={() => navigate(-1)}>Exit</div>
        </section>

    )
}

export default GamePage