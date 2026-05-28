import { useEffect, useState } from "react";
import "../css/projects.css";
import portfolio from "../portfolio.png";
import pythonchain from "../images/pythonchain.png";
import android_ehr from "../images/patient_home.png";
import commerce from "../images/commerce.png";
import notes from "../images/notes-app-react.jpg";
import django_React from "../images/django_react.png";
import talent_verify from "../images/taltent_verify.png";

const projectsData = [
  {
    title: "Android EHR",
    description: "Electronic Health Records system built with Java (Android) and Node.js/Express backend.",
    code: "https://github.com/robertsibanda/sci4202",
    image: android_ehr,
    tech: ["Java", "Android", "Express.js", "Node.js"],
  },
  {
    title: "React & Django Notes",
    description: "Full-stack notes application with React frontend and Django REST API backend.",
    code: "https://github.com/robertsibanda/react_notes_app",
    image: django_React,
    tech: ["React", "Django", "REST API"],
  },
  {
    title: "Talent Verify",
    description: "Employee information management system with bulk data upload capabilities.",
    code: "https://github.com/robertsibanda/talent_verify",
    image: talent_verify,
    tech: ["Python", "Django", "Bulk Upload"],
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with React showcasing projects and skills.",
    code: "https://github.com/robertsibanda/portfolio",
    image: portfolio,
    tech: ["React", "CSS", "React Router"],
  },
  {
    title: "Express Notes App",
    description: "Note-taking application built with Express.js, MySQL, and server-rendered HTML.",
    code: "https://github.com/robertsibanda/node_rest_api",
    image: notes,
    tech: ["Express.js", "MySQL", "HTML/CSS"],
  },
  {
    title: "Blockchain EHR",
    description: "Blockchain-based medical records system using Python, MongoDB, gRPC, and JSON-RPC.",
    code: "https://github.com/robertsibanda/Python-blockchain",
    image: pythonchain,
    tech: ["Python", "MongoDB", "gRPC", "Blockchain"],
  },
  {
    title: "Event Management",
    description: "Full-stack event management platform with a React TypeScript frontend and Django REST API backend.",
    code: "https://github.com/robertsibanda/event-mgt-frontend",
    image: commerce,
    tech: ["React", "TypeScript", "Django", "Full-Stack"],
  },
];

export default function Projects() {
  useEffect(() => {
    document.title = "Projects - Robert Sibanda";
  }, []);

  return (
    <section className="projects-page section">
      <h1 className="section-title">
        My <span className="gradient-text">Projects</span>
      </h1>
      <p className="section-subtitle">
        A collection of projects showcasing my skills across full-stack development,
        mobile apps, and blockchain.
      </p>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="project-card glass">
      <div className="project-image-wrapper">
        {!imageLoaded && <div className="project-image-skeleton" />}
        <img
          src={project.image}
          alt={project.title}
          className={`project-image ${imageLoaded ? "loaded" : ""}`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="project-overlay">
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="project-code-link"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            Source Code
          </a>
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t} className="project-tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
