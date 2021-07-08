import React from 'react';
import newMarketData from '../newMarketData';
import MarketComponent from './MarketComponent';

export default function QuickInvest() {
  const market = [...newMarketData];
  return (
    <div className="quickinvest">
      {/* upper text */}
      <div className="quickinvest_upper">
        <p>Quick Invest</p>
        <hr></hr>
      </div>

      {/* search bar */}
      <div className="quickinvest_input">
        <input placeholder="search market "></input>
      </div>

      {/* market list */}
      <div className="quickinvest_marketlist">
        {market.splice(0, 4).map((item) => (
          <MarketComponent {...item} />
        ))}
      </div>
    </div>
  );
}
