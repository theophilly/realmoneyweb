import React from 'react';

export default function Label({ sub, title }) {
  return (
    <div className="label">
      <p>{sub}</p>
      <p>{title}</p>
    </div>
  );
}
