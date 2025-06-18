import React, { useState } from 'react';
import fuli1 from '../assets/fuli1.jpeg';
import fuli2 from '../assets/fuli2.jpeg';
import fuli3 from '../assets/fuli3.jpeg';

function AboutUs() {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/rice-paper.png)' }}>
      <div className="text-center mb-10">
        <button className="text-orange-500 font-bold text-sm mb-4 inline-block">ABOUT US</button>
        <h1 className="text-4xl font-bold text-gray-800 mt-2">Providing Great Foodstuffs</h1>
        <p className="text-gray-600 mt-2">We have 30 years of agriculture & eco-farming experience globally, work with professionals</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        <div 
          className="relative rounded-lg shadow-lg overflow-hidden"
          style={{ height: '400px', position: 'relative' }}
        >
          <div 
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-300"
            style={{ backgroundImage: `url(${fuli1})`, transform: isHovered === 0 ? 'scale(1.1) skew(5deg, 5deg)' : 'scale(1)' }}
            onMouseEnter={() => setIsHovered(0)}
            onMouseLeave={() => setIsHovered(null)}
          />
          <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 w-full">
            <h2 className="text-xl font-semibold text-white">100% natural</h2>
            <p className="text-sm text-white">Clean, pesticide free, responsibly grown and delivered to you</p>
          </div>
          <div className="absolute top-0 right-0 w-10 h-10 border-l-2 border-b-2 border-white transform rotate-45"></div>
        </div>
        <div 
          className="relative rounded-lg shadow-lg overflow-hidden"
          style={{ height: '400px', position: 'relative' }}
        >
          <div 
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-300"
            style={{ backgroundImage: `url(${fuli2})`, transform: isHovered === 1 ? 'scale(1.1) skew(5deg, 5deg)' : 'scale(1)' }}
            onMouseEnter={() => setIsHovered(1)}
            onMouseLeave={() => setIsHovered(null)}
          />
          <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 w-full">
            <h2 className="text-xl font-semibold text-white">High quality</h2>
            <p className="text-sm text-white">Clean, pesticide free, responsibly grown and delivered to you</p>
          </div>
          <div className="absolute top-0 right-0 w-10 h-10 border-l-2 border-b-2 border-white transform rotate-45"></div>
        </div>
        <div 
          className="relative rounded-lg shadow-lg overflow-hidden"
          style={{ height: '400px', position: 'relative' }}
        >
          <div 
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-300"
            style={{ backgroundImage: `url(${fuli3})`, transform: isHovered === 2 ? 'scale(1.1) skew(5deg, 5deg)' : 'scale(1)' }}
            onMouseEnter={() => setIsHovered(2)}
            onMouseLeave={() => setIsHovered(null)}
          />
          <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 w-full">
            <h2 className="text-xl font-semibold text-white">Fresh items</h2>
            <p className="text-sm text-white">Clean, pesticide free, responsibly grown and delivered to you</p>
          </div>
          <div className="absolute top-0 right-0 w-10 h-10 border-l-2 border-b-2 border-white transform rotate-45"></div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;