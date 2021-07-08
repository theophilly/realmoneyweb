import React from 'react';
import ArrowUpGreen from '../icons/ArrowUpGreen';

export default function MarketDetails({ cartitems, setCartitems }) {
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
          style={{
            color: '#255380',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          Market
        </span>
        <span style={{ color: '#999999' }}> &gt; Real Estate &gt; </span>
        <span style={{ color: '#999999' }}>Ibeju Estate</span>
      </div>

      {/* middle */}
      <p className="name">Ibeju Estate</p>

      {/* lower */}
      <div className="marketdetails_lower">
        <div className="details">
          <img src="./home1.jpg"></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare
            nec justo a efficitur. Aliquam et magna ornare ipsum suscipit congue
            in sed lacus. Maecenas rhoncus placerat hendrerit. Nunc vel enim
            lorem. Curabitur mollis malesuada ullamcorper. Nam volutpat, tortor
            id tristique ullamcorper, erat purus ultricies turpis, quis accumsan
            ligula quam non mi. Morbi sed gravida ligula.{' '}
          </p>
        </div>
        <div className="add_to_cart">
          {/* upper */}
          <div className="upper">
            <p>15%</p>
            <div className="inner">
              <ArrowUpGreen height={11} width={11} />
              <span>ROI</span>
            </div>
          </div>
          {/* middle */}
          <p>N8,000/unit . 53</p>

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
        </div>
      </div>
    </div>
  );
}
