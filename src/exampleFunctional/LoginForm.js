import React from 'react'
import { useState, useEffect } from 'react';

const LoginForm = () => {

  const [username, setUsername] = useState('')

  const submitHandle = (event) => {
    event.preventDefault();
    console.log(`Login by user: ${username}`);
  }

  const handleChange = (event) => {
    setUsername(event.target.value)
  }

  return (
    <>
       <form onSubmit={submitHandle}>
            <label>
                Username:
                <input type='text' onChange={handleChange} value={username}/>
            </label>    
            <input type="submit" value="submit" />
       </form> 
       {username}
    </>
  )
}

export default LoginForm;
