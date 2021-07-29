import React, { useEffect, useState } from 'react';
import RPT from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { removeItem, renderPDF } from '../../Actions/cart-actions';
import { Link } from 'react-router-dom';
import { Modal, Container, Col, Row } from 'react-bootstrap';
import $ from 'jquery';
export const Cart = ({ cart, cost, removeItem, currency, currency_value }) => {
    useEffect(() => {
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
    }, []);
    const [viewState, setviewState] = useState(false);

    const handleViewShow = () => setviewState(true);
    const handleViewClose = () => setviewState(false);
    let tempCart = cart.map(carts => (
        <tr key={carts.product.id}>
            <td className="cart__product__item">
                <img
                    src={carts.product.picturea}
                    alt=""
                    className="cart-image"
                />
                <div className="cart__product__item__title">
                    <h6>{carts.product.name}</h6>
                </div>
            </td>
            <td className="cart__price">
                {currency} {Math.ceil(carts.product.price * currency_value)}
            </td>
            <td className="cart__close">
                <span
                    className="icon_close"
                    onClick={() => {
                        removeItem(carts.product.id);
                    }}></span>
            </td>
            {/*  <td className="cart__quantity">
                <div className="pro-qty">
                    <input type="text" value="1" />
                </div>
            </td>
            <td className="cart__total">$ 300.0</td>
            <td className="cart__close">
                <span className="icon_close"></span>
            </td> */}
        </tr>
    ));

    return (
        <>
            <Navbar />
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <a href="./index.html">
                                    <i className="fa fa-home"></i> Home
                                </a>
                                <span>Cart</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="shop-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shop__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            {/*  <th>Quantity</th>
                                            <th>Total</th> */}
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>{tempCart}</tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 offset-lg-8">
                            <div className="cart__total__procced">
                                <h6>Cart total</h6>
                                <ul>
                                    <li>
                                        Total{' '}
                                        <span>
                                            {currency}{' '}
                                            {Math.ceil(cost * currency_value)}
                                        </span>
                                    </li>
                                </ul>
                                <Link to="/checkout" className="primary-btn">
                                    Proceed to checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

Cart.propTypes = {
    cart: RPT.array,
    cost: RPT.string,
    removeItem: RPT.func,
    renderPDF: RPT.func,
    currency: RPT.string,
    currency_value: RPT.float
};

const mapStateToProps = state => ({
    cart: state.cart.cart,
    cost: state.cart.totalCost,
    currency: state.cart.currency,
    currency_value: state.cart.currency_value
});

const mapDispatchToProps = dispatch => {
    return {
        removeItem: data => {
            dispatch(removeItem(data));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
