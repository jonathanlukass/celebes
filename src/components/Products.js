import React, { useState } from 'react';
import './Products.css';

function Products() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      title: 'Fuli Pala - Penambah Cita Rasa',
      image: '/product1.jpg',
      description:
        'Fuli Pala, selaput tipis yang mengelilingi biji pala, meningkatkan cita rasa masakan dengan aroma hangatnya. Rempah ini memperkaya hidangan seperti sup, saus, dan kue, memberikan sentuhan manis dan pedas yang khas. Fleksibilitasnya menjadikannya bahan penting dalam resep gurih maupun manis, memikat lidah setiap penikmatnya.',
    },
    {
      title: 'Fuli Pala - Manfaat Kesehatan',
      image: '/product2.jpg',
      description:
        'Fuli Pala menawarkan berbagai manfaat kesehatan, menjadikannya tambahan berharga dalam pola makan Anda. Kaya akan antioksidan, rempah ini membantu melawan peradangan dan mendukung kesehatan pencernaan. Sifatnya yang menghangatkan dapat meningkatkan sirkulasi dan meredakan nyeri ringan, sementara aroma khasnya mendukung relaksasi dan kesejahteraan secara keseluruhan.',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const currentProduct = products[currentSlide];

  return (
    <div className="products-wrapper" id="products">
      <div className="text-center mb-10 mt-8 px-4">
        <button className="text-[#ffb300] text-lg mb-4 inline-block">
          Produk Kami
        </button>
        <h1 className="text-3xl font-bold text-gray-800 mt-2">
          Fuli Pala (Mace) Esensi Celebes
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-justify">
          <b>Fuli pala</b> adalah selaput tipis berwarna merah atau jingga yang menyelimuti biji pala. Fuli pala digunakan sebagai rempah-rempah bernilai tinggi karena aroma dan rasanya yang khas.
        </p>
      </div>
      <div className="product-container">
        <div className="product-image-left">
          <div className="fade-transition">
            <img
              src={`${process.env.PUBLIC_URL}${currentProduct.image}`}
              alt={currentProduct.title}
              className="product-image"
              key={currentSlide} // Key to trigger re-render for transition
            />
          </div>
        </div>
        <div className="product-details-right">
          <div className="fade-transition">
            <h2 className="product-title" key={`title-${currentSlide}`}>
              {currentProduct.title}
            </h2>
            <p className="product-description" key={`desc-${currentSlide}`}>
              {currentProduct.description}
            </p>
          </div>
          <div className="product-nav-buttons">
            <button onClick={prevSlide} className="nav-btn">❮</button>
            <button onClick={nextSlide} className="nav-btn">❯</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;