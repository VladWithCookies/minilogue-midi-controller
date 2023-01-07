import styles from './Toggle.module.css';

export default function Toggle({
  name,
  label,
  value,
  onChange,
}) {
  return (
    <div className={styles.wrapper}>
      <input
        id={name}
        name={name}
        type="checkbox"
        value={value}
        onChange={onChange}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
