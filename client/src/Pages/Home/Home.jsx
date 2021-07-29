import React, { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import {
    banner,
    extra3,
    background1,
    background2,
    background3
} from '../../values';
import { fetchAllProducts } from '../../Actions/product-actions';
import { PRODUCT_DETAILS } from '../../Actions/types';
import RPT from 'prop-types';
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Carousel, CarouselItem, CarouselProps, Button } from 'react-bootstrap';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Social from '../../Components/Social/Social';
import './home.scss';

const Home = ({
    fetchAllProducts,
    products,
    featured,
    fillProductDetails,
    history
}) => {
    useEffect(() => {
        fetchAllProducts();
    }, []);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    useEffect(() => {
        $('#homenav').addClass('active');
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
    }, []);

    return (
        <>
            <Navbar />
            <section className="first-banner"></section>
            <section className="discounts second-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 p-0">
                            <div className="discount__pic">
                                <img src={extra3} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 p-0">
                            <div className="discount__text">
                                <div className="discount__text__title">
                                    <span>custom made</span>

                                    <h2 className="mt-2">Beautiful Clothes</h2>
                                </div>

                                <Link to="/booking" className="mt-5">
                                    Book now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="categories third-banner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            <div className="categories__item categories__large__item  maincategory">
                                <div className="categories__text">
                                    <h4>Trust us with your big day</h4>
                                    <p></p>
                                    <Link to="/booking">Book now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div className="categories__item  category1">
                                        <div className="categories__text">
                                            <h4>Kente Muse</h4>
                                            <p>20+ items</p>
                                            <Link to="/shop">Shop now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div className="categories__item  category2">
                                        <div className="categories__text">
                                            <h4>Steal the show</h4>
                                            <p>20+ items</p>
                                            <Link to="/shop">Shop now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div className="categories__item  category4">
                                        <div className="categories__text">
                                            <h4>Corporate wear</h4>
                                            <p>20+ items</p>
                                            <Link to="/shop">Shop now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div className="categories__item  category3">
                                        <div className="categories__text">
                                            <h4>Weekly Playlist</h4>
                                            <p>
                                                What where you playing at work
                                            </p>

                                            <a
                                                href="https://music.apple.com/gh/playlist/african-hip-hop/pl.31847c105ecf4d14b34793a3874eb9e9"
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                Listen
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="banner set-bg fourth-banner"
                data-setbg={banner}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-8 m-auto">
                            <OwlCarousel
                                className="banner__slider"
                                loop
                                margin={0}
                                items={1}
                                nav>
                                <div className="banner__item">
                                    <div className="banner__text">
                                        <h1>Dinner Wear</h1>
                                        <Link to="/shop">
                                            <button className="btn btn-lg btn-danger extra-btn-1">
                                                Shop Now
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="banner__item">
                                    <div className="banner__text">
                                        <h1>Dinner Wear</h1>
                                        <button className="btn btn-lg btn-danger extra-btn-1">
                                            Shop Now
                                        </button>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fas fa-plane"></i>
                                <h6>Safe Delivery</h6>
                                <p>All orders are delivered safely</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fas fa-clock"></i>
                                <h6>No Delays</h6>
                                <p>Clothes are completed without delays</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fas fa-headphones"></i>
                                <h6>Online Support 24/7</h6>
                                <p>Dedicated support</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fas fa-money-bill-wave"></i>
                                <h6>Payment Secure</h6>
                                <p>100% secure payment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Social />
            <Footer />
        </>
    );
};

Home.propTypes = {
    products: RPT.array,
    featured: RPT.array,
    fetchAllProducts: RPT.func,
    fillProductDetails: RPT.func,
    history: RPT.object
};

const mapStateToProps = state => ({
    products: state.product.products,
    featured: state.product.featured
});

const mapDispatchToProps = dispatch => {
    return {
        fetchAllProducts: () => {
            dispatch(fetchAllProducts());
        },
        fillProductDetails: data => {
            dispatch({ type: PRODUCT_DETAILS, data });
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
