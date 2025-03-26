
import React from 'react'
import { useParams } from 'react-router-dom'

const GamePage = () => {

    const { id } = useParams()

    return (

        <section className="sec gamePage center">
            <div className="title title-space">Game</div>
                {id}
        </section>

    )
}

export default GamePage