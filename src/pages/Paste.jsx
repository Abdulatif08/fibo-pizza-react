import { useTranslation } from 'react-i18next';
import { paste } from '../assets/paste/pasta'
import ProductCard from '../components/ProductCard';

const Paste = () => {

    const { t } = useTranslation('header')

    return (
        <section>
            <div className="container">
                <h2 data-aos="fade-up">{t('pasta')}</h2>

                <ul className='grid-4-list'>
                    {paste.map(pizza => {
                        return (
                            <ProductCard key={pizza.id} product={pizza} />
                        )
                    })}
                </ul>
            </div>
        </section >
    )
}

export default Paste