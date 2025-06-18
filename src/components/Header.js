import React, { useState, useEffect } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll === 0) {
        setIsScrolled(false); // Transparent at top
      } else if (currentScroll > lastScroll) {
        setIsScrolled(false); // Hide on scroll down
      } else {
        setIsScrolled(true); // Show with black bg on scroll up
      }
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black' : 'bg-transparent'
      } ${isScrolled ? 'opacity-100' : 'opacity-100'}`}
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold flex items-center">
          webeksport<span className="text-orange-500 ml-1">🌱</span>
        </div>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:text-gray-300">Home</a>
          <a href="#about" className="text-white hover:text-gray-300">About</a>
          <a href="#products" className="text-white hover:text-gray-300">Products</a>
          <a href="#teams" className="text-white hover:text-gray-300">Teams</a>
          <a href="#news" className="text-white hover:text-gray-300">News</a>
          <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
          <a href="tel:+6281280080275" className="text-yellow-300 hover:text-yellow-100">+62 8128 008 0275</a>
        </nav>

        {/* Burger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-12 right-4 bg-gray-800 text-white p-4 rounded shadow-lg">
            <a href="#home" className="block py-2 hover:text-gray-300">Home</a>
            <a href="#about" className="block py-2 hover:text-gray-300">About</a>
            <a href="#products" className="block py-2 hover:text-gray-300">Products</a>
            <a href="#teams" className="block py-2 hover:text-gray-300">Teams</a>
            <a href="#news" className="block py-2 hover:text-gray-300">News</a>
            <a href="#contact" className="block py-2 hover:text-gray-300">Contact</a>
            <a href="tel:+6281280080275" className="block py-2 text-yellow-300 hover:text-yellow-100">+62 8128 008 0275</a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;