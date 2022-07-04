import React, { useEffect, useState } from 'react';
import Message from './Message';
import './style.css';

const App = () => {

  const [email, setEmail] = useState('')
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  useEffect(() => {
    console.log("email has changed", email)
  }, [email])

  const handleSubmit = e => {
    e.preventDefault();
    setIsUserLoggedIn(true)
    console.log('email submit', email)
  };

  return (
    <div className="App">
      {isUserLoggedIn && <Message />}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email : </label>
        <input disabled={isUserLoggedIn} type="text" placeholder="elon@spacex.com" onChange={(e) => setEmail(e.target.value)} />
        <input disabled={isUserLoggedIn} type="submit" value="submit" />
      </form>

      {isUserLoggedIn &&
        <button onClick={(e) => setIsUserLoggedIn(false)}>Lougout</button>
      }

    </div>
  );
}

export default App;

