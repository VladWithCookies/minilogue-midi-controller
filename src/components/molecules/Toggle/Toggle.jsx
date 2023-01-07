import { useFormContext } from 'react-hook-form';

import styles from './Toggle.module.css';

export default function Toggle({ name, label }) {
  const { register } = useFormContext();

  return (
    <div className={styles.wrapper}>
      <input
        id={name}
        type="checkbox"
        {...register(name)}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
