import React from 'react';

function About() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <div className="text-center">
        <a href="#" className="text-orange-500 text-sm mb-4 inline-block">ABOUT US</a>
        <h1 className="text-3xl font-bold text-gray-800 mt-2">Providing Great Foodstuffs</h1>
        <p className="text-gray-600 mt-2">We have 30 years of agriculture & eco farming experience globally, work with professionals</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="bg-cover bg-center rounded-lg shadow-lg relative" style={{ backgroundImage: 'url(/About.jpeg)', height: '400px' }}>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h2 className="text-xl font-semibold">100% natural</h2>
            <p className="text-sm">Clean, pesticide free, responsibly grown and delivered to you</p>
          </div>
          <div className="absolute top-0 right-0 w-10 h-10 border-l-2 border-b-2 border-white transform rotate-45"></div>
        </div>
        <div className="bg-cover bg-center rounded-lg shadow-lg relative" style={{ backgroundImage: 'url(/)', height: '400px' }}>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h2 className="text-xl font-semibold">High quality</h2>
            <p className="text-sm">Clean, pesticide free, responsibly grown and delivered to you</p>
          </div>
          <div className="absolute top-0 right-0 w-10 h-10 border-l-2 border-b-2 border-white transform rotate-45"></div>
        </div>
        <div className="bg-cover bg-center rounded-lg shadow-lg relative" style={{ backgroundImage: 'url(/)', height: '400px' }}>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h2 className="text-xl font-semibold">Fresh items</h2>
            <p className="text-sm">Clean, pesticide free, responsibly grown and delivered to you</p>
          </div>
          <div className="absolute top-0 right-0 w-10 h-10 border-l-2 border-b-2 border-white transform rotate-45"></div>
        </div>
      </div>
      <a href="https://wa.me/1234567890" className="mt-10 bg-green-500 text-white px-4 py-2 rounded-full flex items-center">
        <span>WhatsApp</span>
        <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm-2.5-13h5c.276 0 .5.224.5.5s-.224.5-.5.5h-4c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zm0 3h5c.276 0 .5.224.5.5s-.224.5-.5.5h-4c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zm0 3h5c.276 0 .5.224.5.5s-.224.5-.5.5h-4c-.276 0-.5-.224-.5-.5s.224-.5.5-.5z"/>
        </svg>
      </a>
    </section>
  );
}

export default About;