import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import CV from "../assets/CVMaxCereceda.pdf";
import playSound from "../utils/playSound";
import './styles/SideBar.css'

const SideBar = () => {
    return (
        <aside className="container__social-icons">
            <ul>
                <li className="li__linkedin" onMouseEnter={playSound} onMouseLeave={() => { }}>
                    <a target="__blank" href="https://www.linkedin.com/in/maxcereceda/">
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className="li__github" onMouseEnter={playSound} onMouseLeave={() => { }}>
                    <a target="__blank" href="https://github.com/cereceda1991">
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className="li__email" onMouseEnter={playSound} onMouseLeave={() => { }}>
                    <a target="__blank" href="mailto:cereceda1991@gmail.com">
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className="li__cv" onMouseEnter={playSound} onMouseLeave={() => { }}>
                    <a target="__blank" href={CV}>
                        My CV  <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </aside>)
}

export default SideBar