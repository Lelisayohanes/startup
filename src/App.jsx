// src/App.jsx
import React from 'react';
import Navbar from './Components/Navbar';
import './Style/App.css'
import Hero from './Components/Hero';
function App() {
  return (
    <div>
      
      <Navbar />
      <div style={{ paddingTop: '90px' }}>
       <Hero/> 
      </div>
     
    </div>
  );
}

export default App;
