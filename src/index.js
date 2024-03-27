import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';

// Function to apply fadeIn animation when the website opens
function fadeInWebsite() {
  const rootElement = document.getElementById('root');
  rootElement.classList.add('fadeIn');
}

// Render the React app
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Apply fadeIn animation when the DOM content is loaded
document.addEventListener('DOMContentLoaded', fadeInWebsite);
