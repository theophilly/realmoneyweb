import React from 'react';
import Leaderboard from '../components/Leaderboard';
import ArrowGreen from '../icons/ArrowGreen';
import MarketComponent from '../components/MarketComponent';
import QuickInvest from '../components/QuickInvest';
import NavbarIcons from '../components/NavbarIcons';
import ArrowGrey from '../icons/ArrowGrey';
import ArrowUpGreen from '../icons/ArrowUpGreen';
import ArrowUpBlue from '../icons/ArrowUpBlue';
import ArrowUpWhite from '../icons/ArrowUpWhite';
import ArrowDownWhite from '../icons/ArrowDownWhite';
import HandshakeIcon from '../icons/HandshakeIcon';

export default function Home() {
  return (
    <div className="home">
      <div className="home_left">
        <Leaderboard />
        {/* date */}
        <div className="home_left_date">
          <p>Friday</p>
          <div className="home_left_date_inner">
            <p>Jan 15, 2021</p>
            <ArrowGreen height={10} width={10} />
          </div>
        </div>

        {/* three links */}
        <div className="home_left_links">
          <span>Dashboard</span>
          <span>Assets</span>
          <span>Loans</span>
        </div>
        {/* boxes section */}
        <div className="home_left_boxes">
          {/* white box */}
          <div className="home_left_boxes_white">
            {/* first */}
            <div className="home_left_boxes_white_first">
              <p>Current Value</p>
              <div className="home_left_boxes_white_first_inner">
                <p>NGN</p> <ArrowGrey height={13} width={13} />
              </div>
            </div>
            {/* second */}

            <div className="home_left_boxes_white_second">
              <span>N</span> 28,755.23
            </div>

            {/* third */}
            <div className="home_left_boxes_white_third">
              <div className="home_left_boxes_white_third_inner">
                N277.32 <ArrowUpBlue height={13} width={13} />
              </div>
              <p>Last 7 days</p>
            </div>
          </div>

          {/* blue box */}
          <div className="home_left_boxes_blue">
            <ArrowUpWhite height={12} width={12} />

            <p>2 units</p>
            <p>Lekki Cassava Farms</p>
            <p>(N19,253.01)</p>
            <ArrowDownWhite height={12} width={12} />
            <p>see all</p>
          </div>

          {/* third box section */}
          <div className="home_left_boxes_thirdboxes">
            {/* orange box */}
            <div className="home_left_boxes_thirdboxes_orange">
              <p>- (N 5,000)</p>
              <div>
                <p>3 days left</p> <span>1.0%</span>
              </div>
            </div>

            {/* tomato box */}
            <div className="home_left_boxes_thirdboxes_tomato">
              <HandshakeIcon height={30} width={30} />
              <p>Trade</p>
            </div>
          </div>
        </div>
      </div>
      <div className="home_right">
        <NavbarIcons />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <QuickInvest />
        </div>
      </div>
    </div>
  );
}
