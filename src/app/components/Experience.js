import styles from '../styles/Experience.module.css'; // Create this CSS module

const experiences = [
  {
    role: "IT Intern",
    company: "National Research Council Canada",
    duration: "May 2024 – Aug 2024",
    location: "Ottawa, ON",
    technologies: "Visual Basic, Excel", // [cite: 2]
    points: [
      "Engineered Visual Basic scripts to automate expertise data integration, increasing keyword coverage by ~100% and accelerating expert-project matching by ~10%. [cite: 2, 3]",
      "Collaborated cross-functionally to ensure compatibility with a front-end search feature, driving ~80% more users. [cite: 3]",
      "Produced detailed documentation to support seamless script execution and user adoption. [cite: 4]"
    ]
  },
  {
    role: "IT Analyst",
    company: "Bluehaven",
    duration: "Sep 2023 – Dec 2023",
    location: "Mississauga, ON",
    technologies: "Python, Excel, QuickBooks, AI Narration", // [cite: 5]
    points: [
      "Automated financial data workflows with Python (Pandas/OpenPyXI), reducing processing time by ~80% and increasing accuracy to ~95%. [cite: 5]",
      "Created comprehensive documentation and training, reducing onboarding time by ~20% and supporting process improvement. [cite: 6]",
      "Utilized AI narration and voicing for a consistent brand image on training videos. [cite: 7]"
    ]
  },
  {
    role: "Full-stack Developer",
    company: "Cision",
    duration: "Jan 2023 – Apr 2023",
    location: "Ottawa, ON",
    technologies: "ReactJS, Redux, Jira, Jenkins, Github", // [cite: 8]
    points: [
      "Built 5+ React/Redux features for a SaaS platform, contributing to 2 major releases in an Agile team. [cite: 8]",
      "Utilized GitHub and Jenkins for continuous integration and deployment, ensuring code quality and release efficiency through peer-reviewed code. [cite: 9]",
      "Enhanced application functionality, improving user engagement and satisfaction. [cite: 10]"
    ]
  },
  {
    role: "SQL Intern",
    company: "Agriculture and Agri-Food Canada",
    duration: "Jul 2022 – Dec 2022",
    location: "Ottawa, ON",
    technologies: "Oracle SQL, Python, Crystal Reports", // [cite: 11]
    points: [
      "Modernized reporting by migrating 20+ legacy Crystal Reports to Oracle SQL, ensuring data continuity. [cite: 11]",
      "Developed 10+ SQL/Python scripts to meet new executive data needs, enabling faster decision-making. [cite: 12]",
      "Maneuvered data reporting around Crystal Reports depreciation and new data needs, providing precise and timely data insights. [cite: 13]"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className={styles.experienceItem}>
          <h3>{exp.role} <span className={styles.company}>@ {exp.company}</span></h3>
          <p className={styles.durationLocation}>{exp.duration} | {exp.location}</p>
          <p className={styles.technologies}><em>Technologies: {exp.technologies}</em></p>
          <ul>
            {exp.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;