import React, { useState } from 'react';
import './signup.css';

export default function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to server here
  };

  return (
    <form onSubmit={handleSubmit} id='mainForm'>
        <h3>Register</h3>
      <label>
        First Name:
        <input className='form1' type="text" required='required' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </label>
      <br/>
      <label>
        Last Name:
        <input  className='form1' type="text" required='required' value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      <label>
        Email:
        <input className='form1'  type="email" required='required' value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" className='form1' required='required' value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button id='butt' type="submit">Sign Up</button><br/>
      <a id="l" href=''>Sign In</a>
    </form>
  );
}