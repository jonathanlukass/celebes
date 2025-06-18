import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Products from './components/Products';

import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Products />
      <Contact />
    </div>
  );
}

export default App;