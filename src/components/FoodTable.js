import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import foodData from '../data/foodPrices';
import '../styles/FoodTable.css';

const FoodTable = () => {
  const { t } = useTranslation();

  const [yearRange, setYearRange] = useState({
    start: '2017',
    end: '2025'
  });

  const allYears = Object.keys(foodData.broccoli).sort();

  const filteredYears = allYears.filter(
    year => year >= yearRange.start && year <= yearRange.end
  );

  return (
    <div className="table-container">
      <h3>{t('Table of Food Prices Over Time')}</h3>

      <div className="year-range-controls">
        <div className="year-selector">
          <label>{t('From')}:</label>
          <select 
            value={yearRange.start}
            onChange={(e) => setYearRange({...yearRange, start: e.target.value})}
          >
            {allYears.map(year => (
              <option key={`start-${year}`} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <div className="year-selector">
          <label>{t('To')}:</label>
          <select 
            value={yearRange.end}
            onChange={(e) => setYearRange({...yearRange, end: e.target.value})}
          >
            {allYears.map(year => (
              <option key={`end-${year}`} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="food-price-table">
          <thead>
            <tr>
              <th className="year-column">{t('Year')}</th>
              <th>{t('Broccoli (per unit)')}</th>
              <th>{t('Eggs (per dozen)')}</th>
              <th>{t('Milk (per litre)')}</th>
              <th>{t('Bread (per 675g)')}</th>
              <th>{t('Chicken breast (per kg)')}</th>
            </tr>
          </thead>
          <tbody>
            {filteredYears.map(year => (
              <tr key={year}>
                <td className="year-column">{year}</td>
                <td>{foodData.broccoli[year].toFixed(2)} $</td>
                <td>{foodData.eggs[year].toFixed(2)} $</td>
                <td>{foodData.milk[year].toFixed(2)} $</td>
                <td>{foodData.bread[year].toFixed(2)} $</td>
                <td>{foodData.chicken[year].toFixed(2)} $</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodTable;
