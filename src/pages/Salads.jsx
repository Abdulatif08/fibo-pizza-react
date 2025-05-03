import { useTranslation } from 'react-i18next';
import { salads } from '../assets/salad/salads';
import ProductCard from '../components/ProductCard';

const Salads = () => {
    const { t } = useTranslation('header');

    return (
        <section>
            <div className="container">
                <h2 data-aos="fade-up">{t('salads')}</h2>

                <ul className='grid-4-list'>
                    {salads.map(salad => {
                        return (
                            <ProductCard key={salad.id} product={salad} />
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

export default Salads;
