import { Label, PermMedia } from "@mui/icons-material";
import React, { useState } from "react";
import "./Share.css";

export default function Share() {
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]); // Sets the selected image file
    };

    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent form from submitting (default behavior)

        // Get the current user from localStorage
        const currentUser = JSON.parse(localStorage.getItem("user"));
        if (!currentUser || !currentUser.id) {
            console.error("No user found or user ID is missing.");
            return;  // Stop submission if user data is invalid
        }

        const formData = new FormData();
        formData.append("desc", desc);
        formData.append("userid", currentUser.id); // Ensure we are passing a valid user ID
        if (file) formData.append("img", file); // Append the file if it exists

        try {
            const response = await fetch("http://localhost:8800/server/posts/create", {
                method: "POST",
                body: formData,
                credentials: "include", // To handle cookies
            });

            const data = await response.json();
            if (response.ok) {
                console.log("Post created successfully:", data);
                setDesc("");
                setFile(null);
            } else {
                console.error("Error creating post:", data);
            }
        } catch (err) {
            console.error("Error submitting post:", err);
        }
    };

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="/assets/person/6.jpeg" alt="" />
                    <input
                        placeholder="What's on your mind?"
                        className="shareInput"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)} // Updates description as the user types
                    />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo</span>
                            <input
                                type="file"
                                id="file"
                                accept=".png, .jpg, .jpeg"
                                style={{ display: "none" }}
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <button type="submit" className="shareButton">
                            Share
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
