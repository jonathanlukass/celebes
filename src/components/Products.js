import React from 'react';

function Products() {
  return (
    <section className="products">
      <h2>Healthy Food Products</h2>
      <p>Our greens are tender and delicious, clean and pesticide free, responsibly grown and delivered to grocery stores - by locals just like you!</p>
      <div className="product-cards">
        <div className="card">
          <img src="/logo192.png" alt="Cucumber" />
          <h3>Cucumber</h3>
          <p>The cucumber is a fascinating vegetable, celebrated for its versatility, crisp texture, and refreshing taste. Belonging to the Cucurbitaceae family. [-1]</p>
        </div>
        <div className="card">
          <img src="/logo512.png" alt="Tomato" />
          <h3>Tomato</h3>
          <p>The tomato, a fruit often mistaken for a vegetable, is one of the most widely cultivated and consumed. [-1]</p>
        </div>
      </div>
    </section>
  );
}

export default Products;