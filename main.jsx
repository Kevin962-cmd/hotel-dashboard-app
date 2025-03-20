import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';  // Add this import
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>  {/* Wrap the App component with Router here */}
      <App />
    </Router>
  </StrictMode>,
);