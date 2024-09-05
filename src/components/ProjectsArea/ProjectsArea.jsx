import './ProjectsArea.css';
import Card from '../Cards/Card';
import { useContext } from 'react';
import { ThemeContext } from '../../App';

function ProjectsArea() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className='d-flex fd-column projects'>
            <h1>PROJECTS</h1>
            <Card theme={theme} />
        </div>
    );
}

export default ProjectsArea;

