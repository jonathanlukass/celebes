import React, { useState } from 'react';
import pala1 from '../assets/pala.jpeg';
import pala2 from '../assets/pala2.png';
import pala3 from '../assets/pala3.png';



function AboutUs() {
  const [isHovered, setIsHovered] = useState(null);

  const palaImages = [pala1, pala2, pala3];

  return (
    <section className="w-full px-10" id="about">
      <div className="max-w-screen-2xl mx-auto">

          <div className="text-center mb-10 mt-4">
            <button className="text-[#ffb300] text-lg mb-4 inline-block">
              About Us
            </button>
            <h1 className="text-2xl font-bold text-gray-800 mt-2">
            Delivering Premium Nutmeg Quality from North Sulawesi to the World
            </h1>
            <p className="text-gray-600 mt-4 text-justify center">
              <span className="font-bold">Celebes Essence</span> is a company engaged in the processing and distribution of nutmeg sourced from the fertile lands of Sulawesi, Indonesia. Starting as a passionate small business, Celebes Essence has grown and thrived for over 20 years, prioritizing quality, sustainability, and trust—both in our production processes and our relationships with partners and consumers.

              By utilizing Indonesia’s natural potential and the support of local farmers, Celebes Essence is committed to delivering nutmeg products that not only excel in taste and aroma but also meet international standards.
            </p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "Spices of North Sulawesi for the World – This is Celebes Essence.",
            "Celebes Essence guarantees authenticity, quality, and sustainability. Our products are ideal for the food, health, and cosmetic industries.",
            "Each nutmeg seed is processed under strict standards—from harvesting to packaging—to preserve its natural aroma, flavor, and properties.",
          ].map((text, index) => (
            <div
              key={index}
              className="relative rounded-lg shadow-lg overflow-hidden"
              style={{ height: '400px' }}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-300"
                style={{
                  backgroundImage: `url(${palaImages[index]})`,
                  filter: 'brightness(40%)',
                  transform: isHovered === index ? 'scale(1.1)' : 'scale(1)',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center px-6 text-justify">
                <div className="bg-black bg-opacity-0 rounded-xl p-4 max-w-sm transition duration-300 ease-in-out">
                  <p className="text-white text-base leading-relaxed font-medium">
                    {text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
