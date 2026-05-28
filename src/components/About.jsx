import { useEffect } from "react";
import "../css/about.css";

const skillsData = [
  { category: "Frontend", skills: ["React.js", "HTML/CSS", "JavaScript"] },
  { category: "Backend", skills: ["Express.js", "Django", "Node.js"] },
  { category: "Languages", skills: ["Python", "Java", "JavaScript"] },
  { category: "Mobile", skills: ["Android", "Spring Boot"] },
  { category: "Databases", skills: ["MongoDB", "MySQL"] },
  { category: "Tools", skills: ["Git", "Docker", "VS Code"] },
];

export default function About() {
  useEffect(() => {
    document.title = "About - Robert Sibanda";
  }, []);

  return (
    <section className="about-page section">
      <h1 className="section-title">
        About <span className="gradient-text">Me</span>
      </h1>
      <p className="section-subtitle">
        Passionate about building impactful software solutions
      </p>

      <div className="about-grid">
        <div className="about-card glass">
          <div className="about-card-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <h3 className="about-card-title">Personal</h3>
          <p className="about-card-text">
            I'm a detail-oriented software developer based in Bulawayo, Zimbabwe.
            I graduated with a BSc in Informatics from the National University of
            Science and Technology in 2024. Born in Shurugwi on August 24, 1998,
            I bring dedication and passion to every project I take on.
          </p>
        </div>

        <div className="about-card glass">
          <div className="about-card-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          </div>
          <h3 className="about-card-title">Skills & Expertise</h3>
          <div className="skill-bars">
            {skillsData.map((group) => (
              <div key={group.category} className="skill-group">
                <h4 className="skill-category">{group.category}</h4>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-card glass">
          <div className="about-card-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <h3 className="about-card-title">Contact</h3>
          <div className="contact-info">
            <a href="mailto:robertsibanda20@gmail.com" className="contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>robertsibanda20@gmail.com</span>
            </a>
            <a href="tel:+263716767907" className="contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>+263 716 767 907</span>
            </a>
            <div className="contact-socials">
              <a href="https://www.linkedin.com/in/robert-sibanda-520439115/" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                LinkedIn
              </a>
              <a href="https://github.com/robertsibanda" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="about-education glass">
        <div className="education-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
        </div>
        <div>
          <h3>Education</h3>
          <p>BSc in Informatics — National University of Science and Technology (2024)</p>
        </div>
      </div>
    </section>
  );
}
