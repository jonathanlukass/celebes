import React from 'react';
import social from '../assets/social.png'; // Import the downloaded logo

function WhatsAppButton() {
  const phoneNumber = '+6285397313198'; // Replace with your WhatsApp number
  const message = 'Halo, saya tertarik dengan produk Anda!'; // Default message
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-2 shadow-lg hover:bg-green-600 transition-colors duration-300 z-50 flex items-center justify-center"
      style={{ width: '65px', height: '65px' }} // Adjust size to fit the image
    >
      <img
        src={social}
        alt="WhatsApp"
        className="w-full h-full object-contain"
      />
    </a>
  );
}

export default WhatsAppButton;