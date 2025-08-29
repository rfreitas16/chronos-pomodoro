import { RouterLink } from '../RouterLink';
import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href='/about-pomodoro/'>
        Entenda como funciona a tecnia Pomodoro
      </RouterLink>
      <RouterLink href='/'>
        Chronos Pmodoro &copy; {new Date().getFullYear()}- Feito com ♥
      </RouterLink>
    </footer>
  );
}
