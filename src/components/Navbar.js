import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you'll use React Router for navigation
import './Navbar.css';
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/signin">Sign In</Link></li>
                {/* Add more navigation links as needed */}
            </ul>
        </nav>
    );
};

export default Navbar;
