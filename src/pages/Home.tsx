import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <h1 className="brand-heading">
          Welcome to <span className="brand-q">Q</span>cart
        </h1>
        <p>Quantum Shopping Experience - Fast, Smart, Revolutionary</p>
      </section>
      
      <section className="features">
        <div className="feature-card">
          <h3>⚡ Quantum Fast</h3>
          <p>Lightning-fast shopping experience with quantum technology</p>
        </div>
        <div className="feature-card">
          <h3>🔮 Smart Selection</h3>
          <p>AI-powered recommendations for the perfect products</p>
        </div>
        <div className="feature-card">
          <h3>🚀 Future Commerce</h3>
          <p>Experience the next generation of online shopping</p>
        </div>
      </section>
    </div>
  );
};

export default Home;