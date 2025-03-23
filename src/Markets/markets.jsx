import React from 'react';

const MarketCard = ({ market, index }) => {
  return (
    <div className="market-card" style={{ animationDelay: `${index * 0.1}s` }}>
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
  );
};

const Markets = ({ markets, activeTab, setActiveTab }) => {
  return (
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
            <MarketCard key={market.id} market={market} index={index} />
          ))}
        </div>
        <div className="markets-cta">
          <button className="btn-primary">View All Markets</button>
        </div>
      </div>
    </section>
  );
};

export default Markets;