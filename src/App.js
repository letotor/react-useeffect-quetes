import React, { useEffect, useState } from 'react';
import Message from './Message';
import './style.css';

const   App = ()  =>{
  const [email, setEmail] = useState('')
  const [isUserLoggedIn, SetIsUserLoggedIn] = useState(false)


  useEffect(()=>{
    // console.log("email has changed",email)
  }, [email])

  // useEffect(() => {
  //   isUserLoggedIn ? console.log("user is logged in") : console.log("user is not loggin")

  // }, [ isUserLoggedIn])

  const handleSubmit = e => {
    e.preventDefault();
    console.log('email submit',email)
    SetIsUserLoggedIn(true)
  };


  const handleChange = e => {
    setEmail(e.target.value)

  };


  const hadnleClick = ()=>{
    SetIsUserLoggedIn(false)

  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email : </label>
        <input disabled={isUserLoggedIn} type="text" placeholder="elon@spacex.com" onChange={(e)=>handleChange(e)} />
        <input disabled={isUserLoggedIn} type="submit" value="submit" />
      </form>
    
    
      {isUserLoggedIn ? 
      <>
        <Message isUserLoggedIn={isUserLoggedIn}/> <button onClick={hadnleClick}>Lougout</button>
      </>:""}
    </div>
  );
}

export default App;

