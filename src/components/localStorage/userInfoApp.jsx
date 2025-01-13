import React, { useState, useEffect } from 'react';

function UserInfoApp() {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch data from the API
    const fetchUserInfo = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            const data = await response.json();
            setUserInfo(data);

            // Save the fetched data to localStorage
            localStorage.setItem('userInfo', JSON.stringify(data));
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Check if data exists in localStorage when the component mounts
    useEffect(() => {
        const savedUserInfo = localStorage.getItem('userInfo');
        if (savedUserInfo) {
            // If found in localStorage, use it directly
            setUserInfo(JSON.parse(savedUserInfo));
            setLoading(false);
        } else {
            // If not found, fetch it from the API
            fetchUserInfo();
        }
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>User Information</h1>
            <div>Name: {userInfo.name}</div>
            <div>Email: {userInfo.email}</div>
            <div>Phone: {userInfo.phone}</div>
        </div>
    );
}

export default UserInfoApp;
