import React from 'react'
import playSound from '../utils/playSound'
import './styles/ButttonModern.css'

const ButtonModern = ({ content }) => {
    return (
        <button className='buttton__modern' type="submit" onMouseEnter={playSound} onMouseLeave={() => { }} >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {content}
        </button>
    )
}

export default ButtonModern
