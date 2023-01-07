import clsx from 'clsx';

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
      <div className={clsx(styles.options, orientation === 'horizontal' && styles.horizontal)}>
        {options.map((option) => (
          <div key={option.value}>
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
      </div>
      {label && <p className={styles.label}>{label}</p>}
    </div>
  );
}
