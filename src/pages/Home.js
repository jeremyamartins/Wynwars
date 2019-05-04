import React, {Component} from 'react'
import Navbar from '../components/Navbar'
import './home.css'


class Home extends Component{

  componentDidMount(){
    setTimeout(
      function() {
        document.getElementById('fLogo').style.display='none';
      }, 4999);
  }

render(){
    return(
      <div id="home">
        <Navbar/>
        
        
        
        <div className="fade"></div>

  {<section className="star-wars">
    <div className="crawl">
      <div className="title">
        <p></p>
        <h1>About</h1>
      </div>
      
      <p>Welcome to the Star Wars Database!  You can search for characters as well as individual Episodes, and if we finish early maybe some other stuff too!</p>
        
    </div>
  </section>}
        
        


    <div id="fLogo" className="starwars-demo">
      <img src="//cssanimation.rocks/demo/starwars/images/star.svg" alt="Star" className="star"/>
      <img src="//cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars" className="wars"/>
      <h2 className="byline" id="byline"> The Database</h2>
    </div>  
      </div>
    )
  }
}

export default Home
