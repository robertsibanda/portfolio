import { useEffect } from "react";
import "../css/skills.css";

const skillCategories = [
  {
    name: "Frontend Development",
    icon: "🎨",
    skills: [
      { name: "React.js", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "HTML/CSS", level: 85 },
    ],
  },
  {
    name: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: "Django", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "Node.js", level: 75 },
    ],
  },
  {
    name: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "Python", level: 85 },
      { name: "Java", level: 75 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    name: "Mobile & Tools",
    icon: "📱",
    skills: [
      { name: "Android", level: 70 },
      { name: "Spring Boot", level: 65 },
      { name: "Git", level: 80 },
    ],
  },
  {
    name: "Databases",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 70 },
    ],
  },
];

export default function Skills() {
  useEffect(() => {
    document.title = "Skills - Robert Sibanda";
  }, []);

  return (
    <section className="skills-page section">
      <h1 className="section-title">
        Skills & <span className="gradient-text">Expertise</span>
      </h1>
      <p className="section-subtitle">
        Technologies and tools I've worked with to build real-world solutions
      </p>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div key={category.name} className="skill-category-card glass">
            <div className="skill-category-header">
              <span className="skill-category-icon">{category.icon}</span>
              <h3 className="skill-category-name">{category.name}</h3>
            </div>
            <div className="skill-items">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-item-header">
                    <span className="skill-item-name">{skill.name}</span>
                    <span className="skill-item-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
