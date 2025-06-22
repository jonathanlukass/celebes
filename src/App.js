import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Map from './components/Map';

function App() {
  return (
    <div className="App scroll-smooth">
      <Header />
      <About />
      <AboutUs />
      <Products />
      {/* <Map /> */}
      <Contact />
      <WhatsAppButton />
    </div>
  );
}

export default App;