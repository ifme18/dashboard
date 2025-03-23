import React, { useState, useEffect } from 'react';
import './index.css';

const PolymarketLandingPage = () => {
  const [activeTab, setActiveTab] = useState('trending');
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const markets = [
    {
      id: 1,
      title: "Will Bitcoin exceed $100,000 by July 1, 2025?",
      volume: "$2.4M",
      liquidityPool: "$483K",
      yesPrice: "78¢",
      noPrice: "22¢",
      tags: ["Crypto", "Finance"],
      endDate: "Jul 1, 2025",
      trend: "+12%"
    },
    // ... (keeping other market data the same)
  ];

  return (
    <div className="page-container">
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-content">
          <div className="header-left">
            <div className="logo">PredictX</div>
            <nav className="nav-desktop">
              <ul>
                {['Markets', 'Portfolio', 'Leaderboard', 'About'].map(item => (
                  <li key={item}><button>{item}</button></li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="header-buttons">
            <button className="btn-secondary">Connect Wallet</button>
            <button className="btn-primary">Sign Up</button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-background"></div>
        <div className="container hero-content">
          <span className="hero-badge">Next-Gen Prediction Markets</span>
          <h2 className="hero-title">Forecast the Future,<br />Trade with Confidence</h2>
          <p className="hero-text">
            Harness the power of decentralized prediction markets to trade on real-world outcomes with unparalleled transparency.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Start Trading</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          {[
            { label: "24h Trading Volume", value: "$14.2M" },
            { label: "Active Markets", value: "428" },
            { label: "Total Users", value: "143K+" }
          ].map((stat, index) => (
            <div key={index} className="stat-item" style={{animationDelay: `${index * 0.2}s`}}>
              <p className="stat-label">{stat.label}</p>
              <h3 className="stat-value">{stat.value}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="markets">
        <div className="container">
          <div className="markets-header">
            <h2 className="section-title">Explore Markets</h2>
            <div className="tabs">
              {['trending', 'newest', 'closing'].map(tab => (
                <button 
                  key={tab}
                  className={`tab ${activeTab === tab ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === 'closing' ? 'Closing Soon' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="markets-grid">
            {markets.map((market, index) => (
              <div 
                key={market.id} 
                className="market-card"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="market-header">
                  <h3 className="market-title">{market.title}</h3>
                  <span className={`market-trend ${market.trend.startsWith('+') ? 'trend-positive' : 'trend-negative'}`}>
                    {market.trend}
                  </span>
                </div>
                <div className="market-stats">
                  <div>
                    <p className="stat-label">Volume</p>
                    <p className="stat-value">{market.volume}</p>
                  </div>
                  <div>
                    <p className="stat-label">Liquidity</p>
                    <p className="stat-value">{market.liquidityPool}</p>
                  </div>
                  <div>
                    <p className="stat-label">End Date</p>
                    <p className="stat-value">{market.endDate}</p>
                  </div>
                </div>
                <div className="market-prices">
                  <div className="price-yes">
                    <p>YES</p>
                    <p className="price-value">{market.yesPrice}</p>
                  </div>
                  <div className="price-no">
                    <p>NO</p>
                    <p className="price-value">{market.noPrice}</p>
                  </div>
                </div>
                <div className="market-tags">
                  {market.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="markets-cta">
            <button className="btn-primary">View All Markets</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PolymarketLandingPage;