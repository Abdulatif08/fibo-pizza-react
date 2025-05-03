import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { incrementQuantity, decrementQuantity, removeFromCard } from '../store/slices/cardSlice';
import gift from '../assets/gift/empty.gif';

const Card = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.card.data);
  const { t } = useTranslation('header');
  const currentLanguage = t('lng');

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 flex flex-col items-center justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">{t('cart')}</h2>
        <img className="mx-auto my-6 sm:my-8 w-32 h-32 md:w-48 md:h-48 object-contain" src={gift} alt="Empty cart" />
        <p className="text-base sm:text-lg text-gray-600 text-center">{t('empty_cart_message')}</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4 py-10 md:py-12 lg:py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">{t('cart')}</h2>
      <ul className="space-y-4 sm:space-y-6 md:space-y-8">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition flex flex-col sm:flex-row items-center justify-between p-3 sm:p-4 md:p-6"
          >
            <img
              src={item.img}
              alt={item.title[currentLanguage] || item.title['en']}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-full mb-2 sm:mb-0 sm:mr-4"
            />

            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-sm sm:text-lg font-semibold text-gray-900">
                {item.title[currentLanguage] || item.title['en']}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                {item.description[currentLanguage] || item.description['en']}
              </p>
            </div>

            <div className="text-yellow-500 font-bold text-base sm:text-lg mt-2 sm:mt-0 sm:mx-4">
              {item.price} UZS
            </div>

            <div className="flex items-center space-x-1 sm:space-x-2 bg-gray-100 px-1.5 py-0.5 rounded-lg">
              <button
                onClick={() => dispatch(decrementQuantity(item.id))}
                className="text-lg text-gray-600 hover:text-gray-800 focus:outline-none sm:text-base"
              >
                -
              </button>
              <span className="text-gray-800 text-sm sm:text-base">{item.quantity}</span>
              <button
                onClick={() => dispatch(incrementQuantity(item.id))}
                className="text-gray-600 hover:text-gray-800 focus:outline-none text-sm sm:text-base"
              >
                +
              </button>
            </div>

            <button
              onClick={() => dispatch(removeFromCard(item.id))}
              className="text-lg sm:text-xl text-gray-400 hover:text-red-600 ml-2 sm:ml-3 md:ml-4 focus:outline-none"
            >
              ×
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6 md:mt-8 lg:mt-10 text-right text-lg md:text-xl lg:text-2xl font-bold text-yellow-800">
        {t('total')}: <span className="text-yellow-500">{totalPrice} UZS</span>
      </div>
    </div>
  );
};

export default Card;
