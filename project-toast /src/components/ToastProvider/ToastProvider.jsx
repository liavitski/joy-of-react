import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: 'It works!',
      variant: 'success',
    },
    {
      id: crypto.randomUUID(),
      message: 'Logged in',
      variant: 'success',
    },
  ]);

  function handleDismiss(id) {
    const newToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(newToasts);
  }

  function createToast(message, variant) {
    const newToasts = [
      ...toasts,
      { message, variant, id: crypto.randomUUID() },
    ];

    setToasts(newToasts);
  }

  return (
    <ToastContext value={{ toasts, handleDismiss, createToast }}>
      {children}
    </ToastContext>
  );
}

export default ToastProvider;
