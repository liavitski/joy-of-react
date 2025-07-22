import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, handleDelete }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ message, variant, id }) => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast
              variant={variant}
              key={id}
              id={id}
              handleDelete={handleDelete}
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
