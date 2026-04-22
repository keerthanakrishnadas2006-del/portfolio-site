import { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://portfolio-backend.onrender.com/api/projects")
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Error fetching projects:", err));
  }, []);

  return (
    <section id="projects" style={{ padding: "50px" }}>
      <h2>Projects</h2>
      <ul>
        {projects.map(p => (
          <li key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Projects;
