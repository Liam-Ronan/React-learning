import React from 'react'
import { useState } from 'react';

const ActivityForm = () => {

  const [form, setForm] = useState({
    checkbox: true
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setForm((prevState) => {
        return {
            ...prevState,
            [name]: value
        }
    })
  }

  return (
    <>
    <form>
        <label>
            Username:
        </label>
        <input type="text" 
               name='username' 
               value={form.username}
               onChange={handleChange}/>
        <label>
            Email:
        </label>
        <input type="text" 
               name='email' 
               value={form.email}
               onChange={handleChange}/>
        <label>
            Number of Months:
        </label>
        <input type="number" 
               name="number"
               value={form.number}
               onChange={handleChange}/>
        <label>
            Insurance:
        </label>
        <input type="checkbox"
               name='checkbox' 
               checked={form.checkbox}
               onChange={handleChange}/>
    </form>
    <p>
        Hi, {form.username} You have selected a {form.number} months contract {form.checkbox ? 'with' : 'without'} insurance
    </p>
    </>
  )
}

export default ActivityForm;
