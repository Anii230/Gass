import axios from "axios"; // Ensure axios is installed to make HTTP requests
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });
    const [err, setErr] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        // Validation for username and password
        if (!inputs.username || !inputs.password) {
            setErr("Both username and password are required.");
            return;
        }

        if (inputs.username.length < 4) {
            setErr("Username must be at least 4 characters long.");
            return;
        }

        if (inputs.password.length < 6) {
            setErr("Password must be at least 6 characters long.");
            return;
        }

        try {
            // Make a POST request to the backend API to check login credentials
            const response = await axios.post("http://localhost:8800/server/auth/login", inputs);

            if (response.status === 200) {
                // Store the user data in localStorage upon successful login
                localStorage.setItem("user", JSON.stringify(response.data));
                console.log("Login successful, user data stored in localStorage.");

                // Redirect the user to the 'NewHome' page
                navigate("/NewHome");
            }
        } catch (error) {
            if (error.response) {
                setErr(error.response.data); // Show the error message from the backend
                console.log("Error Response:", error.response); // Log the error response for debugging
            } else {
                setErr("An unexpected error occurred.");
                console.log("Error:", error); // Log error if there's no response
            }
        }
    };

    return (
        <div className="splt-scrn">
            <div className="left">
                <form>
                    <section className="txt">
                        <h2>Login</h2>
                        <div className="signup-container">
                            <p>
                                Don't have an account?
                                <Link to="/Signup">
                                    <button type="button">Get Started</button>
                                </Link>
                            </p>
                        </div>
                    </section>

                    <div className="input-container name">
                        <label htmlFor="name">User Name</label>
                        <input
                            type="text"
                            name="username"
                            id="name"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-container password">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={handleChange}
                        />
                    </div>

                    <button style={{ cursor: "pointer" }} className="sign-btn" onClick={handleLogin}>
                        Proceed
                    </button>
                    <br />
                    {err && <div className="error-message">{err}</div>}
                    <section className="txt doc">
                        <p>
                            <span className="pol">
                                By continuing, you agree to accept our <br />
                                <Link to="/Privacy">Privacy Policy</Link>
                            </span>
                        </p>
                    </section>
                </form>
            </div>

            <div className="right">
                <section className="txt">
                    <h2>Gather Amplify Share Socialize</h2>
                    <p>
                        Gather ideas, Amplify voices, and Share your story—where every moment
                        finds its place, and socializing becomes a vibrant connection. Welcome to a
                        community built for you.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Login;
