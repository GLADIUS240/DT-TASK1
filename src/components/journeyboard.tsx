import React, { useState } from "react";
import { faArrowCircleLeft, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const JourneyBoard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggle() {
    setIsExpanded((prev) => !prev);
    console.log(isExpanded ? "Collapsed JourneyBoard" : "Expanded JourneyBoard");
  }

  return (
    <>
      <div
        className={`asset jb ${isExpanded ? "expanded" : "collapsed"}`}
        style={{
          position: "fixed",
          left: isExpanded ? "0" : "-16.25rem",
          top: "50%",
          transform: "translateY(-50%)",
          transition: "left 0.3s ease-in-out",
          backgroundColor: "#fff",
          color: "#000",
          width: "24.5rem",
          height: "100vh",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="as-title d-flex align-items-center justify-content-between p-2">
          <h5 className="text-center mb-0" style={{ margin: "0", flex: 1 }}>
            Journey Board
          </h5>
          <a
            className="clk"
            onClick={toggle}
            style={{ cursor: "pointer", padding: "0 10px" }}
          >
            <FontAwesomeIcon
              icon={isExpanded ? faArrowCircleLeft : faArrowCircleRight}
              className="a-ico"
            />
          </a>
        </div>
        {isExpanded && (
          <div className="as-des p-3">
            <ul className="main">
              <li>Explore the world of management</li>
            </ul>
            <ul>
              <li>Technical Project Management</li>
              <li>Threadbuild</li>
              <li>Structure your pointers</li>
              <li>4SA Method</li>
            </ul>
          </div>
        )}
        {!isExpanded && (
          <div
            onClick={toggle}
            style={{
              position: "absolute",
              left: "calc(100% - 6.25rem)",
              top: "7.375rem",
              transform: "translateY(-50%)",
              width: "4.25rem",
              height: "4.25rem",
              borderRadius: "1.25rem",
              backgroundColor: "#fff",
              color: "#0029FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2.25rem",
              border: "0.0625rem solid #0029FF",
              cursor: "pointer",
              zIndex: "1",
              transition: "left 0.3s ease-in-out",
            }}
          >
            1
          </div>
        )}
      </div>
    </>
  );
};

export default JourneyBoard;
