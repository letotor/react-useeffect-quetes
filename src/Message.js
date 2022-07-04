import React, { useEffect, useState } from 'react';

export default function Message({ isUserLoggedIn }) {

  const sayGoodBye= ()=>{
    console.log('Bye')
  }
  useEffect(() =>{
   isUserLoggedIn && console.log('user is logged in')
    return sayGoodBye()
  }, [])



  return <h1>User is logged in</h1>;
}
