import styles from '../styles/Hero.module.css'; // Create this CSS module

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Alexander Hawke</h1>
        <p>Honours B.Sc. in Computer Science with COOP (Summa Cum Laude) [cite: 14]</p>
        {/* You can add a sub-headline or a call to action button here */}
        <div className={styles.contactInfo}>
          <span>647-527-2321</span> |
          <span> alexander.wray.hawke@gmail.com</span> |
          <span> <a href="https://linkedin.com/in/alexander-hawke" target="_blank" rel="noopener noreferrer">linkedin.com/in/alexander-hawke</a></span> |
          <span> <a href="https://github.com/Alexander Hawke" target="_blank" rel="noopener noreferrer">github.com/Alexander Hawke</a></span> [cite: 1]
        </div>
      </div>
    </section>
  );
};

export default Hero;