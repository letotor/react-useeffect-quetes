import React, { useEffect, useState } from 'react';
import Message from './Message';
import './style.css';

const   App = ()  =>{
  const [email, setEmail] = useState('')
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)


  useEffect(()=>{
   console.log("email has changed",email)
  }, [email])

  // useEffect(() => {
  //   isUserLoggedIn ? console.log("user is logged in") : console.log("user is not loggin")

  // }, [ isUserLoggedIn])

  const handleSubmit = e => {
    e.preventDefault();
    setIsUserLoggedIn(true)
    console.log('email submit',email)
  };


  const handleChange = e => {
    setEmail(e.target.value)

  };


  const handleClick = (e)=>{
    setIsUserLoggedIn(false)

  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email : </label>
        <input disabled={isUserLoggedIn} type="text" placeholder="elon@spacex.com" onChange={(e)=>handleChange(e)} />
        <input disabled={isUserLoggedIn} type="submit" value="submit" />
      </form>
    
    
      {isUserLoggedIn && 
      <>
          <button onClick={(e) => handleClick(e)}>Lougout</button>
        <Message/> 
      </>}
    </div>
  );
}

export default App;

