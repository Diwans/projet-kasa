import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.scss'

const Header = () => {
    return (
        <header>
            <div id='logo'>
                <img src="./kasa_red.png" alt="logo" />
            </div>
            <div id='nav'>
                <ul>
                    <NavLink to="/" className='menu'>
                        <li >Accueil</li>
                    </NavLink>
                    <NavLink to="/About" className='menu'>
                        <li >A Propos</li>
                    </NavLink>
                </ul>
            </div>
        </header>
    );
};

export default Header;