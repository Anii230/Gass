import React, { useEffect, useState } from 'react';
import Topbar from '../Topbar/Topbar';
import './Settings.css';

const Settings = () => {
    // State to manage form inputs
    const [userData, setUserData] = useState({
        name: '',
        username: '',
        city: '',
        gmail: '',  // Ensure email is part of user data
        bio: ''
    });

    // State to handle loading state and errors
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch user data from localStorage when the component mounts
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUserData({
                name: user.name || '',
                username: user.username || '',
                city: user.city || '',
                gmail: user.gmail || '',  // Ensure email is fetched from localStorage
                bio: user.bio || ''
            });
        } else {
            setError('No user data found in localStorage.');
        }
    }, []);

    // Handle input changes (but only update the state on form submit)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle form submission (update localStorage only when the button is clicked)
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');  // Clear any previous errors

        try {
            // Update localStorage with the new user data
            localStorage.setItem('user', JSON.stringify(userData));
            console.log('Profile updated successfully!');
            alert('Profile updated successfully!');
        } catch (err) {
            setError('Failed to update profile. Please try again.');
            console.error('Error updating profile:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="settingDiv">
                <Topbar />
                <div className="SettingContainer">
                    <div className="settingOptions">
                        <h2>Update Your Profile</h2>

                        {/* Show error message if there is any */}
                        {error && <div className="error">{error}</div>}

                        {/* Display user info (email should be displayed properly now) */}
                        <div className="userInfo">
                            <p><strong>Name:</strong> {userData.name}</p>
                            <p><strong>Username:</strong> {userData.username}</p>
                            <p><strong>Email:</strong> {userData.gmail}</p> {/* Display email properly */}
                            <p><strong>Bio:</strong> {userData.bio}</p>
                            <p><strong>City:</strong> {userData.city}</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="formGroup">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={userData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div className="formGroup">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={userData.username}
                                    onChange={handleChange}
                                    placeholder="Enter your username"
                                    required
                                />
                            </div>

                            <div className="formGroup">
                                <label htmlFor="bio">Bio</label>
                                <textarea
                                    id="bio"
                                    name="bio"
                                    value={userData.bio}
                                    onChange={handleChange}
                                    placeholder="Tell us about yourself"
                                    required
                                ></textarea>
                            </div>

                            <div className="formGroup">
                                <label htmlFor="city">City</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={userData.city}
                                    onChange={handleChange}
                                    placeholder="Enter your city"
                                    required
                                />
                            </div>

                            {/* Submit button */}
                            <button type="submit" className="updateButton" disabled={loading}>
                                {loading ? 'Updating...' : 'Update Profile'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Settings;
