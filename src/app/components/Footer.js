import styles from '../styles/Footer.module.css'; // Create this CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Alexander Hawke. All rights reserved.</p>
    </footer>
  );
};

export default Footer;