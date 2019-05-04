import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import './Episodes.css'


class Episodes extends Component {
  state = { movies: [] }


  render(){
    return(
      <>
        <Navbar/>
        <h1>Star Wars Episodes</h1>
      </>
    )
  }
}

export default Episodes
