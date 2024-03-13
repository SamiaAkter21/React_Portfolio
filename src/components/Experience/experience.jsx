import React from 'react';
import './experience.css';

const Experience = () => {
    return ( 
        <section id="experience" className='experience'>
            <div className="about-header">
                <div className="line"></div>
                <h1 className="middle">Experience</h1>
                <div className="line"></div>
            </div>

            <div className="experience-content">
                <div className="job-section">
                    <div className="job-title">
                        <h1>Job title</h1>
                        <h4>Company Name</h4>
                        <hr/>
                        <a>April 2022 - March 2023</a>
                    </div>
                    <div className="vline1"></div>
                    <div className="job-description1">
                        <ul>
                            <li><a>Lorem ipsum dolar sit amet consectetur adipising elit. Present sit amet vestibulum facilisis ligula.Present sit amet vestibulum facilisis ligula</a></li><br></br>
                            <li><a>Lorem ipsum dolar sit amet consectetur adipising elit. Present sit amet vestibulum facilisis ligula.Present sit amet vestibulum facilisis ligula</a></li><br></br>
                            <li><a>Lorem ipsum dolar sit amet consectetur adipising elit. Present sit amet vestibulum facilisis ligula.Present sit amet vestibulum facilisis ligula</a></li><br></br>
                        </ul>
                    </div>
                </div>

                <div className="job-section">
                    <div className="job-description">
                        <ul>
                            <li><a>Lorem ipsum dolar sit amet consectetur adipising elit. Present sit amet vestibulum facilisis ligula.Present sit amet vestibulum facilisis ligula</a></li><br></br>
                            <li><a>Lorem ipsum dolar sit amet consectetur adipising elit. Present sit amet vestibulum facilisis ligula.Present sit amet vestibulum facilisis ligula</a></li><br></br>
                            <li><a>Lorem ipsum dolar sit amet consectetur adipising elit. Present sit amet vestibulum facilisis ligula.Present sit amet vestibulum facilisis ligula</a></li><br></br>
                        </ul>
                    </div>
                    <div className="vline2"></div>
                    <div className="job-title2">
                        <h1>Job title</h1>
                        <h4>Company Name</h4>
                        <hr/>
                        <a>April 2022 - March 2023</a>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Experience;