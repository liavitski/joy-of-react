import React from 'react';
import useKeydown from '../../hooks/use-keydown';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function handleDismiss(id) {
    const newToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(newToasts);
  }

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useKeydown('Escape', handleEscape);

  function createToast(message, variant) {
    const newToasts = [
      ...toasts,
      {
        message,
        variant,
        id: crypto.randomUUID(),
      },
    ];
    setToasts(newToasts);
  }

  return (
    <ToastContext.Provider
      value={{
        toasts,
        handleDismiss,
        createToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
