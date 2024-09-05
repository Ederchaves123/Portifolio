import './Footer.css'

//ASSETS
import GitHub from '../../assets/socialmedia/GitHub.svg'
import Linkedin from '../../assets/socialmedia/Linkedin.svg'



function Footer() {
    return (
        <footer className='container d-flex jc-center'>
            <div className='d-flex jc-space-between personal-data mobile-fd-column'>

                <div className='d-flex fd-column '>
                    <h1>My Phone:</h1>
                    <h2>+5554 99611-2021</h2>
                </div>

                <div className='d-flex fd-column '>
                    <h1>E-mail:</h1>
                    <h2>eder.cca@gmail.com</h2>
                </div>

                <div className='d-flex al-end social-media'>
                <a  href="https://github.com/Ederchaves123" target="_blank"><img src={GitHub} alt="GitHub"/></a>
                <a href="https://www.linkedin.com/in/%C3%A9der-jos%C3%A9-grzybowski-chaves-582a71180/" target="_blank"><img src={Linkedin} alt="LinkedIn"/></a>
                </div>
            </div>

        </footer>
    )
}

export default Footer