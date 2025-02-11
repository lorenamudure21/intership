import React from 'react';

const EnergyStats = ({ stats }) => {
  return (
    <div className="energy-stats">
      <div className="stat">
        <h3>Lights</h3>
        <p>{stats.lights}%</p>
      </div>
      <div className="stat">
        <h3>Water</h3>
        <p>{stats.water}%</p>
      </div>
      <div className="stat">
        <h3>Energy</h3>
        <p>{stats.energy}%</p>
      </div>
    </div>
  );
};

export default EnergyStats;