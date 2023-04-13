import React, { useState } from 'react';
import './Screen.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaFeather, FaTrash, FaUserCircle } from 'react-icons/fa';
import axios from 'axios';
import { useEffect } from 'react';
import LoginScreen from '../Login-screen';



const Screen = () => {

    // const VITE_SITE_NAME = 'Twitter-clone';
    const [tweets, setTweets] = useState([])
    const [txt, setTxt] = useState('')
    const navigate = useNavigate();

    const VITE_USERNAME = localStorage.getItem('Username');
    const VITE_PASSWORD = localStorage.getItem('Password');
    const fetchPosts = () => {
        axios.get('http://172.105.58.224:3582/tweet/my-all', { auth: { username: `${VITE_USERNAME}`, password: `${VITE_PASSWORD}` } })
            .then(function (response) {
                // handle success
                console.log(response);
                setTweets(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    const handleChange = (e) => {
        setTxt(e.target.value)

    }
    const handlePost = () => {
        axios.post('http://172.105.58.224:3582/tweet/new',
            {
                tweet: txt
            },
            { auth: { username: `${VITE_USERNAME}`, password: `${VITE_PASSWORD}` } }

        ).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })

    }

    const deletePost = (id) => {
        axios.delete(`http://172.105.58.224:3582/tweet/${id}`, { auth: { username: `${VITE_USERNAME}`, password: `${VITE_PASSWORD}` } }

        ).then((response) => {
            console.log(response)
            fetchPosts()
        }).catch((error) => {
            console.log(error)
        })
    }
    const logout = () => {
         localStorage.clear();
        navigate('/login-page');

    }
    return (
        <>{(localStorage.getItem('Username')&&localStorage.getItem('Password'))?(
            <div id="main">
                {/*  <div className="top-div"></div> */}
                <div className='middle-div'>
                    <div className='left-div'>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                    <div className='mid-div'>
                        <div style={{ position: "relative" }}>
                            <div style={{ display: 'flex', gap: '500px' }}> <span>Home</span> <button type="button" className="btn btn-success" onClick={logout}>Logout</button></div>
                            <div id='home-btn' >
                                <ul className='navbar'>
                                    <li id='active-tab' ><Link to='/home' >My Tweets</Link></li>
                                    <li><Link to='/following'>All Tweets</Link></li>

                                </ul>
                            </div>
                            <div id="my-tweets">
                                {/* {JSON.stringify(tweets)} */}
                                {tweets.map((_tweet) => {
                                    return (
                                        <div style={{ display: 'flex', gap: '100px' }} >
                                            <div> <div key={_tweet.id} style={{ borderBottom: '1px solid #dfcfcf', margin: '1rem', width: '420px', height: 'auto' }} >
                                                <span style={{ fontSize: "30px" }}><FaUserCircle /></span> <span style={{ fontWeight: "bold" }}>{_tweet.author.username}</span>
                                                <p style={{ margin: "5px", color: 'grey' }}>{_tweet.tweet}</p></div></div>
                                            <a href='#0' id='trash-icon' onClick={() => deletePost(_tweet.id)}><FaTrash /></a>
                                        </div>
                                    )
                                })}
                            </div>


                        </div>
                        <div className='input-div' style={{ display: "flex", gap: "92px", width: "634px", height: "60px" }} >
                            <ul>
                                <li>
                                    <input type='text' placeholder='Tweet Something..' id="input-field" value={txt} onChange={handleChange} >
                                    </input>
                                </li>
                            </ul>
                            <a href='#0' id='tweet' onClick={handlePost}><FaFeather fontSize={'20px'} /></a>
                        </div>
                    </div>
                    <div className='right-div'></div>
                </div>
                {/*   <div className='bottom-div'></div> */}
            </div>):(<LoginScreen/>)
}</>
    )
}

export default Screen;
