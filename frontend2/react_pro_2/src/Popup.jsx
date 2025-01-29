// Popup.jsx
import React from 'react';
import './Popup.css';

const Popup = ({ show, handleClose, children }) => {
  return (
    <div className={`popup ${show ? 'show' : ''}`}>
      <div className="popup-content">
        <span className="close" onClick={handleClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Popup;
