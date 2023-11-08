import React, { useEffect } from 'react';

const Mytoast = ({ message, showToast, onClose }) => {
  useEffect(() => {
    if (showToast) {
      const timeout = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [showToast, onClose]);

  return showToast ? (
    <div className="fixed bottom-10 right-5 p-4 bg-green-500 text-white rounded shadow-lg">
      {message}
    </div>
  ) : null;
};

export default Mytoast;
