import React, { useState } from "react";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Notes() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };
  if (!isVisible) {
    return null;
  }

  return (
    <div className="board">
      <div className="notice-board d-flex flex-column align-items-center justify-content-center">
        <a href="#" onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} style={{ color: '#fff' }} />
        </a>
        <div className="d-flex flex-column align-items-center justify-content-center text-vertical">
          Notice Board
        </div>
      </div>
    </div>
  );
}

export default Notes;
