import styles from '../styles/Contact.module.css'; // Create this CSS module

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Get In Touch</h2>
      <p>I'm currently looking for new opportunities. Feel free to reach out!</p>
      <div className={styles.contactDetails}>
        <p>Email: <a href="mailto:alexander.wray.hawke@gmail.com">alexander.wray.hawke@gmail.com</a> [cite: 1]</p>
        <p>Phone: 647-527-2321 [cite: 1]</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/alexander-hawke" target="_blank" rel="noopener noreferrer">linkedin.com/in/alexander-hawke</a> [cite: 1]</p>
        <p>GitHub: <a href="https://github.com/Alexander Hawke" target="_blank" rel="noopener noreferrer">github.com/Alexander Hawke</a> [cite: 1]</p>
      </div>
      {/* You could add a contact form here later */}
    </section>
  );
};

export default Contact;