import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import './Episodes.css'
import axios from 'axios'
import ls from './pics/ls.png';


class Episodes extends Component {
  state = { episode: [] }

  getEpisode = (e) => {
    e.preventDefault();
    const episode = e.target.value;
    if(episode) {
      axios.get(`https://swapi.co/api/films/${episode}/`)
      .then(res => {
        console.log('res', res);
        this.setState({ episode: res.data })
        console.log(this.state.episode)
      })
      .catch(err => {
        console.log(err)
      })
    }else{
      return
    }
  }


  render(){
    return(
      <>
        <Navbar/>
        <div id="lsdiv">
        <h1>Star Wars</h1>
        <img alt="lightsabers" id="ls" src={ls}></img>
        <h1>Episodes</h1>
        </div>
        <select id="selector" onChange={this.getEpisode}>
          <option value="1">A New Hope</option>
          <option value="2">Empire Strikes Back</option>
          <option value="3">Return of the Jedi</option>
          <option value="4">Phantom Menace</option>
          <option value="5">Attack of the Clones</option>
          <option value="6">Revenge of the Sith</option>
          <option value="7">The Force Awakens</option>
        </select>
        <div className="episode">
        <p>Title: {this.state.episode.title}</p>
        </div>
      </>
    )
  }
}

export default Episodes
