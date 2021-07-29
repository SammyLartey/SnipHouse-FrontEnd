import React, { useState, useEffect } from 'react';
import RPT from 'prop-types';

import { connect } from 'react-redux';
import ReactStars from 'react-rating-stars-component';
import {} from '../../values';
import { Link } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';
import $ from 'jquery';
import { PRODUCT_DETAILS } from '../../Actions/types';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { fetchWeddingProducts } from '../../Actions';
import './shop.scss';

export const Wedding = ({
    history,
    wedding,
    fetchWeddingProducts,
    fillProductDetails,
    currency,
    currency_value
}) => {
    useEffect(() => {
        $('#categorynav').addClass('active');
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
    }, []);

    useEffect(() => {
        fetchWeddingProducts();
        console.log(wedding);
    }, []);

    let i = 0;
    let j = 0;
    let k = 0;
    let l = 0;
    let m = 0;

    let traditional = [];
    let court = [];
    let reception = [];
    let maid = [];
    let guest = [];

    while (i < wedding.length) {
        if (wedding[i].subcategory === 'bride traditional') {
            traditional.push(wedding[i]);
        }
        i++;
    }
    while (j < wedding.length) {
        if (wedding[j].subcategory === 'bride court gown') {
            court.push(wedding[j]);
        }
        j++;
    }
    while (k < wedding.length) {
        if (wedding[k].subcategory === 'bride reception') {
            reception.push(wedding[k]);
        }
        k++;
    }
    while (l < wedding.length) {
        if (wedding[l].subcategory === 'bridesmaid') {
            maid.push(wedding[l]);
        }
        l++;
    }
    while (m < wedding.length) {
        if (wedding[m].subcategory === 'wedding guest') {
            guest.push(wedding[m]);
        }
        m++;
    }

    let traditionalList = traditional.map(traditional => (
        <div
            className="col-lg-3 col-md-4 col-sm-6 mix men"
            key={traditional.id}
            onClick={() => {
                fillProductDetails(traditional);
                history.push('/product');
            }}>
            <div className="product__item">
                <div className="product__item__pic set-bg">
                    <img
                        src={traditional.picturea}
                        alt=""
                        className="product-picture"
                    />
                    <ul className="product__hover">
                        <li>
                            <a
                                href={traditional.picturea}
                                className="image-popup">
                                <span className="arrow_expand"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon_heart_alt"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon_cart"></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="product__item__text">
                    <h6>
                        <a href="#">{traditional.name}</a>
                    </h6>
                    <div className="rating">
                        <ReactStars
                            count={5}
                            value={5}
                            size={17}
                            edit={false}
                            activeColor="#ffd700"
                        />
                    </div>
                    <div className="product__price">
                        {currency}{' '}
                        {Math.ceil(traditional.price * currency_value)}
                    </div>
                </div>
            </div>
        </div>
    ));
    let courtList = court.map(traditional => (
        <div
            className="col-lg-3 col-md-4 col-sm-6 mix men"
            key={traditional.id}
            onClick={() => {
                fillProductDetails(traditional);
                history.push('/product');
            }}>
            <div className="product__item">
                <div className="product__item__pic set-bg">
                    <img
                        src={traditional.picturea}
                        alt=""
                        className="product-picture"
                    />
                    <ul className="product__hover">
                        <li>
                            <a
                                href={traditional.picturea}
                                className="image-popup">
                                <span className="arrow_expand"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon_heart_alt"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon_cart"></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="product__item__text">
                    <h6>
                        <a href="#">{traditional.name}</a>
                    </h6>
                    <div className="rating">
                        <ReactStars
                            count={5}
                            value={5}
                            size={17}
                            edit={false}
                            activeColor="#ffd700"
                        />
                    </div>
                    <div className="product__price">
                        {currency}{' '}
                        {Math.ceil(traditional.price * currency_value)}
                    </div>
                </div>
            </div>
        </div>
    ));
    let receptionList = reception.map(traditional => (
        <div
            className="col-lg-3 col-md-4 col-sm-6 mix men"
            key={traditional.id}
            onClick={() => {
                fillProductDetails(traditional);
                history.push('/product');
            }}>
            <div className="product__item">
                <div className="product__item__pic set-bg">
                    <img
                        src={traditional.picturea}
                        alt=""
                        className="product-picture"
                    />
                    <ul className="product__hover">
                        <li>
                            <a
                                href={traditional.picturea}
                                className="image-popup">
                                <span className="arrow_expand"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon_heart_alt"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon_cart"></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="product__item__text">
                    <h6>
                        <a href="#">{traditional.name}</a>
                    </h6>
                    <div className="rating">
                        <ReactStars
                            count={5}
                            value={5}
                            size={17}
                            edit={false}
                            activeColor="#ffd700"
                        />
                    </div>
                    <div className="product__price">
                        {currency}{' '}
                        {Math.ceil(traditional.price * currency_value)}
                    </div>
                </div>
            </div>
        </div>
    ));
    let maidList = maid.map(traditional => (
        <div
            className="col-lg-3 col-md-4 col-sm-6 mix men"
            key={traditional.id}
            onClick={() => {
                fillProductDetails(traditional);
                history.push('/product');
            }}>
            <div className="product__item">
                <div className="product__item__pic set-bg">
                    <img
                        src={traditional.picturea}
                        alt=""
                        className="product-picture"
                    />
                    <ul className="product__hover">
                        <li>
                            <a
                                href={traditional.picturea}
                                className="image-popup">
                                <span className="arrow_expand"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon_heart_alt"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon_cart"></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="product__item__text">
                    <h6>
                        <a href="#">{traditional.name}</a>
                    </h6>
                    <div className="rating">
                        <ReactStars
                            count={5}
                            value={5}
                            size={17}
                            edit={false}
                            activeColor="#ffd700"
                        />
                    </div>
                    <div className="product__price">
                        {currency}{' '}
                        {Math.ceil(traditional.price * currency_value)}
                    </div>
                </div>
            </div>
        </div>
    ));
    let guestList = guest.map(traditional => (
        <div
            className="col-lg-3 col-md-4 col-sm-6 mix men"
            key={traditional.id}
            onClick={() => {
                fillProductDetails(traditional);
                history.push('/product');
            }}>
            <div className="product__item">
                <div className="product__item__pic set-bg">
                    <img
                        src={traditional.picturea}
                        alt=""
                        className="product-picture"
                    />
                    <ul className="product__hover">
                        <li>
                            <a
                                href={traditional.picturea}
                                className="image-popup">
                                <span className="arrow_expand"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon_heart_alt"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon_cart"></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="product__item__text">
                    <h6>
                        <a href="#">{traditional.name}</a>
                    </h6>
                    <div className="rating">
                        <ReactStars
                            count={5}
                            value={5}
                            size={17}
                            edit={false}
                            activeColor="#ffd700"
                        />
                    </div>
                    <div className="product__price">
                        {currency}{' '}
                        {Math.ceil(traditional.price * currency_value)}
                    </div>
                </div>
            </div>
        </div>
    ));
    return (
        <>
            <Navbar />
            <div className="section-title text-center pt-5">
                <h4>Wedding Wear</h4>
            </div>
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="section-title">
                                <h4>bride traditional wear</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row property__gallery">
                        {traditionalList}
                    </div>
                </div>
            </section>
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="section-title">
                                <h4>bride court wear</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row property__gallery">{courtList}</div>
                </div>
            </section>
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="section-title">
                                <h4>bride reception wear</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row property__gallery">{receptionList}</div>
                </div>
            </section>
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="section-title">
                                <h4>bridesmaid</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row property__gallery">{maidList}</div>
                </div>
            </section>
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="section-title">
                                <h4>wedding guest</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row property__gallery">{guestList}</div>
                </div>
            </section>
            <Footer />
        </>
    );
};

Wedding.propTypes = {
    history: RPT.object,
    wedding: RPT.array,
    fetchWeddingProducts: RPT.func,
    fillProductDetails: RPT.func,
    currency: RPT.string,
    currency_value: RPT.any
};

const mapStateToProps = state => ({
    wedding: state.product.weddingProducts,
    currency: state.cart.currency,
    currency_value: state.cart.currency_value
});

const mapDispatchToProps = dispatch => {
    return {
        fetchWeddingProducts: data => {
            dispatch(fetchWeddingProducts(data));
        },
        fillProductDetails: data => {
            dispatch({ type: PRODUCT_DETAILS, data });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wedding);
