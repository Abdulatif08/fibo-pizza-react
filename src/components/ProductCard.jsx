import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../store/slices/likeSlice";
import { addCard } from "../store/slices/cardSlice";
import { useTranslation } from "react-i18next";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation("header");

  const currentLanguage = i18n.language;

  const likedProducts = useSelector((state) => state.like.items);
  const isLiked = likedProducts.some((item) => item.id === product.id);

  const [addedToCart, setAddedToCart] = useState(false);
  const cardItems = useSelector((state) => state.card.data);

  const handleLike = () => {
    dispatch(toggleLike(product));
  };

  const handleAddToCart = () => {
    const found = cardItems.some((item) => item.id === product.id);

    if (!found) {
      dispatch(addCard(product));
      setAddedToCart(true);
      toast.success(t("product_added_to_cart"), {
        position: "bottom-right",
        autoClose: 3000,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/card");
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
      className="p-4 relative hover:shadow-lg group cursor-pointer duration-300 border border-[#F3F3F7] rounded-14 flex flex-col"
    >
      <button
        onClick={handleLike}
        className="absolute top-5 right-5 text-red-500 text-xl z-10"
      >
        {isLiked ? <FaHeart /> : <FaRegHeart />}
      </button>

      <img
        className="w-80 h-64 mx-auto rounded-full"
        src={product.img}
        alt={product.title[currentLanguage]}
      />

      <div className="space-y-3 flex-grow mt-4">
        <h3 className="font-bold">{product.title[currentLanguage]}</h3>
        <p className='text-13 font-medium text-cart-description'>
        {product.description[currentLanguage]}</p>
      </div>

      <div className="flex justify-between items-center mt-3">
        <p className="text-26 font-bold">{product.price} UZS</p>

        {!addedToCart && (
          <button
            onClick={handleAddToCart}
            className="btn-yellow !py-1.5 !text-white duration-300 text-sm group-hover:!text-gray"
          >
            {t("add_to_cart")}
          </button>
        )}
      </div>
    </li>
  );
};

export default ProductCard;
