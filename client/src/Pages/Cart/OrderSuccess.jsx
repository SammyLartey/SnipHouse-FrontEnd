import React, { useEffect, useState } from 'react';
import RPT from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

import './carts.scss';
import $ from 'jquery';
export const Success = ({
    cart,
    cost,
    user,
    days,
    info,
    currency,
    currency_value,
    mainCost,
    deliveryCost
}) => {
    useEffect(() => {
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });

        window.print();
    }, []);

    let productList = cart.map((cartitem, index) => (
        <li key={cartitem.product.id}>
            {index + 1}. {cartitem.product.name}
            <span>
                {currency} {Math.ceil(cartitem.product.price * currency_value)}
            </span>
        </li>
    ));
    return (
        <>
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <a href="./index.html">
                                    <i className="fa fa-home"></i> Home
                                </a>
                                <span>Success</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="checkout spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h4 className="coupon__link">
                                <span className="icon_tag_alt"></span> RECEIPT
                                FOR ORDER
                            </h4>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="checkout__order">
                            <h5>Your order</h5>
                            <div className="checkout__order__product">
                                <ul>
                                    <li>
                                        <span className="top__text">
                                            Product
                                        </span>
                                        <span className="top__text__right">
                                            Total
                                        </span>
                                    </li>
                                    {productList}
                                </ul>
                            </div>
                            <div className="checkout__order__total">
                                <ul>
                                    <li>
                                        Sub Total{' '}
                                        <span>
                                            {currency}{' '}
                                            {Math.ceil(cost * currency_value)}
                                        </span>
                                    </li>
                                    <li>
                                        Delivery{' '}
                                        <span>
                                            {currency}{' '}
                                            {Math.floor(
                                                deliveryCost * currency_value
                                            )}
                                        </span>
                                    </li>
                                    <li>
                                        Sub Total Total{' '}
                                        <span>
                                            {currency}{' '}
                                            {Math.ceil(
                                                mainCost * currency_value
                                            )}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="checkout__order__total">
                                <ul>
                                    <li>
                                        Delivery Date <span>{info.date}</span>
                                    </li>
                                    <li>
                                        Order ID <span> {info.order_id}</span>
                                    </li>
                                    <li>
                                        Payment Reference{' '}
                                        <span> {info.payment_reference}</span>
                                    </li>
                                    <li>
                                        Buyer Phone Number{' '}
                                        <span> {info.number}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

Success.propTypes = {
    cart: RPT.array,
    cost: RPT.string,
    user: RPT.object,

    days: RPT.string,
    info: RPT.object,
    currency: RPT.string,
    currency_value: RPT.number,
    mainCost: RPT.number,
    deliveryCost: RPT.number
};

const mapStateToProps = state => ({
    cart: state.cart.cart,
    cost: state.cart.totalCost,
    deliveryCost: state.cart.deliveryCost,
    mainCost: state.cart.mainCost,
    user: state.cart.userDetails,
    days: state.cart.days,
    info: state.cart.pdf_data,
    currency: state.cart.currency,
    currency_value: state.cart.currency_value
});

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Success);
