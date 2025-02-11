import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import solarImage from './solar-panel.webp';
import './App.css';

function App() {
  const hourlyData = [
    { time: '00:00', consumption: 20 },
    { time: '01:00', consumption: 18 },
    { time: '02:00', consumption: 15 },
    { time: '03:00', consumption: 12 },
    { time: '04:00', consumption: 10 },
    { time: '05:00', consumption: 15 },
    { time: '06:00', consumption: 30 },
    { time: '07:00', consumption: 50 },
    { time: '08:00', consumption: 70 },
    { time: '09:00', consumption: 90 },
    { time: '10:00', consumption: 120 },
    { time: '11:00', consumption: 150 },
    { time: '12:00', consumption: 180 },
    { time: '13:00', consumption: 200 },
    { time: '14:00', consumption: 220 },
    { time: '15:00', consumption: 210 },
    { time: '16:00', consumption: 190 },
    { time: '17:00', consumption: 170 },
    { time: '18:00', consumption: 150 },
    { time: '19:00', consumption: 130 },
    { time: '20:00', consumption: 100 },
    { time: '21:00', consumption: 80 },
    { time: '22:00', consumption: 60 },
    { time: '23:00', consumption: 40 },
  ];

  const monthlyData = [
    { month: 'Ian', consum: 1200 },
    { month: 'Feb', consum: 1500 },
    { month: 'Mar', consum: 1800 },
    { month: 'Apr', consum: 2000 },
    { month: 'Mai', consum: 2200 },
    { month: 'Iun', consum: 2500 },
  ];

  const energySources = [
    { name: 'Solar', value: 65 },
    { name: 'Hidro', value: 18 },
    { name: 'Rețea', value: 17 },
  ];
  const COLORS = ['#48bb78', '#4299e1', '#ed8936'];

  const solarProductionData = [
    { day: 'Luni', productie: 100 },
    { day: 'Marți', productie: 150 },
    { day: 'Miercuri', productie: 200 },
    { day: 'Joi', productie: 180 },
    { day: 'Vineri', productie: 220 },
    { day: 'Sâmbătă', productie: 250 },
    { day: 'Duminică', productie: 230 },
  ];

  return (
    <div className="dashboard">
      <div className="header-section">
        <h1>Energie Verde pentru un Viitor Sustenabil</h1>
        <p className="consumption-banner">
          Consum total curent: <span>380 kWh</span>
        </p>
        <p className="description">
          Folosim panouri fotovoltaice de înaltă calitate pentru a transforma energia solară în electricitate.
        </p>
      </div>

      <div className="solar-hero">
        <img 
          src={solarImage} 
          alt="Panouri Fotovoltaice" 
          className="hero-image"
        />
        <div className="image-overlay">
          <p>Sistem instalat în 2023 | Economisim 15 tone CO2/an</p>
        </div>
      </div>

      <div className="inline-stats">
        <div className="stat-item">
          <h3>🌞 Solar</h3>
          <p>65% din consum</p>
        </div>
        <div className="stat-item">
          <h3>💧 Hidro</h3>
          <p>18% din consum</p>
        </div>
        <div className="stat-item">
          <h3>⚡ Rețea</h3>
          <p>17% din consum</p>
        </div>
      </div>

      <div className="chart-container">
        <h2>Consum Orar (24h)</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={hourlyData}>
            <XAxis dataKey="time" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="consumption" 
              stroke="#48bb78" 
              strokeWidth={2}
              dot={{ fill: '#48bb78', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <h2>Consum Lunar</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={monthlyData}>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Bar 
              dataKey="consum" 
              fill="#4299e1" 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <h2>Distribuția Surse de Energie</h2>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={energySources}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {energySources.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <h2>Producție Solară (Săptămânală)</h2>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={solarProductionData}>
            <XAxis dataKey="day" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area 
              type="monotone" 
              dataKey="productie" 
              stroke="#ed8936" 
              fill="#f6ad55" 
              fillOpacity={0.6}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default App;