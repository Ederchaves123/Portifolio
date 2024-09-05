import './Button.css';

function Button({ onClick, buttonStyle, children }) {
    return (
        <button className={`btn ${buttonStyle}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
