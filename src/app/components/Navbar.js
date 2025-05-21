import Link from 'next/link';
import styles from '../styles/Navbar.module.css'; // Create this CSS module

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Alexander Hawke</Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#skills">Skills</Link></li>
        <li><Link href="#experience">Experience</Link></li>
        <li><Link href="#projects">Projects</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;