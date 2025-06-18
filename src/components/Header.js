import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo192.png" alt="Web Eksport Logo" />
        <span>webeksport</span>
      </div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#teams">Teams</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="tel:+6281280080275">+62 8128 008 0275</a>
      </nav>
    </header>
  );
}

export default Header;