import { AccountCircle, ExitToApp, PlayCircle, RssFeed, Settings } from '@mui/icons-material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Prompt the user for confirmation
        const confirmed = window.confirm("Are you sure you want to log out?");

        if (confirmed) {
            // Clear localStorage
            localStorage.clear();

            // Redirect to home page
            navigate('/');
        }
    };

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Link to="/NewHome" className="sidebarLink">
                            <RssFeed className="sidebarIcon" />
                            <span className="sidebarListItemText">Feed</span>
                        </Link>
                    </li>
{/*
                    <li className="sidebarListItem">
                        <Link to="/Friends" className="sidebarLink">
                            <Group className="sidebarIcon" />
                            <span className="sidebarListItemText">Friends</span>
                        </Link>
                    </li> */}

                    <li className="sidebarListItem">
                        <Link to="/Explore" className="sidebarLink">
                            <PlayCircle className="sidebarIcon" />
                            <span className="sidebarListItemText">Explore</span>
                        </Link>
                    </li>

                    <li className="sidebarListItem">
                        <Link to="/Profile" className="sidebarLink">
                            <AccountCircle className="sidebarIcon" />
                            <span className="sidebarListItemText">Profile</span>
                        </Link>
                    </li>

                    <li className="sidebarListItem">
                        <Link to="/Settings" className="sidebarLink">
                            <Settings className="sidebarIcon" />
                            <span className="sidebarListItemText">Settings</span>
                        </Link>
                    </li>

                    <li className="sidebarListItem" onClick={handleLogout}>
                        <div className="sidebarLink">
                            <ExitToApp className="sidebarIcon" />
                            <span className="sidebarListItemText">Logout</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
