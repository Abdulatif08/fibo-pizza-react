import React, { useEffect } from 'react';
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
import Card from './pages/Card';

import 'react-toastify/dist/ReactToastify.css';
import { addCard } from './store/slices/cardSlice';

const App = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;
  const cartItems = useSelector((state) => state.card.data);

  const handleAddToCart = (item) => {
    const found = cartItems.some(i => i.id === item.id);
    if (!found) {
      dispatch(addCard(item));
      toast.success(`Muvaffaqiyatli qo'shildi!`, {
        position: "bottom-right",
        autoClose: 3000,
        theme: "light",
      });
    } else {
      toast.info(`Bu mahsulot oldin qo'shilgan!`, {
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
          <Route path="/pizza" element={<Pizza addToCard={handleAddToCart} />} />
          <Route path="/beverages" element={<Beverages addToCard={handleAddToCart} />} />
          <Route path="/dessert" element={<Dessert addToCard={handleAddToCart} />} />
          <Route path="/paste" element={<Paste addToCard={handleAddToCart} />} />
          <Route path="/salad" element={<Salads addToCard={handleAddToCart} />} />
          <Route path="/soups" element={<Soups addToCard={handleAddToCart} />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/location" element={<Location />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </main>

      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
