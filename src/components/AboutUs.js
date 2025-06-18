import React, { useState } from 'react';
import pala from '../assets/pala.jpeg';

function AboutUs() {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6"

    >
      <div className="text-center mb-10">
        <button className="text-orange-500 font-bold text-sm mb-4 inline-block">
          ABOUT US
        </button>
        <h1 className="text-4xl font-bold text-gray-800 mt-2">
          Menghadirkan Kualitas Pala Premium dari Sulawesi ke Dunia
        </h1>
        <p className="text-gray-600 mt-2">
          Celebes Essence adalah perusahaan yang bergerak di bidang pengolahan dan distribusi pala yang berasal dari tanah subur Sulawesi, Indonesia. Kami hadir sebagai pelaku usaha yang mengedepankan kualitas, keberlanjutan, dan kepercayaan, baik dalam proses produksi maupun dalam menjalin hubungan dengan mitra dan konsumen. Dengan memanfaatkan potensi alam Indonesia dan dukungan petani lokal, Celebes Essence berkomitmen untuk menghasilkan produk pala yang tidak hanya unggul dari segi rasa dan aroma, tetapi juga memenuhi standar internasional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {[
          "Rempah Sulawesi untuk Dunia – Inilah Celebes Essence",
          "Celebes Essence menjamin keaslian, mutu, dan keberlanjutan. Produk kami cocok untuk kebutuhan industri makanan, kesehatan, dan kosmetik.",
          "Setiap biji pala kami diproses dengan standar ketat, mulai dari panen hingga pengemasan, untuk menjaga aroma, rasa, dan kandungan alami tetap terjaga.",
        ].map((text, index) => (
          <div
            key={index}
            className="relative rounded-lg shadow-lg overflow-hidden"
            style={{ height: '400px', position: 'relative' }}
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-300"
              style={{
                backgroundImage: `url(${pala})`,
                filter: 'brightness(40%)',
                transform:
                  isHovered === index ? 'scale(1.1) ' : 'scale(1)',
              }}
            />

            {/* Elegant Text */}
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
              <div className="bg-black bg-opacity-50 rounded-lg p-4 transition duration-300 ease-in-out hover:bg-opacity-60">
                <p className="text-white text-base leading-relaxed font-medium">
                  {text}
                </p>
              </div>
            </div>


          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutUs;
