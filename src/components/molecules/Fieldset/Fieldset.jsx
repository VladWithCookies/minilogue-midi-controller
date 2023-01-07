import styles from './Fieldset.module.css';

export default function Fieldset({ legend, children }) {
  return (
    <fieldset className={styles.wrapper}>
      {legend && <legend>{legend}</legend>}
      {children}
    </fieldset>
  );
}
