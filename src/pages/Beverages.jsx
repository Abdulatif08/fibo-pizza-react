import { useTranslation } from 'react-i18next';
import { drinks } from '../assets/drinks/drinks'
import ProductCard from '../components/ProductCard';

const Beverages = () => {
    const { t } = useTranslation('header')

    return (
        <section>
            <div className="container">
                <h2 data-aos="fade-up">{t('drinks')}</h2>

                <ul className='grid-4-list'>
                    {drinks.map(pizza => {
                        return (
                            
                            <ProductCard key={pizza.id} product={pizza} decriaption={pizza.description} />
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Beverages