import styles from '../styles/Skills.module.css'; // Create this CSS module

const Skills = () => {
  const skills = {
    Languages: "JavaScript/TypeScript, Python, SQL, Java, C++, Visual Basic, HTML5, CSS",
    Frameworks: "React, Redux, Next.js, Node.js, WebGL, Three.js",
    Technologies: "Git, Docker, Jenkins, Android Studio, Jira, Jupyter, Excel",
    "Tools and Libraries": "Pandas, NumPy, Matplotlib, OpenPyXL, Ultralytics, RayTune, TensorFlow"
  }; // [cite: 1]

  return (
    <section id="skills" className={styles.skills}>
      <h2>Technical Skills</h2>
      <div className={styles.skillsGrid}>
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className={styles.skillCategory}>
            <h3>{category}</h3>
            <ul className={styles.skillList}>
              {skillList.split(', ').map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;