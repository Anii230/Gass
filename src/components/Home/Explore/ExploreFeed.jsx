import React from 'react'
import { Posts } from '../../dummyData'
import Post from '../Post/Post'
import './Explore.css'

const ExploreFeed = () => {
    return (
        <div className="exploreFeed">
            {Posts.map((p) => (
                    <Post key={p.id} post={p} />
                ))}
        </div>
    )
}

export default ExploreFeed
