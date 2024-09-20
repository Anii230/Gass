import React from 'react'
import Topbar from './Topbar/Topbar'
import Sidebar from './Sidebar/Sidebar'
import Feed from './Feed/Feed'
import Rightbar from './Rightbar/Rightbar'
import "./Home.css"

const Home = () => {
  return (
    <>
    <Topbar></Topbar>
    <div className="homeContainer">
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Rightbar></Rightbar>
    </div>
    </>
  )
}

export default Home
