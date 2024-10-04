import React from 'react'
import "./Profile.css"

const Profile = () => {
    const user = {
        username: 'johndoe',
        avatar: 'https://via.placeholder.com/150',
        bio: 'Just another social media enthusiast! Sharing thoughts and experiences.',
        tags: ['#SocialMedia', '#React', '#Coding'],
        socialLinks: [
            { platform: 'Twitter', url: 'https://twitter.com/johndoe' },
            { platform: 'Instagram', url: 'https://instagram.com/johndoe' },
            { platform: 'LinkedIn', url: 'https://linkedin.com/in/johndoe' },
        ],
    };
    return (
        <>
            <div className="profile-page">
                <div className="left-section">
                    <img src={user.avatar} alt={`${user.username}'s avatar`} className="avatar" />
                    <h1 className="username">@{user.username}</h1>
                    <p className="bio">{user.bio}</p>
                    <div className="tags">
                        {user.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                    <div className="social-links">
                        {user.socialLinks.map((link, index) => (
                            <a key={index} href={link.url} className="social-link" target="_blank" rel="noopener noreferrer">
                                {link.platform}
                            </a>
                        ))}
                    </div>
                    <div className="button-group">
                        <div className="row">
                            <button className="edit-button">Edit Profile</button>
                            <button className="account-button">Account</button>
                        </div>
                        <div className="row">
                            <button className="message-button">Message</button>
                            <button className="share-button">Share</button>
                        </div>
                        <div className="row">
                            <button className="settings-button">Settings</button>
                        </div>
                    </div>
                </div>
                <div className="right-section">
                    <h2>Posts</h2>
                    <div className="posts-container">
                        {/* No posts currently, so this area is empty */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
