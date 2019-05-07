import React from 'react'


const CharactersUserForm = (props) => {
    return(
        <form className="search" onSubmit = {props.getCharacter}>
            <h4>Enter Character</h4>
            <input  placeholder="Character" type="text" name="character"/>
            <br></br>
            <button>Submit</button>
        </form>
    )
}

export default CharactersUserForm
