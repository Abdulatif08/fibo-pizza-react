import { useTranslation } from 'react-i18next';
import { delivery_icon } from '../assets/data'

const Location = () => {

    const { t, i18n } = useTranslation('header');
    const currentLanguage = i18n.language;
      const data = [
            {
                img: delivery_icon,
                title: {
                    uz: "Turli xil toifalardagi keng assortimentdagi mahsulotlarimizni o'rganing",
                    ru: "Изучите наш широкий ассортимент товаров разных категорий",
                    en: "Explore our wide selection of products across various categories"
                }
            },
            {
                img: delivery_icon,
                title: {
                    uz: "Buyurtmalaringizni qisqa muddat ichida xavfsiz yetkazib beramiz.",
                    ru: "Мы доставим ваши заказы в кратчайшие сроки и безопасно.",
                    en: "We deliver your orders promptly and securely."
                }
            },
            {
                img: delivery_icon,
                title: {
                    uz: "Barcha mahsulotlarimiz sifat tekshiruvidan o'tgan va kafolatli.",
                    ru: "Все наши товары прошли проверку качества и имеют гарантию.",
                    en: "All our products are quality-checked and guaranteed."
                }
            },
            {
                img: delivery_icon,
                title: {
                    uz: "Kun-u tun ishlaydigan mijozlarni qo'llab-quvvatlash xizmatimiz bilan bog'laning.",
                    ru: "Свяжитесь с нашей круглосуточной службой поддержки клиентов.",
                    en: "Contact our 24/7 customer support service."
                }
            }
        ];
    return (
        <section className='bg-light-gray py-20'>
        <div className="container">
            <h2 data-aos="fade-up" className='text-yellow text-center mb-5'>{t('payment_and_delivery')}</h2>
            <ul className='grid-4-list !gap-y-14'>
                {data.map((i, index) => {
                    return (
                        <li data-aos="fade-up" className='bg-white rounded-14 px-5 pb-5 relative pt-9 flex justify-center ' key={index}>
                            <div className='w-77 h-77 rounded-full flex items-center justify-center mx-auto bg-white absolute -top-1/3'>
                                <img src={i.img} alt={i.title} />
                            </div>
                            <p className='text-sm font-bold text-center text-delivery'>{i.title[currentLanguage]}</p>
                        </li>
                    )
                })}
            </ul>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.0148105380226!2d69.59864317555004!3d40.849598629181266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae2dd0a7182d4b%3A0x4cbfcb1de9db07fc!2siTech!5e0!3m2!1suz!2s!4v1724665012350!5m2!1suz!2s" className='w-full h-80 mt-8 rounded-14' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
    )
}

export default Location