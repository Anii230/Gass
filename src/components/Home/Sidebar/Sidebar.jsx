import React from 'react'
import "./Sidebar.css"
import {
    RssFeed,
    Chat,
    PlayCircle,
    Bookmark,
    Policy,
    AccountCircle,
    Settings,
} from "@mui/icons-material"

import { Users } from "../../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className='sidebarIcon' />
                        <span className='sidebarListItemText'>Feed</span>
                    </li>

                    <li className="sidebarListItem">
                        <Chat className='sidebarIcon' />
                        <span className='sidebarListItemText'>Chat</span>
                    </li>

                    <li className="sidebarListItem">
                        <PlayCircle className='sidebarIcon' />
                        <span className='sidebarListItemText'>Videos</span>
                    </li>

                    <li className="sidebarListItem">
                        <Bookmark className='sidebarIcon' />
                        <span className='sidebarListItemText'>Bookmarks</span>
                    </li>

                    <li className="sidebarListItem">
                        <Policy className='sidebarIcon' />
                        <span className='sidebarListItemText'>Privacy Policy</span>
                    </li>

                    <li className="sidebarListItem">
                        <AccountCircle className='sidebarIcon' />
                        <span className='sidebarListItemText'>Account</span>
                    </li>

                    <li className="sidebarListItem">
                        <Settings className='sidebarIcon' />
                        <span className='sidebarListItemText'>Settings</span>
                    </li>
                </ul>
                <button className="sidebarBtn">Show More</button>
                <hr className='sidebarHr' />
                <ul className="sidebarFriendList">
                    {Users.map((u) => (
                        <CloseFriend key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
