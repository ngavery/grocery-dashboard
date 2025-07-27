import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import foodData from '../data/foodPrices';
import '../styles/FoodTable.css';

const FoodTable = () => {
  const { t, i18n } = useTranslation();

  const [yearRange, setYearRange] = useState({
    start: '2017',
    end: '2025'
  });

  const allYears = Object.keys(foodData.broccoli).sort();

  const filteredYears = allYears.filter(
    year => year >= yearRange.start && year <= yearRange.end
  );

  const currencyFormatter = new Intl.NumberFormat(i18n.language, {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 2
  });

  return (
    <div className="table-container">
      <h3>{t('Table of Food Prices Over Time')}</h3>

      <div className="year-range-controls">
        <div className="year-selector">
          <label>{t('From')}:</label>
          <select 
            value={yearRange.start}
            onChange={(e) => setYearRange({ ...yearRange, start: e.target.value })}
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
            onChange={(e) => setYearRange({ ...yearRange, end: e.target.value })}
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
                <td>{currencyFormatter.format(foodData.broccoli[year])}</td>
                <td>{currencyFormatter.format(foodData.eggs[year])}</td>
                <td>{currencyFormatter.format(foodData.milk[year])}</td>
                <td>{currencyFormatter.format(foodData.bread[year])}</td>
                <td>{currencyFormatter.format(foodData.chicken[year])}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodTable;
