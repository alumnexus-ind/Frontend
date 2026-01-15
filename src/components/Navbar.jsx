import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import '../App.css'; // We'll add styles there

function Navbar() {
    const { isAuthenticated, login, logout } = useAuth();
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="navbar">
            <div className="logo">LMS Platform</div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/courses">Courses</Link>
                {isAuthenticated ? (
                    <>
                        <Link to="/dashboard">Dashboard</Link>
                        <button onClick={logout} className="btn-logout">Logout</button>
                    </>
                ) : (
                    <button onClick={() => login('demo@example.com', 'password')} className="btn-login">Login (Demo)</button>
                )}
                <button onClick={toggleTheme} className="btn-theme-toggle" aria-label="Toggle Theme">
                    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
