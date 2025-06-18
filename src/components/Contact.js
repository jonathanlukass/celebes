import React from 'react';
import instagramIcon from '../icons/icons8-instagram1.svg';
import facebookIcon from '../icons/icons8-facebook.svg';

function Contact() {
  const menuItems = ['Home', 'About', 'Products', 'Contact'];
  const address =
    'Jl. Indonesia Raya No.45, Jakarta Pusat, DKI Jakarta, Indonesia';
  const phone = '+62 8128 008 0275';
  const currentYear = '2025';

  return (
    <section className="contact bg-[#191A17] py-10 px-4 md:px-8 lg:px-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="">
          <p className="text-white text-3xl font-thin mb-2">
            celebes <span className="font-bold">essence</span>
          </p>
          <p className="text-[#919191] font-thin text-sm leading-relaxed max-w-sm">
            Developing effective distribution channels is crucial for reaching
            customers in foreign markets.
          </p>
        </div>

        <div className="">
          <p className="text-white text-xl mb-3">Address</p>
          <address className="not-italic text-[#919191] font-thin text-sm mb-2">
            {address}
          </address>
          <a
            href={`tel:${phone.replace(/\s+/g, '')}`}
            className="text-[#FCD200] block mt-1 text-sm hover:underline"
          >
            {phone}
          </a>
        </div>

        <div className="">
          <p className="text-white text-xl mb-3">Menu</p>
          <ul className="text-[#919191] font-thin space-y-1 text-sm">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-[#E46B2D] transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <p className="text-white text-xl mb-3">Get in Touch</p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <div className="p-2 rounded-full border border-white inline-block hover:bg-white transition-colors duration-200 group">
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="w-6 h-6 rounded-full group-hover:filter group-hover:brightness-0 group-hover:invert"
                />
              </div>
            </a>
            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <div className="p-2 rounded-full border border-white inline-block hover:bg-white transition-colors duration-200 group">
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="w-6 h-6 rounded-full group-hover:filter group-hover:brightness-0 group-hover:invert"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-8 border-t border-gray-700">
        <p className="text-[#919191] text-sm text-center">
          &copy; {currentYear} Celebes Essence. All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default Contact;
