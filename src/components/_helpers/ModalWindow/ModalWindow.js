import React, {useState} from "react";
import "./style.scss";
import FeedbackForm from "../../FeedbackForm/FeedbackForm";

export default function ModalWindow({isOpen}) {
    return (
            <div className="modalWindow-overlay">
                <div className="modalWindow-container">
                    <div className="modalWindow-content">
                        <div className="text-right navicon-new">
                            <button className='nav-toggle-new active' onClick={isOpen}><span></span></button>
                        </div>
                        <FeedbackForm/>
                    </div>
                </div>

            </div>

    );
}




