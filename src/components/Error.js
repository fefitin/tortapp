import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Error = ({ message, onClose }) => {
  return <div className="bg">
    <div className="popup">
      {message}
      <button className="close" onClick={onClose}>
        <FontAwesomeIcon icon="times" />
      </button>
    </div>
  </div>;
}

export default Error;