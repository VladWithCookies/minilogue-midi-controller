import clsx from 'clsx';

import styles from './Fieldset.module.css';

export default function Fieldset({ legend, orientation, children }) {
  return (
    <fieldset className={clsx(styles.wrapper, orientation === 'horizontal' && styles.horizontal)}>
      {legend && <legend>{legend}</legend>}
      {children}
    </fieldset>
  );
}
