import React from 'react';
import Label from './Label';

export default function LoanComponent() {
  return (
    <div className="loancomponent">
      <div>
        <Label sub="Amount" title="N10,000" />
        <div>
          <Label sub="Duration" title="2 Months" />
        </div>
      </div>
      <div>
        <div>
          <Label sub="Collateral Value" title="N20,000" />
          <p className="plus">+N10,000</p>
        </div>
        <button>Accept</button>
      </div>
    </div>
  );
}
