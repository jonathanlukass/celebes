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
              Tentang Kami
            </button>
            <h1 className="text-2xl font-bold text-gray-800 mt-2">
              Menghadirkan Kualitas Pala Premium dari Sulawesi ke Dunia
            </h1>
            <p className="text-gray-600 mt-4 text-justify center">
              <span className="font-bold">Celebes Essence</span> adalah perusahaan yang bergerak di bidang pengolahan dan distribusi pala yang berasal dari tanah subur Sulawesi, Indonesia. Berawal dari usaha kecil yang penuh semangat, Celebes Essence telah tumbuh dan berkembang selama lebih dari 20 tahun menjadi pelaku usaha yang mengedepankan kualitas, keberlanjutan, dan kepercayaan—baik dalam proses produksi maupun dalam menjalin hubungan dengan mitra dan konsumen.
              <br />
              <br />
              Dengan memanfaatkan potensi alam Indonesia dan dukungan petani lokal, Celebes Essence berkomitmen untuk menghasilkan produk pala yang tidak hanya unggul dari segi rasa dan aroma, tetapi juga memenuhi standar internasional.
            </p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "Rempah Sulawesi untuk Dunia – Inilah Celebes Essence",
            "Celebes Essence menjamin keaslian, mutu, dan keberlanjutan. Produk kami cocok untuk kebutuhan industri makanan, kesehatan, dan kosmetik.",
            "Setiap biji pala kami diproses dengan standar ketat, mulai dari panen hingga pengemasan, untuk menjaga aroma, rasa, dan kandungan alami tetap terjaga.",
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
