import React from 'react'
import './styles/Project.css'

const Project = ({ title, image, languages, demoUrl, codeUrl }) => {
    return (
        <div className='container__project'>
            <p >{title}</p>
            <img src={image} alt={image} />

            <div className='container__languages'>
                {languages.map((language, index) => (
                    <img key={index} src={language} alt={language} />
                ))}
            </div>
            <button>
                <a href={demoUrl} target="__blank"> Demo </a>
            </button>
            <button>
                <a href={codeUrl} target="__blank"> Code </a>
            </button>
        </div>
    )
}

export default Project
