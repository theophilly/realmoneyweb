import React from 'react';
import Label from './Label';

export default function LoanComponent({ amount, duration, cv, sub, onclick }) {
  return (
    <div className="loancomponent">
      <div>
        <Label sub="Amount" title={amount} />
        <div>
          <Label sub="Duration" title={duration} />
        </div>
      </div>
      <div>
        <div>
          <Label sub="Collateral Value" title={cv} />
          <p className="plus">+N{sub}</p>
        </div>
        <button onClick={() => onclick()}>Accept</button>
      </div>
    </div>
  );
}
