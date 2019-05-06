import React from 'react'


const CharactersDisplay = props => (
    <div className="characters">
    {props.characters.map((character ,i) => (
        <div key={i}>
        {[
            ['name', 'Name'], 
            ['mass', 'Mass'], 
            ['hair_color', 'Hair Color'], 
            ['skin_color', 'Skin Color'],
            ['eye_color', 'Eye Color'],
            ['birth_year', 'Birth Year'],
            ['gender', 'Gender'],
            ['homeworld', 'Homeworld']
        ]
        .map(([attr, label]) => <p className="results">{label}: {character[attr]}</p>)}
            <br/>
        </div>
    ))}
    </div>
)

export default CharactersDisplay