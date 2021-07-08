import React from 'react';
import ArrowUpGreen from '../icons/ArrowUpGreen';
import HeartWhite from '../icons/HeartWhite';

export default function MarketDetails({
  cartitems,
  setCartitems,
  name,
  percent,
  value,
  number,
  dec,
  SetCurrentMarket,
}) {
  const controlCartItem = (action) => {
    if (action === 'INC') {
      setCartitems(cartitems + 1);
    } else if (action === 'DEC') {
      if (cartitems !== 1) {
        setCartitems(cartitems - 1);
      }
    }
  };
  return (
    <div className="marketdetails">
      {/* upper section */}
      <div className="marketdetails_upper">
        <span
          onClick={() => {
            SetCurrentMarket(null);
            setCartitems(1);
          }}
          style={{
            color: '#255380',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          Market
        </span>
        <span style={{ color: '#999999' }}> &gt; Real Estate &gt; </span>
        <span style={{ color: '#999999' }}>{name}</span>
      </div>

      {/* middle */}
      <p className="name">{name}</p>

      {/* lower */}
      <div className="marketdetails_lower">
        <div className="details">
          <img src="./home1.jpg"></img>
          <p>{dec}</p>
        </div>
        <div className="add_to_cart">
          {/* upper */}
          <div className="upper">
            <p>{percent}%</p>
            <div className="inner">
              <ArrowUpGreen height={11} width={11} />
              <span>ROI</span>
            </div>
          </div>
          {/* middle */}
          <p>
            N{value}/unit . {number}
          </p>

          {/* increment */}
          <div className="increment">
            <div>
              <span onClick={() => controlCartItem('DEC')}> &#8722;</span>
              <span>{cartitems}</span>
              <span onClick={() => controlCartItem('INC')}>&#43;</span>
            </div>
            <span style={{ color: '#B3B3B3' }}>Units</span>
          </div>

          {/* button */}
          <button>Add to Cart</button>
          <div className="heart">
            <HeartWhite height={18} width={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
