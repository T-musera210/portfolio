
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";


const skills = [
  { name: "React", icon: <FaReact className="skill-icon" /> },
  { name: "Node.js", icon: <FaNodeJs className="skill-icon" /> },
  { name: "PHP", icon: <FaPhp className="skill-icon" /> },
  { name: "Git", icon: <FaGitAlt className="skill-icon" /> },
  { name: "HTML", icon: <FaHtml5 className="skill-icon" /> },
  { name: "CSS", icon: <FaCss3Alt className="skill-icon" /> },
  { name: "MySQL", icon: <SiMysql className="skill-icon" /> },
  { name: "UI/UX", icon: <FaFigma className="skill-icon" /> }, // Using Figma as a general UI/UX tool
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
