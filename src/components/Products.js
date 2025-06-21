import React, { useState } from 'react';
import './Products.css';

function Products() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      title: 'Nutmeg Mace – Flavor Enhancer',
      image: '/product1.jpg',
      description:
        'Nutmeg mace, the delicate membrane that surrounds the nutmeg seed, enhances the flavor of dishes with its warm aroma. This spice enriches meals such as soups, sauces, and pastries, delivering a distinctive sweet and spicy touch. Its versatility makes it an essential ingredient in both savory and sweet recipes, delighting the palate of every enthusiast.',
    },
    {
      title: 'Nutmeg Mace – Health Benefits',
      image: '/product2.jpg',
      description:
        'Nutmeg mace offers various health benefits, making it a valuable addition to your diet. Rich in antioxidants, this spice helps fight inflammation and supports digestive health. Its warming properties can boost circulation and relieve minor aches, while its signature aroma promotes relaxation and overall well-being.',
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
          Our Product
        </button>
        <h1 className="text-3xl font-bold text-gray-800 mt-2">
          Celebes Essence Nutmeg Mace (Fuli Pala)
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-justify">
          <b>Nutmeg mace</b> is the thin, red or orange membrane that envelops the nutmeg seed. It is used as a high-value spice due to its distinctive aroma and flavor.
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