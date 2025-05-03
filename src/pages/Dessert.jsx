import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dessert_data } from '../assets/data.js';
import ProductCard from '../components/ProductCard';

function Dessert() {
  const { t } = useTranslation('header');

  return (
    <div className="container p-4">
      <h2 className="text-2xl font-bold mb-4">{t('Dessert')}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Dessert_data.map((dessert) => (
          <ProductCard key={dessert.id} product={dessert} />
        ))}
      </ul>
    </div>
  );
}

export default Dessert;
