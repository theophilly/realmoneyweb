import React, { useRef, useState } from 'react';
import Leaderboard from '../components/Leaderboard';
import ArrowGrey from '../icons/ArrowGrey';
import ArrowUpBlue from '../icons/ArrowUpBlue';
import QuickInvest from '../components/QuickInvest';
import NavbarIcons from '../components/NavbarIcons';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import MarketSlide from '../components/MarketSlide';
import newMarketData from '../newMarketData';
import NextIcon from '../icons/NextIcon';
import PrevIcon from '../icons/PrevIcon';
import MarketDetails from '../components/MarketDetails';

export default function Market() {
  const car = useRef(null);
  const [cartitems, setCartitems] = useState(1);
  const [currentMarket, SetCurrentMarket] = useState(null);
  return (
    <div className="market">
      {/* first section */}
      <div className="market_firstsection">
        <Leaderboard></Leaderboard>

        {/* white box */}
        <div className="home_left_boxes_white">
          {/* first */}
          <div className="home_left_boxes_white_first">
            <p>Current Value</p>
            <div className="home_left_boxes_white_first_inner">
              <p>NGN</p> <ArrowGrey height={11} width={11} />
            </div>
          </div>
          {/* second */}

          <div className="home_left_boxes_white_second">
            <span>N</span> 28,755.23
          </div>

          {/* third */}
          <div className="home_left_boxes_white_third">
            <div className="home_left_boxes_white_third_inner">
              N277.32 <ArrowUpBlue height={11} width={11} />
            </div>
            <p>Last 7 days</p>
          </div>
        </div>
        <div>
          <NavbarIcons />
        </div>
      </div>

      {currentMarket === null ? (
        <>
          <div className="market_secondsection">
            <p>Real Estate</p>
            <p>Agro</p>
            <div className="market_secondsection_input">
              <input placeholder="search market "></input>
            </div>
          </div>
          <div className="market_carousel">
            <div onClick={() => car.current.prev()} className="previous">
              <PrevIcon height={11} width={11} />
            </div>
            <div className="slider">
              <OwlCarousel
                ref={car}
                dots={false}
                nav={false}
                items={5}
                className="owl-theme"
                loop
                margin={10}
              >
                {newMarketData.map((item, index) => (
                  <div
                    class="item"
                    onClick={() =>
                      SetCurrentMarket({ ...item, iterator: index })
                    }
                  >
                    <MarketSlide item={item} />
                  </div>
                ))}
              </OwlCarousel>
            </div>
            <div onClick={() => car.current.next()} className="next">
              <NextIcon height={11} width={11} />
            </div>
          </div>
        </>
      ) : (
        <MarketDetails
          {...currentMarket}
          cartitems={cartitems}
          setCartitems={setCartitems}
          SetCurrentMarket={SetCurrentMarket}
        />
      )}
    </div>
  );
}
