import React from 'react';
import Leaderboard from '../components/Leaderboard';
import NavbarIcons from '../components/NavbarIcons';

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="left">
        {/* first section */}
        <Leaderboard></Leaderboard>
      </div>
      <div className="right">
        <NavbarIcons />
      </div>
    </div>
  );
}
