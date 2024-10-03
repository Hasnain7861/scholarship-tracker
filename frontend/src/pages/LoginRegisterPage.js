import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginRegisterPage.css';

const LoginRegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(true); // Toggle between login and register
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isRegister ? 'register' : 'login';
    try {
      const res = await fetch(`http://localhost:5000/api/users/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        alert(data.message);
        navigate('/userDashboard'); // Redirect to user dashboard
      } else {
        alert(data.error);
      }
    } catch (err) {
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-register-page">
      <div className="login-register-container">
        <h1 className="login-register-title">
          {isRegister ? 'Register' : 'Login'}
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
        </form>
        <button
          className="toggle-button"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister
            ? 'Already have an account? Login'
            : 'New user? Register'}
        </button>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
