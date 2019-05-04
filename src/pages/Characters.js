import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import './Characters.css'


class Characters extends Component {
  state = { movies: [] }


  render(){
    return(
      <>
        <Navbar/>
        <h1>Star Wars Characters</h1>
      </>
    )
  }
}

export default Characters
