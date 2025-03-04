import React from 'react'; 
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../src/frontend/main-styles/styles/App.css';
import '../src/frontend/main-styles/styles/FoodsSpace.css';
import '../src/frontend/main-styles/styles/Header.css';
import '../src/frontend/main-styles/styles/Footer.css';
import '../src/frontend/main-styles/styles/ProfileServices.css';
import '../src/frontend/main-styles/styles/AboutSpace.css';
import '../src/frontend/main-styles/styles/VideoSpace.css';
import '../src/frontend/main-styles/styles/ExperienceBlock.css';
import '../src/frontend/main-styles/styles/WeddingSpace.css';
import '../src/frontend/main-styles/styles/ProfessionalSpace.css';



import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
