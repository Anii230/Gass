import React from 'react';
import './Rightbar.css';

const Rightbar = () => {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="rightbarItem">
                    <h3 className="rightbarTitle">Suggestions</h3>
                    <ul className="rightbarList">
                        <li className="rightbarListItem">John Doe</li>
                        <li className="rightbarListItem">Jane Smith</li>
                        <li className="rightbarListItem">Michael Brown</li>
                    </ul>
                </div>
                <div className="rightbarItem">
                    <h3 className="rightbarTitle">Online Friends</h3>
                    <ul className="rightbarList">
                        <li className="rightbarListItem">David Lee</li>
                        <li className="rightbarListItem">Sarah Parker</li>
                        <li className="rightbarListItem">Chris Walker</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Rightbar;
