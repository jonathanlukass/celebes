import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Products from './components/Products';
import Teams from './components/Teams';
import News from './components/News';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Products />
      <Teams />
      <News />
      <Contact />
    </div>
  );
}

export default App;