import React, { useEffect, useState } from 'react';
import RPT from 'prop-types';

import { connect } from 'react-redux';
import ReactStars from 'react-rating-stars-component';
import { fetchReadyProducts } from '../../Actions';
import { Link } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';
import $ from 'jquery';
import { PRODUCT_DETAILS } from '../../Actions/types';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './shop.scss';

export const Ready = ({
    products,
    history,
    fillProductDetails,
    fetchReadyProducts,
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
        fetchReadyProducts();
    }, []);
    const [pagination_number, setpagination_number] = useState(1);
    let pagination_division = 20;
    let active = pagination_number;

    let items = [];
    let divison = Math.ceil(products.length / pagination_division);
    for (let number = 1; number <= divison; number++) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === active}
                onClick={() => setpagination_number(number)}>
                {number}
            </Pagination.Item>
        );
    }

    let productPagination = (
        <div className="mt-2 float-right">
            <Pagination size="sm">{items}</Pagination>
        </div>
    );

    let productLength = products.length;

    let productsHolder = [];
    let limit = pagination_number * pagination_division;
    let counter = limit - pagination_division;

    while (counter < limit) {
        if (counter >= productLength) {
            break;
        }
        productsHolder.push(products[counter]);
        counter++;
    }

    let newProductList = productsHolder.map(product => (
        <div
            className="col-lg-3 col-md-4 col-sm-6 mix men"
            key={product.id}
            onClick={() => {
                fillProductDetails(product);
                history.push('/product');
            }}>
            <div className="product__item">
                <div className="product__item__pic set-bg">
                    <img
                        src={product.picturea}
                        alt=""
                        className="product-picture"
                    />
                    <ul className="product__hover">
                        <li>
                            <a href={product.picturea} className="image-popup">
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
                        <a href="#">{product.name}</a>
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
                        {currency} {Math.ceil(product.price * currency_value)}
                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <>
            <Navbar />
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="section-title">
                                <h4>ready to wear</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row property__gallery">
                        {newProductList}
                    </div>
                    {productPagination}
                </div>
            </section>

            <Footer />
        </>
    );
};

Ready.propTypes = {
    products: RPT.array,
    history: RPT.object,
    fillProductDetails: RPT.func,
    fetchReadyProducts: RPT.func,
    currency: RPT.string,
    currency_value: RPT.float
};

const mapStateToProps = state => ({
    products: state.product.readyProducts,
    currency: state.cart.currency,
    currency_value: state.cart.currency_value
});

const mapDispatchToProps = dispatch => {
    return {
        fillProductDetails: data => {
            dispatch({ type: PRODUCT_DETAILS, data });
        },
        fetchReadyProducts: data => {
            dispatch(fetchReadyProducts(data));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ready);
