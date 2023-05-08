const Button = ({ innerText, emoji, handleClick}) => {
    return (
        <button onClick={handleClick}>
            {innerText} {emoji}
        </button>
    )
}

export default Button