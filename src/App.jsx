import { useEffect } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import Navbar from './components/Header';
import Footer from './components/Footer';


import Home from './pages/Home';
import Pizza from './pages/Pizza';
import Beverages from './pages/Beverages';
import Paste from './pages/Paste';
import Salads from './pages/Salads';
import Soups from './pages/Soups';
import Dessert from './pages/Dessert';
import Stock from './pages/Stock';
import Location from './pages/Location';
import Favorites from './pages/Favorites';
import Cart from './pages/Cart';

import 'react-toastify/dist/ReactToastify.css';
import { addToCart } from './store/slices/cartSlice';

const App = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { t } = useTranslation();


  const cartItems = useSelector((state) => state.cart.data);

  const handleAddToCart = (item) => {
    const found = cartItems.some(i => i.id === item.id);
    if (!found) {
      dispatch(addToCart(item));
      toast.success(t('product_added_to_cart'), {
        position: "bottom-right",
        autoClose: 3000,
        theme: "light",
      });
    } else {
      toast.info(t('product_already_in_cart'), {
        position: "bottom-right",
        autoClose: 3000,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pizza" element={<Pizza addToCart={handleAddToCart} />} />
          <Route path="/beverages" element={<Beverages addToCart={handleAddToCart} />} />
          <Route path="/dessert" element={<Dessert addToCart={handleAddToCart} />} />
          <Route path="/paste" element={<Paste addToCart={handleAddToCart} />} />
          <Route path="/salad" element={<Salads addToCart={handleAddToCart} />} />
          <Route path="/soups" element={<Soups addToCart={handleAddToCart} />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/location" element={<Location />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
