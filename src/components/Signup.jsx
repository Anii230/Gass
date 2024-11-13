import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Signup.css";

const Signup = () => {

    const [inputs, setInputs] = useState({
        username:"",
        email:"",
        password:"",
        name:"",
    })

    const [err, setErr] = useState(null)

    const handleChange = (e) => {
        setInputs(prev=>({...prev, [e.target.name]:e.target.value}));
    }

    const handleClick = async (e)=> {
        e.preventDefault();

        if (inputs.username.length <= 4) {
            setErr("Username should be more than 4 characters.");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(inputs.email)) {
            setErr("Please enter a valid email address.");
            return;
        }
        if (inputs.password.length <= 5) {
            setErr("Password must be more than 5 characters.");
            return;
        }
        if (inputs.name.trim() === "") {
            setErr("Name cannot be empty.");
            return;
        }


        try{
            await axios.post("http://localhost:8800/server/auth/register", inputs)
        }catch(err){
            setErr(err.response.data)
        }
    }

    console.log(err)

    return (
        <div className="splt-scrn">
            <div className="left">
                <section className="txt">
                    <h1>Seamless Journey one click away</h1>
                    <p>"City of Dreams, Rides of Reality: Your Mumbai Cab Adventure Begins!"</p>
                </section>
            </div>

            <div className="right">
                <form>
                    <section className="txt">
                        <h2>Sign Up</h2>
                        <div className="login-container">
                            <p>Already have an account? <Link to="/Login"><button type="button">Log In</button></Link></p>
                        </div>
                    </section>

                    <div className="input-container name">
                        <label htmlFor="username">User Name</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-container email">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-container password">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="at least 7 characters"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-container full-name">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={handleChange}
                        />
                    </div>

                    <button style={{ cursor: 'pointer' }} className="sign-btn" onClick={handleClick}>Proceed</button>
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
        </div>
    );
};

export default Signup;
