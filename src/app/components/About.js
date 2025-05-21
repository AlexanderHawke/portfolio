import styles from '../styles/About.module.css'; // Create this CSS module

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <p>
        Highly motivated Computer Science graduate with a Summa Cum Laude Honours B.Sc. from the University of Ottawa. [cite: 14]
        Experienced in full-stack development, IT analysis, and data-driven solutions.
        Passionate about leveraging technology to solve complex problems and drive innovation.
        {/* You can expand on this section with more personal details or career aspirations */}
      </p>
      <h3>Education</h3>
      <div className={styles.educationItem}>
        <h4>Honours B.Sc. in Computer Science with COOP (Summa Cum Laude) [cite: 14]</h4>
        <p>University of Ottawa | Sep 2020 – Dec 2024 | Ottawa, ON [cite: 14]</p>
        <ul>
          <li>Relevant Coursework:</li>
          <li>Analysis & Design of User Interfaces (Usability Principles, UI/UX Design, Prototyping) [cite: 15]</li>
          <li>Data Science (Big Data, Data Analysis, Visualization) [cite: 15]</li>
          <li>Artificial Intelligence (Machine Learning, Neural Networks, Reinforcement Learning) [cite: 15]</li>
        </ul>
      </div>
    </section>
  );
};

export default About;