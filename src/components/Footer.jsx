import { useTranslation } from 'react-i18next'
import { fbIcon, logo, masterIcon, msIcon, paypalIcon, spIcon, tgIcon, visaIcon, vkIcon, wsIcon } from '../assets/data'

const Footer = () => {

    const { t } = useTranslation('footer')
    return (
        <footer>
            <div className="container py-20 grid lg:grid-cols-5 gap-10">
                <div className='space-y-4 lg:col-span-3 '>
                    <div className='flex items-center justify-between'>
                        <a href="#"><img src={logo} alt="logo" /></a>
                        <div className='space-y-1 block md:hidden text-end'>
                            <a className='text-26 font-bold text-yellow block ' href="tel:+998939170731">998 93-917-07-31</a>
                            <button className='light-btn !py-2'>{t('request_call')}</button>
                        </div>
                    </div>
                    <div className='font-bold flex space-x-10 text-10 md:text-base'>
                        <p >{t('calories_composition')}</p>
                        <p>{t('legal_info')}</p>
                    </div>
                    <p className='font-bold text-xs md:text-base'>{t('we_on_social')}</p>
                    <ul className='grid grid-cols-3 text-10 md:text-sm gap-y-3'>
                        <li><a href="#">{t('youtube')}</a></li>
                        <li><a href="#">{t('instagram')}</a></li>
                        <li><a href="#">{t('moscow_address')}</a></li>
                        <li><a href="#">{t('facebook')}</a></li>
                        <li><a href="#">{t('vk')}</a></li>
                        <li><a href="#">{t('vernadsky_street')}</a></li>
                    </ul>
                    <div className='hidden md:flex justify-between items-center'>
                        <p>{t('rights_reserved')}</p>
                        <ul className='flex space-x-3 items-center'>
                            <li>
                                <a href="#">
                                    <img src={visaIcon} alt="visa" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={paypalIcon} alt="visa" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={masterIcon} alt="visa" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='space-y-6 lg:col-span-2'>
                    <p className='font-bold text-sm'>{t('remaining_questions')}</p>
                    <ul className='grid grid-cols-6 md:grid-cols-4 gap-4 '>
                        <li className='social-btn'>
                            <a href="#">
                                <img src={wsIcon} alt="icon" />
                            </a>
                        </li>
                        <li className='social-btn'>
                            <a href="#">
                                <img src={spIcon} alt="icon" />
                            </a>
                        </li>
                        <li className='social-btn'>
                            <a href="#">
                                <img src={msIcon} alt="icon" />
                            </a>
                        </li>
                        <li className='social-btn'>
                            <a target='_blank' href="https://t.me/fibo_web_app_bot">
                                <img src={tgIcon} alt="icon" />
                            </a>
                        </li>
                        <li className='social-btn'>
                            <a href="#">
                                <img src={fbIcon} alt="icon" />
                            </a>
                        </li>
                        <li className='social-btn'>
                            <a href="#">
                                <img src={vkIcon} alt="icon" />
                            </a>
                        </li>
                        <li className='social-btn col-span-6 md:col-span-2'>
                            <a target='_blank' href="https://t.me/fibo_web_app_bot" >{t('contact_us')}</a>
                        </li>
                    </ul>
                    <div className='space-y-3 hidden md:block'>
                        <a className='text-26 font-bold text-yellow block' href="tel:+998930360152">998 93-036-01-52</a>
                        <button className='light-btn'>{t('request_call')}</button>
                    </div>
                    <div className='flex md:hidden justify-between items-center '>
                        <p className='text-10'>{t('rights_reserved')}</p>
                        <ul className='flex space-x-3 items-center'>
                            <li>
                                <a href="#">
                                    <img src={visaIcon} alt="visa" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={paypalIcon} alt="visa" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={masterIcon} alt="visa" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer