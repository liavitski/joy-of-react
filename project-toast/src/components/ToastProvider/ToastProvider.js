import React from 'react';

import useKeyDown from '../../hooks/useKeyDown';
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function addToast(message, value) {
    const newToast = {
      variant: value,
      id: crypto.randomUUID(),
      message,
    };

    const newToasts = [...toasts, newToast];
    setToasts(newToasts);
  }

  function removeToast(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
    setToasts(nextToasts);
  }

  const handleKeyDown = React.useCallback(() => {
    setToasts([]);
  }, []);

  useKeyDown('Escape', handleKeyDown);

  return (
    <ToastContext.Provider
      value={{
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
