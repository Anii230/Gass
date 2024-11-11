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
                        <span className='sidebarListItemText'>Home</span>
                    </li>

                    <li className="sidebarListItem">
                        <Chat className='sidebarIcon' />
                        <span className='sidebarListItemText'>Chat</span>
                    </li>

                    <li className="sidebarListItem">
                        <PlayCircle className='sidebarIcon' />
                        <span className='sidebarListItemText'>Explore</span>
                    </li>


                    <li className="sidebarListItem">
                        <AccountCircle className='sidebarIcon' />
                        <span className='sidebarListItemText'>Account</span>
                    </li>

                </ul>
               
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
