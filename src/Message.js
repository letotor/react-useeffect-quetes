import React, { useEffect, useState } from 'react';

export default function Message() {

  const sayGoodBye= ()=>{
    console.log('Bye')
  }

  
  useEffect(() =>{
  console.log('user is logged in')
    return sayGoodBye
  }, [])



  return <h1>User is logged in</h1>;
}
