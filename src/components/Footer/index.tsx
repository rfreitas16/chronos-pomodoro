import styles from './styles.module.css';

export function Footer() {

  return (
  <footer className={styles.footer}>
    <a href="/about-pomodoro/">Entenda como funciona a tecnia Pomodoro</a>
    <a href="/">Chronos Pmodoro &copy; {new Date().getFullYear()}- Feito com ♥</a>
  </footer>
  );
}

