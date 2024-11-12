import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Signup.css";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [errors, setErrors] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = '';

        if (!username.trim() || !email.trim() || !password.trim() || !fullName.trim()) {
            newErrors = "All fields are required";
        } else if (!username.trim()) {
            newErrors = "User Name is required";
        } else if (!email.trim()) {
            newErrors = "Email is required";
        } else if (!password.trim()) {
            newErrors = "Password is required";
        } else if (password.length < 7) {
            newErrors = "Password must be at least 7 characters";
        } else if (!fullName.trim()) {
            newErrors = "Full Name is required";
        }

        if (newErrors) {
            setErrors(newErrors);
        } else {
            console.log("Form Submitted Successfully");
            setErrors('');
        }
    };

    return (
        <div className="splt-scrn">
            <div className="left">
                <section className="txt">
                    <h1>Seamless Journey one click away</h1>
                    <p>"City of Dreams, Rides of Reality: Your Mumbai Cab Adventure Begins!"</p>
                </section>
            </div>

            <div className="right">
                <form onSubmit={handleSubmit}>
                    <section className="txt">
                        <h2>Sign Up</h2>
                        <div className="login-container">
                            <p>Already have an account? <Link to="/Login"><button type="button">Log In</button></Link></p>
                        </div>
                    </section>


                    <div className="input-container name">
                        <label htmlFor="name">User Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="input-container email">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input-container password">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="at least 7 characters"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="input-container full-name">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>

                    <button style={{ cursor: 'pointer' }} className="sign-btn" type="submit">Proceed</button>
                    <br />
                    {errors && <div className="error-message">{errors}</div>}

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
        </div>
    );
};

export default Signup;
