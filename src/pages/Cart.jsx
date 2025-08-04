
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../store/slices/cartSlice';
import gift from '../assets/gift/empty.gif';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.data);
  const { t, i18n } = useTranslation('header');
  const currentLanguage = i18n.language;

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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12 lg:py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">{t('cart')}</h2>
      
      <div className="space-y-4 md:space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 md:p-6"
          >
            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* Product Image */}
              <div className="flex-shrink-0">
                <img
                  src={item.img}
                  alt={item.title[currentLanguage] || item.title['en']}
                  className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {item.title[currentLanguage] || item.title['en']}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {item.description[currentLanguage] || item.description['en']}
                </p>
              </div>

              {/* Price */}
              <div className="flex-shrink-0">
                <div className="text-xl md:text-2xl font-bold text-yellow-600">
                  {item.price} UZS
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => dispatch(decrementQuantity(item.id))}
                  className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-md transition-colors"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="mx-3 text-base font-medium min-w-[2rem] text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => dispatch(incrementQuantity(item.id))}
                  className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-md transition-colors"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <div className="flex-shrink-0">
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                  title={t('remove')}
                >
                  ×
                </button>
              </div>
            </div>

            {/* Mobile layout for better spacing */}
            <div className="md:hidden mt-4 pt-4 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <div className="text-lg font-bold text-yellow-600">
                  {item.price} UZS × {item.quantity}
                </div>
                <div className="text-lg font-bold text-gray-900">
                  = {item.price * item.quantity} UZS
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total Section */}
      <div className="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
        <div className="flex justify-between items-center">
          <span className="text-xl md:text-2xl font-bold text-gray-800">
            {t('total')}:
          </span>
          <span className="text-2xl md:text-3xl font-bold text-yellow-600">
            {totalPrice.toLocaleString()} UZS
          </span>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="mt-6 text-center">
        <button className="w-full md:w-auto px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-lg rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
