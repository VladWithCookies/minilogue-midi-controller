import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';

import styles from './Switch.module.css';

export default function Switch({
  name,
  label,
  orientation,
  options = [],
}) {
  const { register } = useFormContext();

  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles.options, orientation === 'horizontal' && styles.horizontal)}>
        {options.map((option, index) => (
          <div
            key={`${name}-${index}`}
            className={styles.option}
          >
            <input
              id={option.value}
              type="radio"
              value={option.value}
              {...register(name)}
            />
            {option.label && (
              <label htmlFor={option.value}>
                {option.label}
              </label>
            )}
          </div>
        ))}
      </div>
      {label && (
        <p className={styles.label}>
          {label}
        </p>
      )}
    </div>
  );
}
