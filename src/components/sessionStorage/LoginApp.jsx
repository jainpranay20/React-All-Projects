import React, { useState, useEffect } from 'react';

function LoginApp() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    // Check if the user is already logged in using sessionStorage
    useEffect(() => {
        const sessionData = sessionStorage.getItem('isLoggedIn');
        if (sessionData === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        if (username.trim()) {
            // Save the login state to sessionStorage
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('username', username);
            setIsLoggedIn(true);
            setError('');
        } else {
            setError('Please enter a username');
        }
    };

    const handleLogout = () => {
        // Clear sessionStorage on logout
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('username');
        setIsLoggedIn(false);
    };

    if (isLoggedIn) {
        const storedUsername = sessionStorage.getItem('username');
        return (
            <div>
                <h1>Welcome, {storedUsername}!</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
    }

    return (
        <div>
            <h1>Please Log In</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                />
                <button type="submit">Login</button>
            </form>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
}

export default LoginApp;
