import React, { useState } from 'react';
import fuli1 from '../assets/fuli1.jpeg';
import fuli2 from '../assets/fuli2.jpeg';
import fuli3 from '../assets/fuli3.jpeg';
import pala from '../assets/pala.jpeg';
import pala2 from '../assets/pala2.png';

function OurJourney() {
  const [isHovered, setIsHovered] = useState(null);

  const galleryImages = [
    { src: fuli1, alt: 'Nutmeg Mace Harvest in Singkil', caption: 'Harvesting nutmeg mace with local farmers in Singkil, Manado.' },
    { src: fuli2, alt: 'Mace Processing Facility', caption: 'Processing nutmeg mace under strict quality standards.' },
    { src: fuli3, alt: 'Nutmeg Quality Control', caption: 'Ensuring top-quality nutmeg through rigorous inspections.' },
    { src: pala, alt: 'Nutmeg Plantation', caption: 'Our lush nutmeg plantations in North Sulawesi.' },
    { src: pala2, alt: 'Packaged Nutmeg Mace', caption: 'Premium nutmeg mace ready for global markets.' },
  ];

  return (
    <section className="w-full px-4 sm:px-10 py-10" id="our-journey">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-8">
          <button className="text-[#ffb300] text-lg mb-2 inline-block">
            Our Journey
          </button>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mt-2">
            Behind Celebes Essence
          </h1>
          <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            Discover the journey of our premium nutmeg from the fields of North Sulawesi to your table, showcasing our commitment to authenticity and quality.
          </p>
        </div>

        <div className="relative overflow-x-auto snap-x snap-mandatory flex gap-4 sm:gap-6 scrollbar-hide">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative rounded-lg shadow-lg overflow-hidden flex-shrink-0 w-[250px] sm:w-[350px] snap-center"
              style={{ height: '250px' }}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-300"
                style={{
                  backgroundImage: `url(${image.src})`,
                  filter: 'brightness(50%)',
                  transform: isHovered === index ? 'scale(1.05)' : 'scale(1)',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
                <div className="bg-black bg-opacity-0 rounded-xl p-2 sm:p-4 max-w-xs">
                  <p className="text-white text-xs sm:text-sm leading-relaxed font-medium">
                    {image.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

export default OurJourney;