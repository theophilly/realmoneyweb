import React from 'react';
import MarketComponent2 from './MarketComponent2';

export default function MarketSlide({ item }) {
  const { name, image, percent, value, number } = item;

  return (
    <div className="marketslide">
      <img src={image[1]} />

      <MarketComponent2
        image={image}
        name={name}
        percent={percent}
        value={value}
        number={number}
      />
    </div>
  );
}
