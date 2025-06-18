import React from 'react';

function News() {
  return (
    <section className="news">
      <h2>Recent News</h2>
      <div className="news-cards">
        <div className="card">
          <img src="/logo192.png" alt="Sustainable Farming" />
          <p>August 28, 2024<br />Sustainable Farming Practices Gain Ground</p>
        </div>
        <div className="card">
          <img src="/logo512.png" alt="Climate-Resilient Crops" />
          <p>August 27, 2024<br />Climate-Resilient Crops on the Horizon</p>
        </div>
      </div>
    </section>
  );
}

export default News;