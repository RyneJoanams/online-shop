import React from 'react';
import { Link } from 'react-router-dom'; // Adjust the import based on your routing library

const Footer = () => (
    <footer className="footer">
        <p>&copy; 2024 Online Shop</p>
        <Link to="/" className="home-link">Back to Home</Link>
    </footer>
);

export default Footer;
