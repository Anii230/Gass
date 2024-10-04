import React, { useEffect, useState } from 'react';
import "./LoginSignup.css";

const LoginSignup = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        age: '',
        phone: '',
    });
    const [error, setError] = useState('');

    const toggle = () => {
        setIsSignIn((prev) => !prev);
        setError(''); // Reset errors when toggling
    };

    useEffect(() => {
        const container = document.getElementById('container');
        if (isSignIn) {
            container.classList.remove('sign-up');
            container.classList.add('sign-in');
        } else {
            container.classList.remove('sign-in');
            container.classList.add('sign-up');
        }
    }, [isSignIn]);

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Validate form fields before submission
    const validate = () => {
        const { username, email, password, confirmPassword, age, phone } = formData;

        if (!username || !email || !password || (isSignIn ? false : !confirmPassword) || !age || !phone) {
            setError('All fields are required!');
            return false;
        }

        if (username.length <= 5) {
            setError('Username must be more than 5 characters long!');
            return false;
        }

        if (isSignIn && password.length < 6) {
            setError('Password must be at least 6 characters long!');
            return false;
        }

        if (!isSignIn && password !== confirmPassword) {
            setError('Passwords do not match!');
            return false;
        }

        if (age <= 15) {
            setError('You must be 15 or more to register');
            return false;
        }

        if (phone.length !== 10) {
            setError('Phone number must be 10 digits long!');
            return false;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            setError('Enter a valid email address');
            return false;
        }

        setError(''); // Clear any previous errors
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Proceed with form submission (e.g., API call)
            console.log("Form Submitted:", formData);
        }
    };

    return (
        <div className="auth">
            <div id="container" className={`container ${isSignIn ? 'sign-in' : 'sign-up'}`}>
                <div className="row">
                    {/* Sign Up Section */}
                    <div className="col align-items-center flex-col sign-up">
                        <div className="form-wrapper align-items-center">
                            <div className="form sign-up" onSubmit={handleSubmit}>
                                <div className="input-group">
                                    <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
                                </div>
                                <div className="input-group">
                                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                                </div>
                                <div className="input-group">
                                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                                </div>
                                <div className="input-group">
                                    <input type="password" name="confirmPassword" placeholder="Confirm password" value={formData.confirmPassword} onChange={handleChange} />
                                </div>
                                <div className="input-group">
                                    <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
                                </div>
                                <div className="input-group">
                                    <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                                </div>
                                <div id="error" style={{ color: 'red' }}>
                                    <span>{error}</span>
                                </div>
                                <button onClick={handleSubmit}>
                                    Sign up
                                </button>
                                <p>
                                    <span>Already have an account?</span>
                                    <b onClick={toggle} className="pointer">Sign in here</b>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sign In Section */}
                    <div className="col align-items-center flex-col sign-in">
                        <div className="form-wrapper align-items-center">
                            <div className="form sign-in" onSubmit={handleSubmit}>
                                <div className="input-group">
                                    <i className='bx bxs-user'></i>
                                    <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
                                </div>
                                <div className="input-group">
                                    <i className='bx bxs-lock-alt'></i>
                                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                                </div>
                                <div id="error" style={{ color: 'red' }}>
                                    <span>{error}</span>
                                </div>
                                <button onClick={handleSubmit}>
                                    Sign in
                                </button>
                                <p>
                                    <b>Forgot password?</b>
                                </p>
                                <p>
                                    <span>Don't have an account?</span>
                                    <b onClick={toggle} className="pointer">Sign up here</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row content-row">
                    <div className="col align-items-center flex-col content-col sign-in">
                        <div className="text sign-in">
                            <h2>Welcome</h2>
                        </div>
                    </div>
                    <div className="col align-items-center flex-col content-col sign-up">
                        <div className="text sign-up">
                            <h2>Join with us</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;
