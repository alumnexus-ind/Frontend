import React from 'react';
import { useAuth } from '../context/AuthContext';

const Home = () => {
    const { user } = useAuth();

    return (
        <div className="home-content">
            <h1>Welcome to the LMS</h1>
            {user ? (
                <p>Welcome back, {user.name}!</p>
            ) : (
                <p>Please Login to view your dashboard.</p>
            )}
        </div>
    );
};

export default Home;
