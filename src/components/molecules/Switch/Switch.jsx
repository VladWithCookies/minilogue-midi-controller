import styles from './Switch.module.css';

export default function Switch({
  name,
  label,
  value,
  onChange,
  orientation,
  options = [],
}) {
  return (
    <div className={styles.wrapper}>
      {options.map((option) => (
        <div
          key={option.value}
          className={orientation === 'horizontal' && styles.horizontal}
        >
          <input
            id={option.value}
            name={name}
            type="radio"
            value={option.value}
            onChange={onChange}
          />
          {option.label && (
            <label htmlFor={option.value}>
              {option.label}
            </label>
          )}
        </div>
      ))}
      {label && <p>{label}</p>}
    </div>
  );
}
