import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">ShopLogo</Link>
            </div>
            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                <Link to="/">Home</Link>
                <div className="dropdown">
                    <button className="dropbtn">Categories</button>
                    <div className="dropdown-content">
                        <Link to="/category/electronics">Electronics</Link>
                        <Link to="/category/clothing">Clothing</Link>
                        <Link to="/category/accessories">Accessories</Link>
                    </div>
                </div>
                <Link to="/cart">Cart</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </nav>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
        </header>
    );
};

export default Header;
