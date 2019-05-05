import React from 'react'
import './Display.css'

const Display = props => (
    <div className="characters">
    {props.characters.map((character ,i) => (
        <div key={i}>
            <p className="results">Name: {character.name}</p>
            <p className="results">Mass: {character.mass}</p>
            <p className="results">Hair Color: {character.hair_color}</p>
            <p className="results">Skin Color: {character.skin_color}</p>
            <br/>
        </div>
    ))}
    </div>
)

export default Display