import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
/* const { VITE_SITE_NAME, VITE_USERNAME, VITE_PASSWORD } = import.meta.env */


function App() {
  const VITE_SITE_NAME = 'Twitter-clone';
  const VITE_USERNAME = 'sathiya';
  
    const VITE_PASSWORD = 'sathiya#$78';
  const [tweets, setTweets] = useState([])
  console.log("VITE", VITE_SITE_NAME)

  const fetchPosts = () => {
    console.log(VITE_USERNAME);
    console.log(VITE_PASSWORD);
    axios.get('http://172.105.58.224:3582/tweet/all', { auth: { username: `${VITE_USERNAME}`, password: `${VITE_PASSWORD}` } })
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
  return (
    <div className="App">

      <h1>App name - {VITE_SITE_NAME}</h1>
      <h2>All Tweets</h2>
      {/* {JSON.stringify(tweets)} */}
      <button onClick={fetchPosts}>Refresh</button>
      {tweets.map((_tweet) => {
        return (
          <div key={_tweet.id} style={{ border: '1px solid blue', margin: '1rem' }}>
            <p>{_tweet.author.username}</p>
            <p>{_tweet.tweet}</p>

          </div>
        )
      })}
    </div>
  )
}

export default App
