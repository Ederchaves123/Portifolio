import './Header.css'

// ASSETS
import GitHub from '../../assets/socialmedia/GitHub.svg';
import Linkedin from '../../assets/socialmedia/Linkedin.svg';

//COMPONENTS
import Button from '../Button/Button'

function Header({ scrollToAbout, scrollToOverview, scrollToProjects, toggleTheme }) {
    return (
        <header className='d-flex al-center mobile-fd-column'>
            <nav className='d-flex jc-center'>
                <ul className='d-flex mobile-fd-column'>
                <li onClick={scrollToOverview}>Overview</li>
                <li onClick={scrollToProjects}>Projects</li>
                <li onClick={scrollToAbout}>About</li>
                </ul>
            </nav>
            <div className='d-flex links'>
                <a href="https://github.com/Ederchaves123" target="_blank" rel="noopener noreferrer">
                    <img src={GitHub} alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/%C3%A9der-jos%C3%A9-grzybowski-chaves-582a71180/" target="_blank" rel="noopener noreferrer">
                    <img src={Linkedin} alt="LinkedIn" />
                </a>
            </div>
            <Button onClick={toggleTheme} buttonStyle="theme">Color Theme</Button>
        </header>
    );
}

export default Header;
