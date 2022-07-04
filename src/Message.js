import React, { useEffect, useState } from 'react';

export default function Message({ isUserLoggedIn }) {

  const sayGoodBy= ()=>{
    console.log('Bye')
  }
  useEffect(() =>{
   isUserLoggedIn && console.log('user is logged in')
    return sayGoodBy()
  }, [])



  return <h1>User is logged in</h1>;
}
