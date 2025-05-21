import styles from '../styles/Projects.module.css'; // Create this CSS module

const projects = [
  {
    title: "Road Hazard Object Detection AI",
    technologies: "Ultralytics YOLO, Python, RayTune, Roboflow, Jupyter Notebook", // [cite: 16] (partially, as YOLOv9 is a specific model not a general tech here)
    description: [
      "Developed and trained an AI model with 20 classes for real-time road hazard detection using the YOLOv9 model. [cite: 16]",
      "Improved model mAP and F1 score to 0.75 by applying reinforcement learning techniques on annotated datasets from Roboflow, utilizing k-fold cross-validation, and optimizing hyperparameters with RayTune. [cite: 16]"
    ],
    // link: "#" // Add link to project if available
  },
  {
    title: "ReactJS E-commerce Website",
    technologies: "ReactJS, Redux", // [cite: 17]
    description: [
      "Designed an e-commerce platform for a mock shoe retailer using ReactJS and Redux. [cite: 17]",
      "Refined the user interface based on iterative feedback and usability testing. [cite: 18]"
    ],
    // link: "#"
  },
  {
    title: "Discord Bot",
    technologies: "Java", // [cite: 19]
    description: [
      "Built a Discord bot with custom commands and automation features for improved server management. [cite: 19]"
    ],
    // link: "#"
  },
  {
    title: "Information Retrieval System",
    technologies: "Python, NLTK, WordNetLemmatizer", // [cite: 20]
    description: [
      "Constructed an information retrieval system utilizing natural language processing techniques such as lemmatization with NLTK. [cite: 20]"
    ],
    // link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3>{project.title}</h3>
            <p className={styles.technologies}><em>Built with: {project.technologies}</em></p>
            <ul>
              {project.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            {/* {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>View Project</a>} */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;