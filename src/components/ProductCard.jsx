import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../store/slices/likeSlice";
import { addToCart } from "../store/slices/cartSlice";
import { useTranslation } from "react-i18next";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation("header");

  const currentLanguage = i18n.language;

  const likedProducts = useSelector((state) => state.like.items);
  const isLiked = likedProducts.some((item) => item.id === product.id);

  const [addedToCart, setAddedToCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.data);

  const handleLike = () => {
    dispatch(toggleLike(product));
  };

  const handleAddToCart = () => {
    const found = cartItems.some((item) => item.id === product.id);

    if (!found) {
      dispatch(addToCart(product));
      setAddedToCart(true);
      toast.success(t("product_added_to_cart"), {
        position: "bottom-right",
        autoClose: 3000,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/cart");
      }, 500);
    } else {
      toast.info(t("product_already_in_cart"), {
        position: "bottom-right",
        autoClose: 3000,
        theme: "light",
      });
    }
  };

  return (
    <li
      data-aos="fade-up"
      data-aos-duration="1000"
      className="p-4 md:p-6 relative hover:shadow-lg group cursor-pointer duration-300 border border-[#F3F3F7] rounded-2xl flex flex-col bg-white"
    >
      <button
        onClick={handleLike}
        className="absolute top-4 right-4 md:top-6 md:right-6 text-red-500 text-xl md:text-2xl z-10 hover:scale-110 transition-transform"
      >
        {isLiked ? <FaHeart /> : <FaRegHeart />}
      </button>

      <div className="relative mb-4">
        <img
          className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-xl mx-auto"
          src={product.img}
          alt={product.title[currentLanguage]}
        />
      </div>

      <div className="space-y-3 flex-grow">
        <h3 className="font-bold text-lg md:text-xl text-gray-900 overflow-hidden">
          {product.title[currentLanguage]}
        </h3>
        <p className="text-sm md:text-base font-medium text-gray-600 overflow-hidden">
          {product.description[currentLanguage]}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mt-4 pt-4">
        <p className="text-xl md:text-2xl font-bold text-yellow-600">
          {product.price.toLocaleString()} UZS
        </p>

        {!addedToCart ? (
          <button
            onClick={handleAddToCart}
            className="w-full sm:w-auto px-4 py-2 md:px-6 md:py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-sm md:text-base rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            {t("add_to_cart")}
          </button>
        ) : (
          <div className="w-full sm:w-auto px-4 py-2 md:px-6 md:py-3 bg-green-500 text-white font-semibold text-sm md:text-base rounded-xl text-center">
            ✓ Added to Cart
          </div>
        )}
      </div>
    </li>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.object.isRequired,
    description: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
