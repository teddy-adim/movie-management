import React from "react";

const SuccessModal = ({ message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{message}</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SuccessModal;
