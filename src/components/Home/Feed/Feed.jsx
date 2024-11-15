import React from 'react';
import { Posts } from "../../../dummyData";
import Post from "../Post/Post";
import Share from "../Share/Share";
import "./Feed.css";

export default function Feed() {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    // const { currentUser } = useContext(AuthContext);
    console.log(currentUser);


    return (
        <div className="feed">
            <div className="feedWrapper">
                <div>
                    <h1>Welcome, {currentUser?.username}!</h1><br />
                    {/* <p>Your email: {currentUser?.email}</p>
                    <p>Your full name: {currentUser?.name}</p> */}
                </div>
                <Share />
                {Posts.map((p) => (
                    <Post key={p.id} post={p} />
                ))}
            </div>
        </div>
    );
}
