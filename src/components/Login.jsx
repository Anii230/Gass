import React from 'react'
import './Auth.css'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const Login = () => {
  return (
    <>
        <div className="container">
        <div className="forms-container">
            <div className="signin-signup">
                <form action="#" className="sign-in-form">
                    <h2 className="title">Login</h2>
                    <div className="input-field">
                       <i className="faUser"></i>
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-envelope"></i>
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" />
                    </div>
                    <input type="submit" value="Login" className="btn solid" />
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
