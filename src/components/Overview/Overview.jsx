import './Overview.css'

//COMPONENTS
import Button from '../Button/Button'


function Overview() {
    return (
        <div className=' overview'>
            <h1> Hey, My name is Éder! </h1>
            <p className='grey-color'>
                Passionate about technology and innovative solutions, I am currently studying full stack development, building a strong foundation in both front-end and back-end technologies. I have developed skills in HTML, CSS, and JavaScript, and am gaining experience with frameworks like React and Node.js. Additionally, I am proficient in version control using Git. </p>
            <a href="https://www.linkedin.com/in/%C3%A9der-jos%C3%A9-grzybowski-chaves-582a71180/" target="_blank" rel="noopener noreferrer">
                <Button buttonStyle="learnMore">LearnMore</Button></a>
        </div>
    )
}

export default Overview