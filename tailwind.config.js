/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        1150: '1340px'
      },
      colors: {
        'yellow': '#F7D22D',
        'white': '#FFFFFF',
        'light-gray': '#F3F3F7',
        'gray': '#696F7A',
        'black': '#0E0C0D',
        'pink': '#FF2E65',
        'light-blue': '#E3ECF5',
        'cart-description': '#686466',
        'delivery': '#473E43',
      },
      boxShadow: {
        'hero-image': '0px 4px 24px 0px #00000042',
        'category-cart': '0px 4px 24px 0px #0000000F',
        'discount-cart': '0px 4px 24px 0px #0000000F'
      },
      borderRadius: {
        13: '13px',
        14: '14px',
        20: '20px',
        28: '28px'
      },
      fontSize: {
        10: '10px',
        13: '13px',
        22: '22px',
        26: '26px',
        32: '32px',
        44: '44px'
      },
      space: {
        70: '70px',
      },
      width: {
        77: '77px',
      },
      height:{
        77:'77px',
      }
    },
  },
  plugins: [],
}