import React from "react";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Notes(){
    return (
        <div className="board">
            <div className="notice-board d-flex flex-column align-items-center justify-content-center">
            <a href="#">
            <FontAwesomeIcon icon={faTimes} style={{ color: '#fff' }} />
            </a>
            <div className="d-flex flex-column align-items-center justify-content-center text-vertical">Notice Board
            </div>
            
        </div>
        </div>
        
    );
}

export default Notes;