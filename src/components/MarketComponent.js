import React from 'react';
import ArrowUpGreen from '../icons/ArrowUpGreen';

export default function MarketComponent({ name, percent, value, number }) {
  return (
    <div className="marketcomponent">
      <p>{name}</p>
      <div className="marketcomponent_inner">
        <p>{percent}%</p>
        <div className="marketcomponent_inner_roi">
          <ArrowUpGreen height={10} width={10} />
          <p>ROI</p>
        </div>
      </div>
      <p>
        N{value}/unit . {number}
      </p>
    </div>
  );
}
