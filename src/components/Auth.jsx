import React from 'react'
import './Auth.css'

const Auth = () => {
    return(
        <>
        <div className="auth-container">
            <div className="forms-container">
                <div className="login-signup">
                    <form action="" className="signin-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <input type="text" placeholder='username' />
                        </div>
                        <div className="input-field">
                            <input type="password" placeholder='password' />
                        </div>
                        <input type="submit" value="Login" className='sub-btn' />

                        <p className="for-pass"><a href="#">Forgot Password?</a></p>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Auth
