
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Games = ({ games }) => {

    let navigate = useNavigate()

    //function openGame() {}

    return (
        <section className="sec games center">
            <div className="title title-space">Game Select</div>
            {
                !games
                    ?
                    <div className="title">No Current Games</div>
                    :
                    games.map((game, i) => (<div
                        className="btn"
                        key={i}
                        onClick={() => navigate(`/games/${game.id}`)}
                        >
                        {game.name}
                    </div>))
            }
            <div className="btn btn-dark" onClick={() => navigate(-1)}>Back</div>
        </section>
    )
}

export default Games
