import React, { useState, useEffect } from 'react';

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Check if at top
      setAtTop(currentScrollPos === 0);

      if (currentScrollPos > prevScrollPos) {
        setShowHeader(false); // scrolling down
      } else if (currentScrollPos < prevScrollPos) {
        setShowHeader(true); // scrolling up
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        showHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${atTop ? 'bg-transparent' : ''}`}
      style={{
        transitionProperty: 'transform, opacity, background-color',
        backgroundColor: atTop ? 'transparent' : '#0c1c01',
      }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - aligned left */}
        <div className="text-white text-2xl">Celebes<span className='text-[#ffb300] font-bold italic'>Essence</span>🌱</div>

        {/* Desktop Navigation - centered (hidden on mobile) */}
        <nav className="hidden md:flex space-x-10">
          <a href="Home" className="text-white hover:text-gray-300">
            Beranda
          </a>
          <a href="#about" className="text-white hover:text-gray-300">
            Tentang Kami
          </a>
          <a href="#products" className="text-white hover:text-gray-300">
            Produk
          </a>
          <a href="#contact" className="text-white hover:text-gray-300">
            Hubungi
          </a>
          <a
            href="tel:+6281280080275"
            className="text-yellow-300 font-bold hover:text-yellow-100"
          >
            celebes@gmail.com
          </a>
        </nav>

        {/* Burger Menu - aligned right */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-4 bg-gray-800 text-white p-4 rounded shadow-lg z-50">
          <a href="#home" className="block py-2 hover:text-gray-300">
            Beranda
          </a>
          <a href="#about" className="block py-2 hover:text-gray-300">
            Tentang Kami
          </a>
          <a href="#products" className="block py-2 hover:text-gray-300">
            Produk
          </a>
          <a href="#contact" className="block py-2 hover:text-gray-300">
            Hubungi
          </a>
          <a
            href="tel:+6281280080275"
            className="block py-2 text-yellow-300 hover:text-yellow-100"
          >
            celebes@gmail.com
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
