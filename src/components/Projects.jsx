import Navbar from "./Navbar";
import "../css/projects.css";
import portfolio from "../portfolio.png";
import pythonchain from "../images/pythonchain.png"
import android_ehr from "../images/patient_home.png"
import commerce from "../images/commerce.png"
import notes from "../images/notes-app-react.jpg"
import django_React from "../images/django_react.png"


const ProjectDisplayItem =  ( { item  }) => (
  <div className="project">
    <h3>{ item.title }</h3>
    <center>
      <img width="170px" src={item.imageSrc}/>
    </center>
    <p>
      { item.description }
    </p>
    <p>
      <a href={item.scrCode}>Link to Code</a>
    </p>
  </div>
      
)


export default function Projects() {

  document.title = "Projects - Robert Sibanda"

  const Projects = [
    { 
      title : "Android EHR",
      description : "Android Electronic Health Recors developed using java. " +
        "The backend of the EHR is a Node.js Express.js Application",
      scrCode : "https://github.com/robertsibanda/sci4202",
      imageSrc : android_ehr
    },

    {
      title : "React & Django Notes app",
      description : "A notes taking app developed using React and Django",
      scrCode : "https://github.com/robertsibanda/react_django_notes_app",
      imageSrc : django_React
    },

    { 
      title : "React portfolio website",
      description : "A website developed using React." +
        "The site is my portfolio website",
      scrCode : "https://github.com/robertsibanda/portfolio",
      imageSrc : portfolio
    },

    { 
      title : "Express.js Note taking App",
      description : "A note taking app developed using Express, Mysql, and html.",
      scrCode : "https://github.com/robertsibanda/notes-app",
      imageSrc: notes
    },

    { 
      title : "Blockchain EHR",
      description : "A blockchain  app developed using Python, MongoDB, GRPC and jsonrpc." + 
      "for storing medical records",
      scrCode : "https://github.com/robertsibanda/python-blockchain",
      imageSrc: pythonchain
    },

    { 
      title : "E-commerce website",
      description : "A Django e-commerce website" ,
      scrCode : "https://github.com/robertsibanda/notes-app",
      imageSrc: commerce
    },

  ]

  return (
    <div className="Projects">
      <div className="project-tiles">
      {Projects.length > 0 ? (
          Projects.map(item => <ProjectDisplayItem key={item.title} item={item} />)
        ) : (
          <p>No items found</p>
        )}
        </div>
    </div>
  );
}
