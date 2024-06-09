import Navbar from "./Navbar";
import "../css/about.css";
import image from "../images/image.JPG";
import { useState } from "react";


const SkillsDisplayItem =  ( { item  }) => (
  <div className="skills">
    <li>{ item }</li>
  </div>
      
)

export default function About() {
  document.title = "About Robert Sibanda";

  const Skills = [
    "Express.js",
     "React.js", 
     "Python", 
     "Django", 
     "Java",
      "Android",
       "Spring Boot"
  ]

  return (
    <div className="About">
      <div className="about-tiles">
        <div className="about">
          <h1>Personal</h1>
          <h2>
          My name is Robert Sibanda, a detail-oriented software developer 
          based in Bulawayo, 
          Zimbabwe. I completed my secondary education at Guinea Fowl High School. 
          Born in Shurugwi on August 24, 1998,
           I bring a passion for technology and a dedication to excellence in all my endeavors.
          </h2>
         
        </div>

        <div className="about">
        <h1>Skills</h1>

          <ul>
          {Skills.length > 0 ? (
            Skills.map(item => <SkillsDisplayItem key={item.title} item={item} />)
            ) : (
              <p>No Skills found</p>
            )}
          </ul>
        </div>
        
        <div className="about">
          <h1>Contact Information</h1>
          <h2>Email : robertsibanda20@gmail.com</h2>
          <h2>Mobile: +263716767907</h2>
          <h2>Mobile: +263786772147</h2>
          <h2>Mobile: +263774611839</h2>
          <a href={"https://www.linkedin.com/in/robert-sibanda-520439115/"}>LinkedIn</a>
          <br></br>
          <a href={" https://github.com/robertsibanda"}>Github</a>
        </div>
      </div>
         
        </div>


  );
}
