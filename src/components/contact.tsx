import questionmark from '../assets/question.png'
import meeting from '../assets/meeting.png'
import schedule from '../assets/schedule.png'
import React from "react";


function Contact(){
    return (
        <div className="ctx ">
             <div className='dt align-items-end flex-column mb-n1 '>
            <a href="#" className='p-2 align-right mb-0'>
                <img src={questionmark} className="icn" alt="" />
            </a>
            <a href="#" className='p-2 align-right mb-0'>
                <img src={meeting} className="icn" alt="" />
            </a>
            <a href="#" className='p-2 align-right mb-0'>
                <img src={schedule} className="icn" alt="" />
                </a>
        </div>
        </div>
       
    );
}

export default Contact;