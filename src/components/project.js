import React from "react";
import project1Video from "../Image/Fashion.mp4"; 
import project2Video from "../Image/Starpalace.mp4"

const projects = [
  {
    name: "Fashion: Client side interactive shopping website",
    description: "Build a user-friendly frontend for an interactive online shopping experience, ensuring ease of use and compatibility across devices.",
    technologies: ["ReactJS", "Bootstrap"],
    videoSrc: project1Video,  },
    {
      name: "Hotel Reservation Website",
      description: "Develop a Hotel Reservation Website for seamless booking and management of accommodations and services.",
      technologies: ["ReactJS", "Bootstrap"],
      videoSrc: project2Video,  }  
];

function Project() {
  return (
    <section id="projects" className="projects-section">
      <h3>My Creation💻</h3>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <video className="project-video" controls>
              <source src={project.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
      <div>
        <h3 className="more-to-come">Many more to come... Stay tuned! 🎉🔜</h3>
      </div>
    </section>
  );
}

export default Project;
