import React from 'react';

function useKeydown(key, callback) {
  React.useEffect(() => {
    function handleEscape(event) {
      if (event.code === key) {
        callback(event);
      }
    }

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [key, callback]);
}

export default useKeydown;
