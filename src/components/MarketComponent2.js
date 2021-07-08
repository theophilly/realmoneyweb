import React, { useEffect, useState } from 'react';
import ArrowUpGreen from '../icons/ArrowUpGreen';
import HeartWhite from '../icons/HeartWhite';

export default function MarketComponent2({ name, percent, value, number }) {
  const [color, setColor] = useState('');
  useEffect(() => {
    const i = Math.floor(Math.random() * 6 + 1);

    switch (i) {
      case 1:
        setColor('#255380');
        break;
      case 2:
        setColor('#5843BE');
        break;
      case 3:
        setColor('#666666');
        break;
      case 4:
        setColor('#FF6600');
        break;
      case 5:
        setColor('#FE7268');
        break;
      case 6:
        setColor('dodgerblue');
        break;
    }
  }, []);

  return (
    <div style={{ backgroundColor: color }} className="marketcomponent2">
      <p>{name}</p>
      <div className="marketcomponent2_inner">
        <p>{percent}%</p>
        <div className="marketcomponent2_inner_roi">
          <ArrowUpGreen height={10} width={10} />
          <p>ROI</p>
        </div>
      </div>
      <p>
        N{value}/unit . {number}
      </p>

      <div style={{ position: 'absolute', bottom: 6, right: 14 }}>
        <HeartWhite width={11} height={11} />
      </div>
    </div>
  );
}
