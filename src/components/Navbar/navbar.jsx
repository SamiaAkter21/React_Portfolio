import React from 'react';
import './navbar.css';
import logo from '../../image/logo.jpg';
import menu from '../../image/nav-menu.jpg';

const Navbar = () => {
    return (
        <nav className="navbar flex">
            <a href="#hero"><img className='logo' src={logo} alt='Logo'/></a>
            <div id="menuu" className="nav-links">
                <ul className="list">
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#">Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="btn">
                <button type="button">Resume</button>
                <button type="button">Hire me</button>
            </div>
            <a className="menubtn" href="#menuu"><img src={menu}/></a>
        </nav>
    )
}

export default Navbar

