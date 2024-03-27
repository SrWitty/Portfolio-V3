import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-a49df0 shadow-lg">
            <div className="container">
                <a className="navbar-brand animated-item" href="/">iim7md11</a>
                <button className={`navbar-toggler ${isMenuOpen ? 'collapsed' : ''}`} type="button" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link h4 animated-item" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link h4 animated-item" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link h4 animated-item" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link h4 animated-item" href="#blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link h4 animated-item" href="#social">Social Media</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
