import image from "../images/robert.jpg";
import Navbar from "./Navbar";
import "../css/home.css"

export default function Home() {
  document.title = "Robert Sibanda";

  return (
    <div className="Home">
      <header className="App-header">
        <p>Robert Sibanda</p>

        <img src={image} alt="robert`s image" width={"300px"} height={"350px"}></img>
        <p className="home-text">
        My name is Robert Sibanda, born on August 24, 1998. 
        I graduated with a BSc in Informatics from the 
        National University of Science and Technology in 2024.
         I am passionate about software development and have
          experience in Python, Java (Android), React, Express.js, 
          MongoDB, and Django. I am always eager to learn and tackle
           new challenges in technology.

        <a href="/skills">more</a>
        </p>
      </header>
    </div>
  );
}
