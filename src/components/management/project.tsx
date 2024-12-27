import React, { useEffect, useState } from "react";
import Asset from "../asset-component";
import './project.css';
import JourneyBoard from "../JourneyBoard";
import data from "../management/data.json";

function ProjectManagement() {
  const [projectData, setProjectData] = useState(data);

  const hasTasks = projectData.tasks && projectData.tasks.length > 0;
  const task = hasTasks ? projectData.tasks[0] : null;

  const { isActive, description, learning_outcomes } = projectData;

  return (
    <>
      <div className="mt-5 hero-txt pt-4 d-flex justify-content-between align-items-center">
        <h2 style={{ color: '#0029FF', fontWeight: '700' }}>
          Technical Project Management
        </h2>
        <button className='btn btn-primary d-inline'>
          Submit task
        </button>
      </div>
      {hasTasks && (
        <div className="wrap-main">
          <div className="title text rounded">
            {task && task.task_id && (
              <>
                <h4 className="fw-bold">{task.task_title}</h4>
                <p>{task.task_description}</p>
              </>
            )}
          </div>
          {isActive && task && task.task_id && (
            <JourneyBoard 
                          taskId={task.task_id}
                          description={description}
                          learningOutcomes={learning_outcomes} tasks={projectData.tasks}            />
          )}
           {task && task.assets && task.assets.length > 0 && (
            <div className="assets-container row">
              {task.assets.map((asset, index) => (
                <div className="col-6" key={asset.asset_id}>
                  <Asset asset={asset} />
                </div>
              ))}</div>
          )}
        </div>
      )}
    </>
  );
}

export default ProjectManagement;
