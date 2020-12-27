require('dotenv').config();
const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://mkv-calculator-mobile.vercel.app'
    : 'http://localhost:3000';

export default baseUrl;
