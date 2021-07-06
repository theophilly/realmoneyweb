import React, { useState } from 'react';

import HomeIcon from '../icons/HomeIcon';
import HomeIconActive from '../icons/HomeIconActive';
import MarketIconActive from '../icons/MarketIconActive';
import MarketIcon from '../icons/MarketIcon';
import PortfolioIconActive from '../icons/PortfolioIconActive';
import PortfolioIcon from '../icons/PortfolioIcon';
import LoanIconActive from '../icons/LoanIconActive';
import LoanIcon from '../icons/LoanIcon';

export default function Sidebar({ changePage }) {
  const [active, setActive] = useState('Home');

  const handleIconClick = (text) => {
    setActive(text);
    changePage(text);
  };

  const Icons = ({ onpress, text }) => {
    if (text === 'Home')
      return (
        <div className="icon" onClick={() => onpress(text)}>
          {active === 'Home' ? (
            <HomeIconActive height={20} width={20} />
          ) : (
            <HomeIcon height={20} width={20} />
          )}

          <p className={active === 'Home' ? 'icon_textactive' : 'icon_text'}>
            {text}
          </p>
        </div>
      );
    else if (text === 'Market')
      return (
        <div className="icon" onClick={() => onpress(text)}>
          {active === 'Market' ? (
            <MarketIconActive height={20} width={20} />
          ) : (
            <MarketIcon height={20} width={20} />
          )}

          <p className={active === 'Market' ? 'icon_textactive' : 'icon_text'}>
            {text}
          </p>
        </div>
      );
    else if (text === 'Portfolio')
      return (
        <div className="icon" onClick={() => onpress(text)}>
          {active === 'Portfolio' ? (
            <PortfolioIconActive height={20} width={20} />
          ) : (
            <PortfolioIcon height={20} width={20} />
          )}

          <p
            className={active === 'Portfolio' ? 'icon_textactive' : 'icon_text'}
          >
            {text}
          </p>
        </div>
      );
    else if (text === 'Loans')
      return (
        <div className="icon" onClick={() => onpress(text)}>
          {active === 'Loans' ? (
            <LoanIconActive height={20} width={20} />
          ) : (
            <LoanIcon height={20} width={20} />
          )}

          <p className={active === 'Loans' ? 'icon_textactive' : 'icon_text'}>
            {text}
          </p>
        </div>
      );
  };

  return (
    <div className="sidebar">
      {/* profile image */}

      <img className="sidebar_img" src="./logo192.png"></img>
      <Icons onpress={handleIconClick} text="Home" />
      <Icons onpress={handleIconClick} text="Market" />
      <Icons onpress={handleIconClick} text="Portfolio" />
      <Icons onpress={handleIconClick} text="Loans" />
    </div>
  );
}
