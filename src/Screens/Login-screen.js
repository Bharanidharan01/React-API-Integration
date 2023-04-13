import React, { useState } from 'react';
import './LoginScreen.css';
import './twitcss.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTwitter, FaGoogle, FaApple, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>




const LoginScreen = () => {
   
    /* //second commit */
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
 

    const authenticateUser = (username, password) => {
        localStorage.getItem("Username");
        localStorage.getItem("Password");
    
        return axios.post('http://172.105.58.224:3582/auth/login', {
            username: username,
            password: password
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        authenticateUser(username, password)
       
            .then(response => {
                localStorage.setItem("Username", username);
                localStorage.setItem("Password", password);
             
              navigate("/home")
            })
            .catch(error => {
                alert('Invalid Username or Password');
            });
    }

    return (
        <>
            {/* {getName && getPassword ? (navigate('/home')) : ( */}
            <main>

                <div className="submain">
                    <div className="innerdiv">
                        <div className="headerdiv"><button id="close" style={{ fontFamily: "monospace" }}><FaTimes /></button>
                            <FaTwitter id="twitter" />
                        </div>
                        <div>
                            <form onSubmit={handleSubmit} >
                                <h1 style={{ fontSize: "31px" }}> Sign in to Twitter</h1>
                                <button className="imp" > <FaGoogle className="google" /> Sign in with Google</button>
                                <br />
                                <button className="imp" style={{ fontWeight: "bold" }}><FaApple className="apple" /> Sign in with
                                    Apple</button>
                                <br />
                                <p className="or" style={{ fontFamily: "Arial,Helvetica,sans-serif", fontSize: "small" }}> or </p>
                                <input type="text" className="input" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                                    placeholder="Phone,email address, or username" value={username}
                                    onChange={(e) => setUsername(e.target.value)} />
                                <br />
                                <input type="password" className="input" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                                    placeholder="Enter your Password" value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                                <br />

                                {/* <span id="props-msg">
                                        <br />{message}
                                        <br /></span> */}


                                <button type='submit' id="dark" onClick={handleSubmit} >Next</button><br />
                            </form>

                            <button className="imp" style={{ fontWeight: "bold" }}>Forgot Password?</button>
                            <br />
                            <p className="text" style={{ fontFamily: "sans-serif", fontSize: "15px" }}>Don't have an account?<a id="signup" href="#0">Sign
                                up</a>
                            </p>

                        </div>
                    </div>
                </div>
            </main>
            {/* ) */}
            {/* } */}
        </>
    );
}
export default LoginScreen;