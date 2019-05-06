import React from 'react'
import './UserForm.css'
const UserForm = (props) => {
    return(
        <form className="search" onSubmit = {props.getCharacter}>
            <h4>Enter Character</h4>
            <input  placeholder="Character" type="text" name="character"/>
            <br></br>
            <button>Submit</button>
        </form>
    )
}

export default UserForm