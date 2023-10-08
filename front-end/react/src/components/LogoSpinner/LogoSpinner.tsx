import React from 'react'
import './logoSpinner.css'

interface LogoSpinnerProps {
    url: string
    img: string
    alt: string
}

const Button: React.FC<LogoSpinnerProps> = ({ url, img, alt }) => {
    return (
        <a href={url} target="_blank">
            <img src={img} className="logo" alt={alt} />
        </a>
    );
};

export default Button
