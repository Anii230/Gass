import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = '';

        if (!name.trim() || !password.trim()) {
            newErrors = "All fields are required";
        } else if (!name.trim()) {
            newErrors = "Full Name is required";
        } else if (!password.trim()) {
            newErrors = "Password is required";
        } else if (password.length < 7) {
            newErrors = "Password must be at least 7 characters";
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
                <form onSubmit={handleSubmit}>
                    <section className="txt">
                        <h2>Login</h2>
                        <div className="signup-container">
                            <p>Don't have an account?<Link to="/Signup"><button type="button">Get Started</button></Link></p>
                        </div>
                    </section>



                    <div className="input-container name">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="input-container password">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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

            <div className="right">
                <section className="txt">
                    <h2>Gather Amplify Share Socialize</h2>
                    <p>Gather ideas, Amplify voices, and Share your story—where every moment finds its place, and socializing becomes a vibrant connection. Welcome to a community built for you.</p>
                </section>
            </div>
        </div>
    );
};

export default Login;
