

import React, { useState } from 'react';
import './SignUp.css'; // Import your CSS file for styling
import { auth } from './firebase'; 
// import { initializeApp } from 'firebase/app';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function SignUp() {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toggleForm = () => {
    setShowLogin(!showLogin);
  };
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      if (showLogin) {
    
        await auth.signInWithEmailAndPassword(email, password);
      } else {
    
        await auth.createUserWithEmailAndPassword(email, password);
      }

      console.log('Authentication successful!');
    } catch (error) {
      console.error('Authentication failed:', error.message);
    }
  };


  return (
    <div className={`sign-up-container ${showLogin ? 'login' : 'sign-up'}`}>
      <div className="custom-text"><p>Explore the world with us! If new one here</p></div>
      <div className={`sign-up-form ${showLogin ? 'login-form' : ''}`}
      //  onMouseEnter={toggleForm}
      //  onMouseLeave={toggleForm} 
      >

        <h2>{showLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSignUp} >
          <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </div>
       
          <button type="submit">{showLogin ? 'Login' : 'Sign Up'}</button>
        </form>
      </div>
      <button className="toggle-button" 
      onClick={toggleForm}
      >
      {showLogin ? 'Switch to Sign Up' : 'Switch to Login'}
      </button>
     
    </div>
    
  );
}

export default SignUp;
