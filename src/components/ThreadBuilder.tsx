import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCommentAlt, faLightbulb, faQuestionCircle, faSpa } from '@fortawesome/free-solid-svg-icons';
import './ThreadBuilder.css';

const ThreadBuilder: React.FC = () => {
  const [threads, setThreads] = useState([{ subThread: '', interpretation: '' }]);

  const handleAddThread = () => {
    setThreads([...threads, { subThread: '', interpretation: '' }]);
  };

  const handleThreadChange = (index: number, field: string, value: string) => {
    const updatedThreads = threads.map((thread, i) =>
      i === index ? { ...thread, [field]: value } : thread
    );
    setThreads(updatedThreads);
  };

  return (
    <div className="thread-builder">
      {threads.map((thread, index) => (
        <><div key={`thread-${index}`} className="thread-row">
          <div className="col sth">
            <label htmlFor={`subthread-${index}`}>Sub thread {index + 1}</label>
            <textarea
              id={`subthread-${index}`}
              placeholder="Enter Text here"
              value={thread.subThread}
              onChange={(e) => handleThreadChange(index, 'subThread', e.target.value)} />
          </div>
          <div className="col int">
            <label htmlFor={`interpretation-${index}`}>Sub Interpretation {index + 1}</label>
            <textarea
              id={`interpretation-${index}`}
              placeholder="Enter Text here"
              value={thread.interpretation}
              onChange={(e) => handleThreadChange(index, 'interpretation', e.target.value)} />
          </div>
        </div><span className="opt d-flex align-items-center justify-content-between">
            <span className="choice">
              <FontAwesomeIcon icon={faLightbulb} />
              <FontAwesomeIcon icon={faCommentAlt} />
              <FontAwesomeIcon icon={faQuestionCircle} />
              <FontAwesomeIcon icon={faSpa} />
            </span>
           <span className='buttn'>
           <button className="op-btn">
              Select Categ <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <button className="op-btn">
              Select Proces <FontAwesomeIcon icon={faChevronDown} />
            </button>
           </span>
          </span></>
      ))}

      <button className="add-btn" onClick={handleAddThread}>
        + Sub-thread
      </button>
      <div className="sth">
        <label htmlFor="summary">Summary for thread A</label>
        <textarea
          id="summary"
          placeholder="Enter Text here"
        />
      </div>
    </div>
  );
};

export default ThreadBuilder;
