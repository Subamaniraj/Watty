import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Perform validation here (e.g., check against a database)
    if (username === 'admin' && password === 'password') {
      // Successful login, navigate to the landing page
      navigate('/landing');
    } else {
      // Invalid credentials, display an error message
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <form className="form-box">
          <input className="input-login"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="input-login"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Log in</button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
