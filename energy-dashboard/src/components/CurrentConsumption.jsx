import React from 'react';

const CurrentConsumption = ({ consumption }) => {
  return (
    <div className="current-consumption">
      <h2>Consumul Actual de Energie</h2>
      <p>{consumption} kWh</p>
    </div>
  );
};

export default CurrentConsumption;