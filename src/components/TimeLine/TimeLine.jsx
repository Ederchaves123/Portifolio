import './TimeLine.css';

import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
function TimeLine() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`timeline-container ${theme}`}>
            <div className={`tellingtimeline ${theme}`}>
                <div className={`timeline ${theme}`}></div>
                <div className={`timeline-dots ${theme}`}>
                    <div className={`timeline-dot ${theme}`}></div>
                    <div className={`timeline-dot ${theme}`}></div>
                    <div className={`timeline-dot ${theme}`}></div>
                    <div className={`timeline-dot ${theme}`}></div>
                </div>
            </div>



            <div className="timeline-items d-flex">
                <div className="timeline-content d-flex fd-column text-one">
                    <h3>2012</h3>
                    <p>Worked on self-improvement in football, specifically on tactical strategies.</p>
                </div>

                <div className="timeline-content d-flex fd-column text-two">
                    <h3>2018</h3>
                    <p>I moved to Sydney, Australia to study English.</p>
                </div>

                <div className="timeline-content d-flex fd-column text-three">
                    <h3>2022</h3>
                    <p>
                        I got married, transitioned to a career in the fitness industry, and began my studies in the field of development.</p>
                </div>

                <div className="timeline-content d-flex fd-column text-four">
                    <h3>2024</h3>
                    <p>I started a professional course aimed at working in the development field.</p>
                </div>
            </div>
        </div>
    );
}

export default TimeLine;
