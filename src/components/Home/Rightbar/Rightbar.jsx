import React from 'react';
import "./Rightbar.css";
import { Users } from "../../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

const Rightbar = () => {
    return (
        <div class="suggested-feed">
            <div class="title">Suggested for You</div>
            <div class="row">
                <div class="person-card">
                    <img src="assets/person/1.jpeg" alt="Person 1" />
                    <div class="person-name">Person 1</div>
                </div>
                <div class="person-card">
                    <img src="assets/person/2.jpeg" alt="Person 2" />
                    <div class="person-name">Harshil Amin</div>
                </div>
                <div class="person-card">
                    <img src="assets/person/3.jpeg" alt="Person 3" />
                    <div class="person-name">Person 3</div>
                </div>
            </div>

            <div class="row">
                <div class="person-card">
                    <img src="assets/person/4.jpeg" alt="Person 4" />
                    <div class="person-name">Person 4</div>
                </div>
                <div class="person-card">
                    <img src="assets/person/5.jpeg"alt="Person 5" />
                    <div class="person-name">Person 5</div>
                </div>
                <div class="person-card">
                    <img src="assets/person/6.jpeg"alt="Person 6" />
                    <div class="person-name">Person 6</div>
                </div>
            </div>
        </div>
    );
}

export default Rightbar;
