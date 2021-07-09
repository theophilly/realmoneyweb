import React, { useState } from 'react';
import Leaderboard from '../components/Leaderboard';
import NavbarIcons from '../components/NavbarIcons';

export default function Loans() {
  const [active, setActive] = useState('request');
  return (
    <div className="loans">
      {/* first section */}
      <div className="loans_firstsection">
        <h2>Loans</h2>
        <div className="tabs">
          <span
            onClick={() => setActive('request')}
            className={active === 'request' && 'active'}
          >
            Request Loan
          </span>
          <span
            onClick={() => setActive('give')}
            className={active === 'give' && 'active'}
          >
            Give Loan
          </span>
          <span
            onClick={() => setActive('current')}
            className={active === 'current' && 'active'}
          >
            Current Loan
          </span>
        </div>
      </div>
    </div>
  );
}
