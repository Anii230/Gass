import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../context/authContext';
import "./Login.css";

const Login = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });
    const [err, setErr] = useState(null);

    // const navigate = useNavigate()

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const { login } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login(inputs);
            console.log("Login Response:", response); // Log the response to check
        } catch (err) {
            if (err.response) {
                setErr(err.response.data);
                console.log("Error Response:", err.response); // Log the error response
            } else {
                setErr("An unexpected error occurred.");
                console.log("Error:", err); // Log error if there's no response
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
                            <p>Don't have an account?<Link to="/Signup"><button type="button">Get Started</button></Link></p>
                        </div>
                    </section>



                    <div className="input-container name">
                        <label htmlFor="name">Full Name</label>
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

                    <button style={{ cursor: 'pointer' }} className="sign-btn" onClick={handleLogin}>Proceed</button>
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
                    <p>Gather ideas, Amplify voices, and Share your story—where every moment finds its place, and socializing becomes a vibrant connection. Welcome to a community built for you.</p>
                </section>
            </div>
        </div>
    );
};

export default Login;
