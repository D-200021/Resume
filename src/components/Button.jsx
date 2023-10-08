import React from 'react'
import './Works/works.css';
const Button = ({ url, btnName }) => {
    const handleButtonClick = () => {
        window.open(url, '_blank');
    };
    return (
        <button className="Btn" onClick={handleButtonClick}>{btnName}</button>
    )
}

export default Button
