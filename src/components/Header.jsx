import { logo, starIcon, yandexEdaIcon,  likeIcon } from '../assets/data';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { navLinksData } from '../assets/data';

const Header = () => {
  const { t, i18n } = useTranslation('header');
  const [menuOpen, setMenuOpen] = useState(false);
  const currentLanguage = i18n.language;
  const { pathname } = useLocation();
  const cartLength = useSelector((store) => store.cart.data.length);
  const navigate = useNavigate();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleRequestCallClick = (e) => {
    e.preventDefault();
  };

  const toCart = () => {
    navigate('/cart');
  };

  const navLinks = navLinksData[currentLanguage] || navLinksData.en;

  return (
    <header className={`${menuOpen ? 'bg-yellow' : 'bg-white'} sticky -top-24 z-50`}>
      <div className="container py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <div className="hidden lg:block">
              <p className="font-semibold text-lg">
                {t('delivery')} <span className="text-yellow">{t('moscow')}</span>
              </p>
              <div className="flex items-center space-x-2 font-bold text-sm">
                <img src={yandexEdaIcon} alt="yandex" />
                <span>{t('yandex-food')} • 4.8</span>
                <img src={starIcon} alt="star" />
                <span>{t('delivery-time')} • {t('time-from')}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={handleRequestCallClick} className="btn-transparent flex items-center space-x-1">
              <span>{t('request-call')}</span>
            </button>

            <a href="tel:+998939170731" className="hidden md:block font-bold text-yellow text-2xl">
              998 93 036 01 52
            </a>

            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden flex flex-col space-y-1">
              <span className={`h-0.5 w-6 bg-black transform transition ${menuOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <span className={`h-0.5 w-6 bg-black transition ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-6 bg-black transform transition ${menuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </button>
          </div>
        </div>

        <div className="hidden lg:flex justify-between items-center mt-6">
          <nav>
            <ul className="flex space-x-8">
              {navLinks.map((item, idx) => (
                <li key={idx}>
                  <NavLink
                    to={`/${item.link}`}
                    className={({ isActive }) =>
                      `font-semibold uppercase-text ${isActive ? 'text-yellow' : ''}`
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-5">
            <select
              value={currentLanguage}
              onChange={(e) => changeLanguage(e.target.value)}
              className="border rounded-2xl px-3 py-1 text-sm bg-white"
            >
              <option value="en">En</option>
              <option value="ru">Ru</option>
              <option value="uz">Uz</option>
            </select>

            <Link to="/favorites" className="flex gap-3 btn-transparent font-semibold text-sm border border-delivery rounded-2xl px-4 py-1  transition">
             {t('favorites')}
             <img className='mt-1 hover:text-white transition ' src={likeIcon} alt="ikeIcon" />
            </Link>

            <button onClick={toCart} className="btn-yellow">
              {t('card')} | {cartLength}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="bg-yellow py-4 lg:hidden">
          <nav className="container">
            <ul className="flex flex-col space-y-4 items-center">
              {navLinks.map((item, idx) => (
                <li key={idx}>
                  <NavLink
                    to={`/${item.link}`}
                    className={({ isActive }) =>
                      `font-semibold uppercase-text ${isActive ? 'text-black' : ''}`
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
              <li>
                <Link to="/favorites" className="font-semibold uppercase-text">
                favorites
                </Link>
              </li>
              <li>
                <button onClick={toCart} className="font-semibold uppercase-text">
                  {t('card')} | {cartLength}
                </button>
              </li>
              <li>
                <select
                  value={currentLanguage}
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="border rounded-2xl px-3 py-1 text-sm bg-white"
                >
                  <option value="en">En</option>
                  <option value="ru">Ru</option>
                  <option value="uz">Uz</option>
                </select>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;