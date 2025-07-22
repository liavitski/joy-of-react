import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ message, variant, id }) => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast
              variant={variant}
              key={id}
              id={id}
              handleDismiss={handleDismiss}
            >
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
