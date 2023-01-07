import styles from './Knob.module.css';

export default function Knob({ name, value, label, onChange }) {
  return (
    <div className={styles.wrapper}>
      <input
        name={name}
        type="range"
        value={value}
        onChange={onChange}
      />
      {label && <label>{label}</label>}
    </div>
  );
}
