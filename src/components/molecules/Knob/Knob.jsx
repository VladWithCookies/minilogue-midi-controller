import styles from './Knob.module.css';

export default function Knob({ name, value, label, onChange }) {
  return (
    <div className={styles.wrapper}>
      <input
        id={name}
        name={name}
        type="range"
        value={value}
        onChange={onChange}
      />
      {label && <label htmlFor={name}>{label}</label>}
    </div>
  );
}
