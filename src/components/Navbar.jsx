import React, { useState, useEffect } from 'react';
import playSound from '../utils/playSound';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguageData } from '../store/languageSlice';
import axios from 'axios';

const NavBar = ({ showNavbar }) => {
    const dispatch = useDispatch();
    const languageData = useSelector((state) => state.language);
    const [activeLink, setActiveLink] = useState(null);

    useEffect(() => {
        if (!languageData) {
            const url = '/src/languages/data_es.json';
            axios
                .get(url)
                .then((response) => {
                    const languageData = response.data;
                    dispatch(setLanguageData(languageData));
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [languageData, dispatch]);

    if (!languageData) {
        return <div>Cargando datos...</div>;
    }

    const { links } = languageData.navbar;

    return (
        <nav className={`menu__navbar ${showNavbar ? 'open' : ''}`}>
            <ul>
                {links.map((link, index) => (
                    <li key={index} onMouseEnter={playSound} onMouseLeave={() => { }}>
                        <Link
                            to={link.to}
                            className={activeLink === index ? 'active' : ''}
                            onClick={() => {
                                setActiveLink(index);
                            }}
                        >
                            {link.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
