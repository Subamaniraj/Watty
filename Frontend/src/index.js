import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import Home from './home';
import LoginPage from './LoginPage';
import HomePage from './LandingPage';
import LandingPage from './LandingPage';
import NovelForm from './NovelForm';
import EditOrDelete from './EditOrDelete';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
