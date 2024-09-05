import './Card.css';

// ASSETS
import arqdnc from '../../assets/ProjectsImg/arqdnc.jpg';
import weather from '../../assets/ProjectsImg/weather.jpg';
import ccxp from '../../assets/ProjectsImg/ccxp.jpg';
import resumednc from '../../assets/ProjectsImg/resume-dnc.jpg';

// COMPONENTS
import Button from '../Button/Button';


function Card({ theme }) {
    return (
        <div className={`cardsgrid mobile-fd-column`}>
            <div className={`card ${theme}`}>
                <div className={`card ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
                    <div className='txt-center'>
                        <img className='siteimg' src={arqdnc} alt="Architecture" />
                        <h1>Architecture</h1>
                        <p className='grey-color'>Project for the DNC course using React, where I'm learning to integrate APIs and apply React Hooks to build a responsive application.</p>
                    </div>
                    <a href="https://github.com/Ederchaves123/dnc-arq-eder" target="_blank" rel="noopener noreferrer"><Button buttonStyle="clickHere">Click Here</Button></a>


                </div>

            </div>

            <div className={`card ${theme}`}>
                <div className={`card ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
                    <div className='txt-center'>
                        <img className='siteimg' src={weather} alt="Weather" />
                        <h1>Weather</h1>
                        <p className='grey-color'>DNC project focused on creating a responsive website using React, where I learned to use APIs for weather forecasting.</p>
                    </div>
                    <a href="https://github.com/Ederchaves123/Weather" target="_blank" rel="noopener noreferrer"><Button buttonStyle="clickHere">Click Here</Button></a>
                </div>
            </div>

            <div className={`card ${theme}`}>
                <div className={`card ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
                    <div className='txt-center'>
                        <img className='siteimg' src={ccxp} alt="CCXP" />
                        <h1>CCXP</h1>
                        <p className='grey-color'>My early projects include developing a website for Brazil's largest event using JavaScript, featuring a countdown timer.</p>
                    </div>
                    <a href="https://github.com/Ederchaves123/Weather" target="_blank" rel="noopener noreferrer"><Button buttonStyle="clickHere">Click Here</Button></a>
                </div>
            </div>

            <div className={`card ${theme}`}>
                <div className={`card ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
                    <div className='txt-center'>
                        <img className='siteimg' src={resumednc} alt="Resume" />
                        <h1>Resume</h1>
                        <p className='grey-color'>My first project involved creating a summary page using HTML and CSS, focusing on layout and styling to effectively present content.</p>
                    </div>
                    <a href="https://github.com/Ederchaves123/Weather" target="_blank" rel="noopener noreferrer"><Button buttonStyle="clickHere">Click Here</Button></a>
                </div>
            </div>
        </div>
    );
}

export default Card;
