import React from 'react'
import Feed from './Feed/Feed'
import "./Home.css"
import Rightbar from './Rightbar/Rightbar'
import Sidebar from './Sidebar/Sidebar'
import Topbar from './Topbar/Topbar'

const Home = () => {
  return (
    <>
    <div className="homeDiv">
        <Topbar></Topbar>
        <div className="homeContainer">
            <Sidebar></Sidebar>
            <Feed></Feed>
            <Rightbar></Rightbar>
        </div>
    </div>
    </>
  )
}

export default Home
