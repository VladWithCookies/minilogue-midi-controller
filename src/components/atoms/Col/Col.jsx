import styles from './Col.module.css';

export default function Col({ children }) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
}
