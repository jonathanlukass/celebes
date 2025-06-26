import React from 'react';
import './App.css';
// import Header from './components/Header';
import About from './components/About';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Map from './components/Map';
// import OurJourney from './components/OurJourney';
import Header from './components/Header';

function App() {
  return (
    <div className="App scroll-smooth">
      <Header />
      <About />
      <AboutUs />
      {/* <OurJourney /> */}
      <Products />

      <WhatsAppButton />
      <Map />
      <Contact />
    </div>
  );
}

export default App;
