// LandingPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="box">
        <h1 className="title">Wattpad</h1>
        <p>Your One-Stop Destination for Discovering Novels</p>
      </header>
      <main>
        <div className="features">
          <div className="feature">
            <Link to="/novelForm">
              <i className="fas fa-pencil-alt"></i>
              <h3>Post Your Novel</h3>
            </Link>
            <p>Share your creativity and publish your own novel for others to read.</p>
          </div>
          <div className="feature">
            <Link to="/explore">
            <i className="fas fa-book-open"></i>
            <h3>Discover New Novels</h3>
            </Link>
            <p>Explore a wide range of genres and discover captivating novels.</p>
          </div>
          <div className="feature">
            <i className="fas fa-star"></i>
            <Link to="/aboutUs">
            <h3>Community Guidelines</h3>
            </Link>
            <p>The best rules to follow are those made up by yourself.</p>
          </div>
        </div>
      </main>
      <footer>
        <p>&copy; 2023 Wattpad. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
