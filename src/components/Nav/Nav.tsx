import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      {/* Logo */}
      <h1 className={styles.logo}>Homely</h1>
      {/* Main navigation */}
      <ul className={styles.navList}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Groceries</a>
        </li>
      </ul>
      {/* User settings */}
      <div className={styles.settings}>
      </div>
    </nav>
  );
}
