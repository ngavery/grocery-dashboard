import { useState } from 'react';
import {
  LineChart,
  BarChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { useTranslation } from 'react-i18next';
import foodData from '../data/foodPrices';
import '../styles/DynamicChart.css';

const DynamicChart = () => {
  const { t } = useTranslation();

  const foodLabelMap = {
    broccoli: t('Broccoli (per unit)'),
    eggs: t('Eggs (per dozen)'),
    milk: t('Milk (per litre)'),
    bread: t('Bread (per 675g)'),
    chicken: t('Chicken breast (per kg)')
  };

  const [chartType, setChartType] = useState('line');
  const [yearRange, setYearRange] = useState({
    start: '2017',
    end: '2025'
  });

  const [selectedFood, setSelectedFood] = useState('all'); // NEW STATE

  const allYears = Object.keys(foodData.broccoli);

  const filteredYears = allYears.filter(
    year => year >= yearRange.start && year <= yearRange.end
  );

  const chartData = filteredYears.map(year => {
    const yearData = { year };
    Object.keys(foodData).forEach(food => {
      yearData[food] = foodData[food][year];
    });
    return yearData;
  });

  const colors = ['#82ca9d', '#ffc658', '#0088FE', '#7e5745ff', '#cd859eff'];

  const availableFoods = Object.keys(foodData);

  return (
    <div className="chart-container">
      <h3>{t('Graph of Food Prices Over Time')}</h3>

      <div className="controls">
        {/* Chart Type Dropdown */}
        <label>{t('Chart Type')}:</label>
        <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
          <option value="line">{t('Line Chart')}</option>
          <option value="bar">{t('Bar Chart')}</option>
        </select>

        {/* Food Filter Dropdown */}
        <label style={{ marginLeft: '1rem' }}>{t('Select Item')}:</label>
        <select value={selectedFood} onChange={(e) => setSelectedFood(e.target.value)}>
          <option value="all">{t('All')}</option>
          {availableFoods.map(food => (
            <option key={food} value={food}>
              {t(food.charAt(0).toUpperCase() + food.slice(1))}
            </option>
          ))}
        </select>

        {/* Year Range Selectors */}
        <div className="year-range" style={{ marginTop: '1rem' }}>
          <span>{t('From')}:</span>
          <select
            value={yearRange.start}
            onChange={(e) => setYearRange({ ...yearRange, start: e.target.value })}
          >
            {allYears.map(year => (
              <option key={`start-${year}`} value={year}>{year}</option>
            ))}
          </select>

          <span>{t('To')}:</span>
          <select
            value={yearRange.end}
            onChange={(e) => setYearRange({ ...yearRange, end: e.target.value })}
          >
            {allYears.map(year => (
              <option key={`end-${year}`} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Chart display */}
      <ResponsiveContainer width="100%" height={400}>
        {chartType === 'line' ? (
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" label={{ value: t('Year'), position: 'insideBottom', offset: -5 }} />
            <YAxis label={{ value: `${t('Price')} (CAD)`, angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />           
            {(selectedFood === 'all' ? availableFoods : [selectedFood]).map((food, idx) => (
              <Line
                key={food}
                type="monotone"
                dataKey={food}
                stroke={colors[idx % colors.length]}
                name={foodLabelMap[food]}
                strokeWidth={2}
              />
            ))}
          </LineChart>
        ) : (
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" label={{ value: t('Year'), position: 'insideBottom', offset: -5 }} />
            <YAxis label={{ value: `${t('Price')} (CAD)`, angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />            
            {(selectedFood === 'all' ? availableFoods : [selectedFood]).map((food, idx) => (
              <Bar
                key={food}
                dataKey={food}
                fill={colors[idx % colors.length]}
                name={foodLabelMap[food]}

              />
            ))}
          </BarChart>
        )}
      </ResponsiveContainer>
      
    </div>
  );
};

export default DynamicChart;
