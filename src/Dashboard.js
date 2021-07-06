import React, { useState } from 'react';

import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Market from './pages/Market';
import Portfolio from './pages/Portfolio';
import Loans from './pages/Loans';

function Dashboard() {
  const [page, setPage] = useState('Home');
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar changePage={setPage} />
      {page === 'Home' && <Home />}
      {page === 'Market' && <Market />}
      {page === 'Loans' && <Loans />}
      {page === 'Portfolio' && <Portfolio />}
    </div>
  );
}

export default Dashboard;
