import { useFormContext } from 'react-hook-form';

import styles from './Knob.module.css';

export default function Knob({ name, label }) {
  const { register } = useFormContext();

  return (
    <div className={styles.wrapper}>
      <input
        id={name}
        type="range"
        max={127}
        {...register(name)}
      />
      {label && <label htmlFor={name}>{label}</label>}
    </div>
  );
}
