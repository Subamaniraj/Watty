// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import LandingPage from './LandingPage';
import NovelForm from './NovelForm';
import EditOrDelete from './EditOrDelete';
import About from './CommunityGuidelines';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element=<LoginPage/> />
        <Route path="/landing" element=<LandingPage/> />
        <Route path="/novelForm" element=<NovelForm/> />
        <Route path="/explore" element=<EditOrDelete/> />
        <Route path="/aboutUs" element=<About/> />
      </Routes>
    </Router>
  );
};

export default App;
