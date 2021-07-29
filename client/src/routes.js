import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const HomePage = React.lazy(() => import('./Pages/Home/Home'));
const ShopPage = React.lazy(() => import('./Pages/Shop/Shop'));
const BlogPage = React.lazy(() => import('./Pages/Blog/Blog'));
const WeddingPage = React.lazy(() => import('./Pages/Shop/Wedding'));
const CorporatePage = React.lazy(() => import('./Pages/Shop/Corporate'));
const ReadyPage = React.lazy(() => import('./Pages/Shop/Ready'));
const BlogData = React.lazy(() => import('./Pages/Blog/Blogpost'));
const Cart = React.lazy(() => import('./Pages/Cart/Cart'));
const Checkout = React.lazy(() => import('./Pages/Cart/Checkout'));
const Payment = React.lazy(() => import('./Pages/Cart/Payment'));
const Offers = React.lazy(() => import('./Pages/Offers/Offers'));
const Careers = React.lazy(() => import('./Pages/Careers/Careers'));
const Booking = React.lazy(() => import('./Pages/Booking/Booking'));
const Success = React.lazy(() => import('./Pages/Cart/OrderSuccess'));
const Failure = React.lazy(() => import('./Pages/Cart/OrderFailure'));
const ProductDetailsPage = React.lazy(() =>
    import('./Pages/ProductDetails/ProductDetails')
);

const routes = [
    {
        path: '/',
        exact: true,
        name: 'Default',
        component: HomePage
    },
    {
        path: '/product',
        exact: true,
        name: 'ProductDetails',
        component: ProductDetailsPage
    },
    {
        path: '/shop',
        exact: true,
        name: 'ShopPage',
        component: ShopPage
    },
    {
        path: '/blog',
        exact: true,
        name: 'Blog',
        component: BlogPage
    },
    {
        path: '/blogdetails',
        exact: true,
        name: 'BlogDetails',
        component: BlogData
    },
    {
        path: '/wedding',
        exact: true,
        name: 'Wedding',
        component: WeddingPage
    },
    {
        path: '/corporate',
        exact: true,
        name: 'corporate',
        component: CorporatePage
    },
    {
        path: '/ready',
        exact: true,
        name: 'ready',
        component: ReadyPage
    },
    {
        path: '/cart',
        exact: true,
        name: 'cart',
        component: Cart
    },
    {
        path: '/checkout',
        exact: true,
        name: 'checkout',
        component: Checkout
    },
    {
        path: '/payment',
        exact: true,
        name: 'pay',
        component: Payment
    },
    {
        path: '/booking',
        exact: true,
        name: 'booking',
        component: Booking
    },
    {
        path: '/offers',
        exact: true,
        name: 'offers',
        component: Offers
    },
    {
        path: '/careers',
        exact: true,
        name: 'careers',
        component: Careers
    },
    {
        path: '/success',
        exact: true,
        name: 'success',
        component: Success
    },
    {
        path: '/failure',
        exact: true,
        name: 'failure',
        component: Failure
    }
];

export default routes;
