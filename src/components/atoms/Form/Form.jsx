import { FormProvider } from 'react-hook-form';

import styles from './Form.module.css';

export default function Form({ onSubmit, methods, children, ...props }) {
  return (
    <FormProvider {...methods}>
      <form
        {...props}
        className={styles.form}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
}
