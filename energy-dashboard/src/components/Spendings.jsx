import React from 'react';

const Spendings = ({ spendings }) => {
  return (
    <div className="spendings">
      <h2>Costuri și Producție</h2>
      <div className="spending-item">
        <h3>Hydro Energy</h3>
        <p>{spendings.hydro} KWH</p>
      </div>
      <div className="spending-item">
        <h3>Solar Production</h3>
        <p>{spendings.solar} KWH</p>
      </div>
      <div className="spending-item">
        <h3>Cost Anual</h3>
        <p>${spendings.annualCost}</p>
      </div>
      <div className="spending-item">
        <h3>Consum Lunar</h3>
        <p>{spendings.monthlyConsumption} kWh</p>
      </div>
    </div>
  );
};

export default Spendings;