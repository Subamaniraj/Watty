import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
    } else {
      // Handle login logic here
      console.log('Email:', email);
      console.log('Password:', password);
      setError('');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Novel Uploading Site</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
