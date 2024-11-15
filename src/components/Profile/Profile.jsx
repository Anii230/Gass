import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pfp from "../../assets/person/6.jpeg";
import ConfirmationModal from '../Home/ConfirmationModal/ConfirmationModal'; // Import Modal
import Sidebar from '../Home/Sidebar/Sidebar';
import Topbar from '../Home/Topbar/Topbar';
import './Profile.css';

const Profile = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        bio: '',
        profilePic: '',
        name: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const [newData, setNewData] = useState({});
    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    const navigate = useNavigate();

    // Fetch user data from localStorage
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            navigate('/'); // Redirect to home if no user in localStorage
        } else {
            setUserData({
                username: user.username,
                email: user.email,
                bio: user.bio || '',
                profilePic: user.profilePic || pfp,
                name: user.name || ''
            });
        }
    }, [navigate]);

    // Handle input changes for editing
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewData({
            ...newData,
            [name]: value
        });
    };

    // Toggle edit mode
    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    // Save profile updates to localStorage
    const handleSave = (e) => {
        e.preventDefault();
        setUserData((prevData) => {
            const updatedData = { ...prevData, ...newData };
            localStorage.setItem('user', JSON.stringify(updatedData)); // Save to localStorage
            return updatedData;
        });
        setIsEditing(false);
    };

    // Handle delete profile button click (show confirmation modal)
    const handleDeleteProfile = () => {
        setShowModal(true); // Show the confirmation modal
    };

    // Handle profile deletion
    const handleConfirmDelete = () => {
        localStorage.removeItem('user');
        alert('Profile deleted successfully!');
        navigate('/'); // Redirect to homepage after deletion
    };

    // Handle cancellation of deletion
    const handleCancelDelete = () => {
        setShowModal(false); // Close the modal without deleting the profile
    };

    return (
        <>
            <Topbar />
            <Sidebar />
            <div className="profile">
                <div className="left"></div>
                <div className="person-profile">
                    <div className="profile-container">
                        <div className="actions">
                            <button className='editBtn' onClick={toggleEdit}>
                                {isEditing ? 'Cancel' : 'Edit Profile'}
                            </button>
                            <button className='delBtn' onClick={handleDeleteProfile}>Delete Profile</button>
                        </div>

                        <div className="header">
                            <div className="profile-pic">
                                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Profile" />
                            </div>
                            <div className="profile-info">
                                <h2>{userData.username}</h2>
                                <p>.. posts &nbsp;&nbsp; .. followers &nbsp;&nbsp; .. following</p>
                                <p>{userData.name}</p>
                            </div>
                        </div>

                        <div className="tabs">
                            <div>Posts</div>
                        </div>

                        <div className="content">
                            {isEditing ? (
                                <form onSubmit={handleSave} className="profile-edit-form">
                                    <div className="profile-input">
                                        <label htmlFor="username">Username:</label>
                                        <input
                                            id="username"
                                            name="username"
                                            value={newData.username || userData.username}
                                            onChange={handleChange}
                                            placeholder="Username"
                                        />
                                    </div>
                                    <div className="profile-input">
                                        <label htmlFor="name">Full Name:</label>
                                        <input
                                            id="name"
                                            name="name"
                                            value={newData.name || userData.name}
                                            onChange={handleChange}
                                            placeholder="Full Name"
                                        />
                                    </div>
                                    <div className="profile-input">
                                        <label htmlFor="bio">Bio:</label>
                                        <textarea
                                            id="bio"
                                            name="bio"
                                            value={newData.bio || userData.bio}
                                            onChange={handleChange}
                                            placeholder="Your bio"
                                        ></textarea>
                                    </div>
                                    <button type="submit">Save Changes</button>
                                </form>
                            ) : (
                                <div className="profile-info-details">
                                    <p><strong>Username:</strong> {userData.username}</p>
                                    <p><strong>Full Name:</strong> {userData.name}</p>
                                    <p><strong>Email:</strong> {userData.email}</p>
                                    <p><strong>Bio:</strong> {userData.bio}</p>
                                </div>
                            )}
                        </div>

                        <div className="content">
                            <div className="default">
                                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Camera Icon" />
                                <h3>Share Photos</h3>
                                <p>When you share photos, they will appear on your profile.</p>
                                <a href="#">Share your first photo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Confirmation Modal */}
            <ConfirmationModal
                show={showModal}
                onConfirm={handleConfirmDelete}
                onCancel={handleCancelDelete}
            />
        </>
    );
};

export default Profile;
