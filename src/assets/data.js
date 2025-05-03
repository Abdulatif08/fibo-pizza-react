import logo from './icon/logo.svg';
import yandexEdaIcon from './icon/yandex-eda.svg';
import starIcon from './icon/star.svg';

import slide1 from './images/hero-one.jpg';
import slide2 from './images/hero-two.jpg';

import prevIcon from './icon/prev.svg';
import nextIcon from './icon/next.svg';

import news_img from './icon/news-img.svg';

import Dessert1 from '../assets/dessertimg/Des1.jpg'
import Dessert2 from '../assets/dessertimg/Des2.webp'
import Dessert3 from '../assets/dessertimg/Des3.jpg'
import Dessert4 from '../assets/dessertimg/Des4.jpg'
import Dessert5 from '../assets/dessertimg/Des5.jpg'
import Dessert6 from '../assets/dessertimg/Des6.jpg'
import Dessert7 from '../assets/dessertimg/Des7.jpg'
import Dessert8 from '../assets/dessertimg/Des8.jpg'


// import  from '../assets/images/pizza.png'
import stock_img from './images/stock.jpg';

import delivery_icon from './icon/delivery.svg';
import pizza_img from './images/pizza.png';
import visaIcon from './icon/visa.svg';
import paypalIcon from './icon/paypal.svg';
import masterIcon from './icon/master_card.svg';

import tgIcon from './icon/telegram.svg';
import fbIcon from './icon/facebook.svg';
import vkIcon from './icon/vk.svg';
import msIcon from './icon/messenjer.svg';
import spIcon from './icon/scipe.svg';
import wsIcon from './icon/whatsap.svg';

import plusIcon from './icon/plus.svg';
import minusIcon from './icon/minus.svg';
import closeIcon from './icon/close.svg';

import likeIcon from './icon/heart.svg';
import likeFillIcon from './icon/heart-fill.svg';

import arrowLeftIcon from './icon/arrow-left-circle-fill.svg'

import emptyIcon from './gift/empty.gif';

// date.js or localization file
export const Button ={
  en :[
  {  title : 'Card'}
  ],
  ru :[
    {title : 'Корзина'}
  ],
  uz :[
    {
      title : 'Savat'
    }
  ]
};

export const navLinksData = {
    en: [
      { title: 'Home', link: 'Home' },
      { title: 'Pizza', link: 'pizza' },
      { title: 'Pasta', link: 'paste' },
      { title: 'Soups', link: 'soups' },
      { title: 'Salads', link: 'salad' },
      { title: 'Beverages', link: 'beverages' },
      { title: 'Dessert', link: 'dessert' },
      { title: 'Stock', link: 'stock' },
      { title: 'Location', link: 'Location' }
    ],
    ru: [
      { title: 'Главная', link: 'Home' },
      { title: 'Пицца', link: 'pizza' },
      { title: 'Паста', link: 'paste' },
      { title: 'Супы', link: 'soups' },
      { title: 'Салаты', link: 'salad' },
      { title: 'Напитки', link: 'beverages' },
      { title: 'Десерт', link: 'dessert' },
      { title: 'Акции', link: 'stock' },
      { title: 'Локация', link: 'Location' }
    ],
    uz: [
      { title: 'Bosh sahifa', link: 'Home' },
      { title: 'Pizza', link: 'pizza' },
      { title: 'Pasta', link: 'paste' },
      { title: 'Sho’rvalar', link: 'soups' },
      { title: 'Salatlar', link: 'salad' },
      { title: 'Ichimliklar', link: 'beverages' },
      { title: 'Desertlar', link: 'dessert' },
      { title: 'Aktsiyalar', link: 'stock' },,
      { title: 'Joylashuv', link: 'Location' }
    ]
  };
  
  export const add_to_cart_translations = {
    uz: "Savatga qo‘shish",
    ru: "Добавить в корзину",
    en: "Add to cart"
  };

export const Dessert_data = [
  {
    id: 1,
    img: Dessert1,
    title: {
      uz: "Shokoladli kek",
      en: "Chocolate Cake",
      ru: "Шоколадный торт"
    },
    description: {
      uz: "Mazali va yumshoq shokoladli kek",
      en: "Delicious and soft chocolate cake",
      ru: "Вкусный и мягкий шоколадный торт"
    },
    price: 25000,
  },
  {
    id: 2,
    img: Dessert2,
    title: {
      uz: "Qulupnayli mus",
      en: "Strawberry Mousse",
      ru: "Клубничный мусс"
    },
    description: {
      uz: "Yengil va shirin qulupnayli mus",
      en: "Light and sweet strawberry mousse",
      ru: "Лёгкий и сладкий клубничный мусс"
    },
    price: 28000,
  },
  {
    id: 3,
    img: Dessert3,
    title: {
      uz: "Tiramisu",
      en: "Tiramisu",
      ru: "Тирамису"
    },
    description: {
      uz: "Italyancha klassik shirinlik",
      en: "Classic Italian dessert",
      ru: "Классический итальянский десерт"
    },
    price: 30000,
  },
  {
    id: 4,
    img: Dessert4,
    title: {
      uz: "Pishiriqli cheesecake",
      en: "Baked Cheesecake",
      ru: "Запечённый чизкейк"
    },
    description: {
      uz: "Yumshoq va pishiriqli pishloqli shirinlik",
      en: "Soft and baked cheesecake",
      ru: "Мягкий и запечённый чизкейк"
    },
    price: 32000,
  },
  {
    id: 5,
    img: Dessert5,
    title: {
      uz: "Vanilli muzqaymoq",
      en: "Vanilla Ice Cream",
      ru: "Ванильное мороженое"
    },
    description: {
      uz: "Sovuq va tetiklashtiruvchi muzqaymoq",
      en: "Cold and refreshing ice cream",
      ru: "Холодное и освежающее мороженое"
    },
    price: 15000,
  },
  {
    id: 6,
    img: Dessert6,
    title: {
      uz: "Olmali pirog",
      en: "Apple Pie",
      ru: "Яблочный пирог"
    },
    description: {
      uz: "Issiq va yumshoq olmali pirog",
      en: "Warm and soft apple pie",
      ru: "Тёплый и мягкий яблочный пирог"
    },
    price: 27000,
  },
  {
    id: 7,
    img: Dessert7,
    title: {
      uz: "Limonli tart",
      en: "Lemon Tart",
      ru: "Лимонный тарт"
    },
    description: {
      uz: "Nordon va shirin limonli tart",
      en: "Tangy and sweet lemon tart",
      ru: "Кисло-сладкий лимонный тарт"
    },
    price: 26000,
  },
  {
    id: 8,
    img: Dessert8,
    title: {
      uz: "Berry Parfait",
      en: "Berry Parfait",
      ru: "Ягодный парфе"
    },
    description: {
      uz: "Yogurtli va mevali parfe",
      en: "Yogurt and berry layered parfait",
      ru: "Йогуртовый и ягодный парфе"
    },
    price: 29000,
  },
  {
  id: 9,
  img: Dessert5,
  title: {
    uz: "Vanilli muzqaymoq",
    en: "Vanilla Ice Cream",
    ru: "Ванильное мороженое"
  },
  description: {
    uz: "Sovuq va tetiklashtiruvchi muzqaymoq",
    en: "Cold and refreshing ice cream",
    ru: "Холодное и освежающее мороженое"
  },
  price: 15000,
},
];
  
const pizza_data = [
    {
        id: 1,
        img: pizza_img,
        title: {
            ru: 'С креветками и трюфелями',
            en: 'With shrimp and truffles',
            uz: 'Krevetka va trufellar bilan'
        },
        description: {
            ru: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
            en: 'Homemade fettuccine pasta, creamy sauce, shrimp, truffle oil, black pepper, parmesan. 350 g',
            uz: 'Uyda tayyorlangan fettuchine pasta, qaymoqli sous, krevetka, trufel yog‘i, qora murch, parmezan. 350 g'
        },
        price: 350,
        count: 1,
        category: {
            ru: 'Пицца',
            en: 'Pizza',
            uz: 'Pizza'
        }
    },
    {
        id: 2,
        img: pizza_img,
        title: {
            ru: 'С креветками и трюфелями',
            en: 'With shrimp and truffles',
            uz: 'Krevetka va trufellar bilan'
        },
        description: {
            ru: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
            en: 'Homemade fettuccine pasta, creamy sauce, shrimp, truffle oil, black pepper, parmesan. 350 g',
            uz: 'Uyda tayyorlangan fettuchine pasta, qaymoqli sous, krevetka, trufel yog‘i, qora murch, parmezan. 350 g'
        },
        price: 350,
        count: 1,
        category: {
            ru: 'Пицца',
            en: 'Pizza',
            uz: 'Pizza'
        }
    },
    {
        id: 3,
        img: pizza_img,
        title: {
            ru: 'С креветками и трюфелями',
            en: 'With shrimp and truffles',
            uz: 'Krevetka va trufellar bilan'
        },
        description: {
            ru: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
            en: 'Homemade fettuccine pasta, creamy sauce, shrimp, truffle oil, black pepper, parmesan. 350 g',
            uz: 'Uyda tayyorlangan fettuchine pasta, qaymoqli sous, krevetka, trufel yog‘i, qora murch, parmezan. 350 g'
        },
        price: 350,
        count: 1,
        category: {
            ru: 'Пицца',
            en: 'Pizza',
            uz: 'Pizza'
        }
    },
    {
        id: 4,
        img: pizza_img,
        title: {
            ru: 'С креветками и трюфелями',
            en: 'With shrimp and truffles',
            uz: 'Krevetka va trufellar bilan'
        },
        description: {
            ru: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
            en: 'Homemade fettuccine pasta, creamy sauce, shrimp, truffle oil, black pepper, parmesan. 350 g',
            uz: 'Uyda tayyorlangan fettuchine pasta, qaymoqli sous, krevetka, trufel yog‘i, qora murch, parmezan. 350 g'
        },
        price: 350,
        count: 1,
        category: {
            ru: 'Пицца',
            en: 'Pizza',
            uz: 'Pizza'
        }
    },
    {
        id: 5,
        img: pizza_img,
        title: {
            ru: 'С креветками и трюфелями',
            en: 'With shrimp and truffles',
            uz: 'Krevetka va trufellar bilan'
        },
        description: {
            ru: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
            en: 'Homemade fettuccine pasta, creamy sauce, shrimp, truffle oil, black pepper, parmesan. 350 g',
            uz: 'Uyda tayyorlangan fettuchine pasta, qaymoqli sous, krevetka, trufel yog‘i, qora murch, parmezan. 350 g'
        },
        price: 350,
        count: 1,
        category: {
            ru: 'Пицца',
            en: 'Pizza',
            uz: 'Pizza'
        }
    },
    {
        id: 6,
        img: pizza_img,
        title: {
            ru: 'С креветками и трюфелями',
            en: 'With shrimp and truffles',
            uz: 'Krevetka va trufellar bilan'
        },
        description: {
            ru: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
            en: 'Homemade fettuccine pasta, creamy sauce, shrimp, truffle oil, black pepper, parmesan. 350 g',
            uz: 'Uyda tayyorlangan fettuchine pasta, qaymoqli sous, krevetka, trufel yog‘i, qora murch, parmezan. 350 g'
        },
        price: 350,
        count: 1,
        category: {
            ru: 'Пицца',
            en: 'Pizza',
            uz: 'Pizza'
        }
    },
    {
        id: 7,
        img: pizza_img,
        title: {
            ru: 'С креветками и трюфелями',
            en: 'With shrimp and truffles',
            uz: 'Krevetka va trufellar bilan'
        },
        description: {
            ru: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
            en: 'Homemade fettuccine pasta, creamy sauce, shrimp, truffle oil, black pepper, parmesan. 350 g',
            uz: 'Uyda tayyorlangan fettuchine pasta, qaymoqli sous, krevetka, trufel yog‘i, qora murch, parmezan. 350 g'
        },
        price: 350,
        count: 1,
        category: {
            ru: 'Пицца',
            en: 'Pizza',
            uz: 'Pizza'
        }
    },
    {
        id: 8,
        img: pizza_img,
        title: {
            ru: 'С креветками и трюфелями',
            en: 'With shrimp and truffles',
            uz: 'Krevetka va trufellar bilan'
        },
        description: {
            ru: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
            en: 'Homemade fettuccine pasta, creamy sauce, shrimp, truffle oil, black pepper, parmesan. 350 g',
            uz: 'Uyda tayyorlangan fettuchine pasta, qaymoqli sous, krevetka, trufel yog‘i, qora murch, parmezan. 350 g'
        },
        price: 350,
        count: 1,
        category: {
            ru: 'Пицца',
            en: 'Pizza',
            uz: 'Pizza'
        }
    }
]


export {
    logo,
    yandexEdaIcon,
    starIcon,
    slide1,
    slide2,
    prevIcon,
    nextIcon,
    news_img,
    pizza_data,
    stock_img,
    delivery_icon,
    visaIcon,
    paypalIcon,
    masterIcon,
    tgIcon,
    fbIcon,
    vkIcon,
    msIcon,
    spIcon,
    wsIcon,
    plusIcon,
    minusIcon,
    closeIcon,
    emptyIcon,
    likeIcon,
    likeFillIcon,
    arrowLeftIcon
}
