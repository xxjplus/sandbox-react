import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { path: '/', label: '首页' },
        { path: '/game', label: '休息一下' },
        { path: '/photoWall', label: '有趣的灵魂' },
        // { path: '/contact', label: '联系我们' },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <NavLink to="/">ReactPages</NavLink>
                </div>

                <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>

                <button className="navbar-toggle" onClick={toggleMenu}>
                    <span className="toggle-icon">{isOpen ? '✕' : '☰'}</span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;