import { useTranslation } from 'react-i18next';
import { soups } from '../assets/supi/soups';
import ProductCard from '../components/ProductCard';

const Soups = () => {
    const { t, } = useTranslation('header');

    return (
        <section>
            <div className="container">
                <h2 data-aos="fade-up">{t('soups')}</h2>

                <ul className='grid-4-list'>
                    {soups.map(soup => {
                        return (
                            <ProductCard key={soup.id} product={soup} />
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

export default Soups;
