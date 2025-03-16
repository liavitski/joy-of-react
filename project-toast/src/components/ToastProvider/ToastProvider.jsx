import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function handleDismiss(id) {
    const newToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(newToasts);
  }

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
        handleDismiss,
        toasts,
        createToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
