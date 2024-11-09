// src/Components/AuthForm.jsx
import React, { useState } from 'react';
import { registerUser, loginUser } from '../utility/authService';

function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and register

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      await loginUser(email, password);
    } else {
      await registerUser(email, password);
    }
  };

  return (
    <div className='w-full h-screen flex justify-center items-center bg-black  '>
        <div className="max-w-xs mx- my-10 p-4 border rounded bg-white">
      <h2 className="text-2xl mb-4">{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your woxsen.edu.in email"
          className="w-full px-4 py-2 mb-4 border rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full px-4 py-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded"
        >
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <p className="mt-4 text-center">
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-500 ml-1 underline"
        >
          {isLogin ? 'Register' : 'Login'}
        </button>
      </p>
    </div>
    </div>
  );
}

export default AuthForm;