import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Implement search functionality here
        console.log('Search for:', searchTerm);
    };

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Online Shop</Link>
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
                <form className="search-form" onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button type="submit">🔍</button>
                </form>
            </nav>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
        </header>
    );
};

export default Header;
