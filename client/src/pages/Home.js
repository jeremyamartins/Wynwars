import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <Navbar />

        <div className="fade" />

        {
          <section className="star-wars">
            <div className="crawl">
              <div className="title">
                <p />
                <h1>About Us</h1>
              </div>

              <p>
                Welcome to the Star Wars Database! For All of your intrests in
                the universe beyond stars, we have created a Database made
                available for anyone to search their favorite Episodes along
                with Charecters within them. The Galaxy is unlimited... As
                Obi-Wan says "May the force be with you!"
              </p>
            </div>
          </section>
        }

        <div id="fLogo" className="starwars-demo">
          <img
            src="//cssanimation.rocks/demo/starwars/images/star.svg"
            alt="Star"
            className="star"
          />
          <img
            src="//cssanimation.rocks/demo/starwars/images/wars.svg"
            alt="Wars"
            className="wars"
          />
          <h2 className="byline" id="byline">
            {" "}
            The Database
          </h2>
        </div>
      </div>
    );
  }
}

export default Home;
