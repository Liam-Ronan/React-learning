import React from 'react'
import { useState } from 'react';


const MultipleForm = () => {

  const [form, setForm] = useState({
    checkbox: true
  })

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    console.log(`Input name ${name}. Value ${value}`);

    setForm((prevState) => {
        return {
            ...prevState,
            [name]: value
        }
    })

  }

  return (
    <>
        <form action="">
            <label>
                Email:
            </label>
            <input type="text" 
                   name='email' 
                   value={form.email}
                   onChange={handleInputChange}/>
            <label>
                Password:
            </label>
            <input type="text" 
                   name='password' 
                   value={form.password}
                   onChange={handleInputChange}/>
            <label>
                I wish to receive your newsletter
            </label>
            <input type="checkbox"
                   name='checkbox' 
                   checked={form.checkbox}
                   onChange={handleInputChange}/>
        </form>
    </>
  )
}

export default MultipleForm;
