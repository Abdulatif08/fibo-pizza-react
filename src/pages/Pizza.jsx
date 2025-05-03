import { useTranslation } from 'react-i18next';
import { pizza_data } from '../assets/data';
import ProductCard from '../components/ProductCard';

const Pizza = () => {
    const { t } = useTranslation('header');
  return (
    <section>
    <div className="container">
      <h2 data-aos="fade-up">{t('pizza')}</h2>

      <ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-10 pb-20'>
        {pizza_data.map(pizza => (
          <ProductCard key={pizza.id} product={pizza} />
        ))}
      </ul>
    </div>
  </section>
  )
}

export default Pizza
