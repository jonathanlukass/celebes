// import React from 'react';
// import instagramIcon from '../icons/icons8-instagram1.svg';
// import facebookIcon from '../icons/icons8-facebook.svg';

function Contact() {
  const menuItems = ['Beranda', 'Tentang Kami', 'Produk', 'Hubungi'];
  const address =
    'Jl. Gn. Panjang Singkil Dua, Kec. Singkil, Kota Manado, Sulawesi Utara';

  const phone = '+62 853-9731-3198';
  const email = 'cvdjayasumberkasih@gmail.com';
  const currentYear = '2005';

  const phoneNumber = '+6285397313198'; // Replace with your WhatsApp number
  const message = 'Halo, saya tertarik dengan produk Anda!'; // Default message
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section
      className="contact bg-[#0a1801] py-10 px-4 md:px-8 lg:px-16 "
      id="contact"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <p className="text-white text-3xl font-thin mb-2 whitespace-nowrap">
            Celebes
            <span className="font-bold text-[#ffb300] italic"> Essence</span>
          </p>
          <p className="text-[#919191] font-thin text-sm leading-relaxed max-w-sm">
          Selected Nutmeg from North Sulawesi – Authentic, Premium, Unmatched!
          </p>
        </div>

        <div className="">
          <p className="text-white text-xl mb-3">Address</p>
          <address className="not-italic text-[#919191] font-thin text-sm mb-2">
            {address}
          </address>
        </div>

        <div className="">
          <p className="text-white text-xl mb-3">Contact Us</p>
          <div className="flex flex-col gap-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FCD200] block mt-1 text-sm hover:underline"
            >
              {phone}
            </a>
            <a
              href={`mailto:${email}`}
              className="text-[#FCD200] block mt-1 text-sm hover:underline"
            >
              {email}
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
