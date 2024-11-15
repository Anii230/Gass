import React from 'react'
import ExploreFeed from './ExploreFeed'
import Rightbar from '../Rightbar/Rightbar'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'
import './Explore.css'

const Explore = () => {
    return (
        <>
        <div className="exploreDiv">
            <Topbar></Topbar>
            <div className="exploreContainer">
                <Sidebar></Sidebar>
                <ExploreFeed></ExploreFeed>
                <Rightbar></Rightbar>
            </div>
        </div>
        </>
    )
}

export default Explore
