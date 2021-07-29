//Images

export const HeaderImage = require('./Assets/c.jpg');
export const HeaderImage3 = require('./Assets/logo.png');
export const product1 = require('./Assets/img/product/product-1.jpg');
export const product2 = require('./Assets/img/product/product-2.jpg');
export const product3 = require('./Assets/img/product/product-3.jpg');
export const product4 = require('./Assets/img/product/product-4.jpg');
export const product5 = require('./Assets/img/product/product-5.jpg');
export const product6 = require('./Assets/img/product/product-6.jpg');
export const product7 = require('./Assets/img/product/product-7.jpg');
export const product8 = require('./Assets/img/product/product-8.jpg');
export const banner = require('./Assets/banner6.jpg');
export const discount = require('./Assets/img/discount.jpg');
export const visa = require('./Assets/img/payment/payment-2.png');
export const blog1 = require('./Assets/img/blog/blog-1.jpg');
export const blog2 = require('./Assets/img/blog/blog-2.jpg');
export const blog3 = require('./Assets/img/blog/blog-3.jpg');
export const blog4 = require('./Assets/img/blog/blog-4.jpg');
export const extra = require('./Assets/d.jfif');
export const extra2 = require('./Assets/lol2.jpg');
export const extra3 = require('./Assets/b.jpg');
export const collection1 = require('./Assets/1.jpg');
export const collection2 = require('./Assets/2.jpg');
export const collection3 = require('./Assets/3.jpg');
export const collection4 = require('./Assets/4.jpg');
export const collection5 = require('./Assets/5.jpg');

export const social2 = require('./Assets/c.jpg');
export const snip = require('./Assets/snip.jfif');
export const background1 = require('./Assets/imag1.jpg');
export const background2 = require('./Assets/imag2.jpg');
export const background3 = require('./Assets/imag3.jpg');

//Extra Functions
export const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

//API public Keys
export const testKey = 'pk_test_64cbae4a6384e01b796964353a9c7695e87ea77f';
export const liveKey = 'pk_live_1767ef6c80b4d8632b069ff3473d4fecbd363ec9';

//Currency Info

export const GHCS = 'GHC';
export const GBRS = 'GBR';
export const USDS = 'USD';
export const GHCV = 1.0;
export const GBRV = 0.13;
export const USDV = 0.17;
export const GHCA = 20;
export const GHCO = 40;
export const UK = 385;
export const US = 385;
