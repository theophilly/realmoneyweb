import React from 'react';
import CartIcon from '../icons/CartIcon';
import ChatIcon from '../icons/ChatIcon';

export default function NavbarIcons() {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div
        style={{
          display: 'flex',
          width: '80px',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '30px 0px',
        }}
      >
        <CartIcon height={22} width={22} />
        <ChatIcon height={18} width={18} />
      </div>
    </div>
  );
}
