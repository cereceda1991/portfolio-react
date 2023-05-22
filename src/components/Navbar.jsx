import React, { useState } from 'react'
import playSound from '../utils/playSound';
import { Link } from 'react-router-dom';
import './styles/Navbar.css'

const Navbar = ({ showNavbar }) => {

    const [activeLink, setActiveLink] = useState(null);

    return (
        <nav className={`menu__navbar ${showNavbar ? 'open' : ''}`}>
            <ul >
                <li onMouseEnter={playSound} onMouseLeave={() => { }}>
                    <Link
                        to="/"
                        className={activeLink === "home" ? "active" : ""}
                        onClick={() => {
                            setActiveLink("home")
                        }}
                    >
                        Home
                    </Link>
                </li>
                <li onMouseEnter={playSound} onMouseLeave={() => { }}>
                    <Link
                        to="/about"
                        className={activeLink === "about" ? "active" : ""}
                        onClick={() => {
                            setActiveLink("about")
                        }}
                    >
                        About Me
                    </Link>
                </li>
                <li onMouseEnter={playSound} onMouseLeave={() => { }}>
                    <Link
                        to="/skills"
                        className={activeLink === "skills" ? "active" : ""}
                        onClick={() => {
                            setActiveLink("skills")
                        }}
                    >
                        Skill's
                    </Link>
                </li>
                <li onMouseEnter={playSound} onMouseLeave={() => { }}>
                    <Link
                        to="/projects"
                        className={activeLink === "projects" ? "active" : ""}
                        onClick={() => {
                            setActiveLink("projects")
                        }}
                    >
                        Projects
                    </Link>
                </li>
                <li onMouseEnter={playSound} onMouseLeave={() => { }}>
                    <Link
                        to="/contact"

                        className={activeLink === "contact" ? "active" : ""}
                        onClick={() => {
                            setActiveLink("contact")
                        }}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar