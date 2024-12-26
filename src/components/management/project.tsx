import React from "react";
import Asset from "../asset-component";
import  './project.css'

function ProjectManagement(){
return (
    <><div className="mt-5 hero-txt pt-4 d-flex justify-content-between align-items-center ">
        <h2 style={{ color: '#0029FF',fontWeight:'700' }}>
            Technical Project Management
        </h2>
        <button className='btn btn-primary d-inline'>
            Submit task
        </button>
    </div>
    <div className="wrap-main">
    <div className="title text rounded">
        <h4 className="fw-bold ">Explore the world of management</h4>
        <p>As a project manager, you play an important reole in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?</p>
    </div>
        <Asset/>
    </div>
    
        </>
);
}
export default ProjectManagement;