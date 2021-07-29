import React, { useEffect, useState } from 'react';
import RPT from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { addUserDetails } from '../../Actions/cart-actions';
import { Row, Col, Form, Button } from 'react-bootstrap';

import $ from 'jquery';
export const Cart = ({
    cart,
    cost,
    history,
    addUserDetails,
    user,
    currency,
    currency_value
}) => {
    useEffect(() => {
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
        console.log(user);
    }, []);
    const { register, handleSubmit } = useForm();
    const submitHandler = data => {
        addUserDetails(data);
        history.push('/payment');
    };
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
            <Navbar />
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <a href="./index.html">
                                    <i className="fa fa-home"></i> Home
                                </a>
                                <span>Checkout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="checkout spad">
                <div className="container">
                    <Form
                        autoComplete="off"
                        key={1}
                        onSubmit={handleSubmit(submitHandler)}
                        id="add-to-order1"
                        className="checkout__form">
                        <div className="row">
                            <div className="col-lg-8">
                                <h5>Billing detail</h5>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="checkout__form__input">
                                            <p>
                                                First Name <span>*</span>
                                            </p>
                                            <input
                                                type="text"
                                                name="first_name"
                                                ref={register({
                                                    required: true
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="checkout__form__input">
                                            <p>
                                                Last Name <span>*</span>
                                            </p>
                                            <input
                                                type="text"
                                                name="last_name"
                                                ref={register({
                                                    required: true
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="checkout__form__input">
                                            <p>
                                                Country <span>*</span>
                                            </p>
                                            <Form.Control
                                                as="select"
                                                className="checkout__form__input "
                                                name="country"
                                                ref={register({
                                                    required: true
                                                })}>
                                                <option>Ghana</option>
                                                <option>UK</option>
                                                <option>USA</option>
                                            </Form.Control>
                                        </div>
                                        <div className="checkout__form__input">
                                            <p>
                                                Delivery Type <span>*</span>
                                            </p>
                                            <Form.Control
                                                as="select"
                                                className="checkout__form__input "
                                                name="delivery_type"
                                                ref={register({
                                                    required: true
                                                })}>
                                                <option value="0">
                                                    Pickup
                                                </option>
                                                <option value="1">
                                                    Delivery to Accra (GHC 20)
                                                </option>
                                                <option value="2">
                                                    Delivery oustide Accra (GHC
                                                    40)
                                                </option>
                                                <option value="3">
                                                    Delivery within UK (GBR 50)
                                                </option>
                                                <option value="4">
                                                    Delivery within USA (USD 65)
                                                </option>
                                            </Form.Control>
                                        </div>
                                        <div className="checkout__form__input">
                                            <p>
                                                Dellivery Address <span>*</span>
                                            </p>
                                            <input
                                                type="text"
                                                name="address"
                                                ref={register({
                                                    required: true
                                                })}
                                                placeholder="Street Address"
                                            />
                                        </div>
                                        <div className="checkout__form__input">
                                            <p>
                                                Town/City <span>*</span>
                                            </p>
                                            <input
                                                type="text"
                                                name="town"
                                                ref={register({
                                                    required: true
                                                })}
                                            />
                                        </div>

                                        <div className="checkout__form__input">
                                            <p>
                                                Postcode/Zip <span>*</span>
                                            </p>
                                            <input
                                                type="text"
                                                name="zip"
                                                ref={register({
                                                    required: true
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="checkout__form__input">
                                            <p>
                                                Phone <span>*</span>
                                            </p>
                                            <input
                                                type="number"
                                                name="number"
                                                ref={register({
                                                    required: true
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="checkout__form__input">
                                            <p>
                                                Email <span>*</span>
                                            </p>
                                            <input
                                                type="email"
                                                name="email"
                                                ref={register({
                                                    required: true
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
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
                                                Total{' '}
                                                <span>
                                                    {currency}{' '}
                                                    {Math.ceil(
                                                        cost * currency_value
                                                    )}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <Button className="site-btn" type="submit">
                                        Save and Continue
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </section>
            <Footer />
        </>
    );
};

Cart.propTypes = {
    cart: RPT.array,
    cost: RPT.string,
    history: RPT.object,
    addUserDetails: RPT.func,
    user: RPT.object,
    currency: RPT.string,
    currency_value: RPT.float
};

const mapStateToProps = state => ({
    cart: state.cart.cart,
    cost: state.cart.totalCost,
    user: state.cart.userDetails,
    currency: state.cart.currency,
    currency_value: state.cart.currency_value
});

const mapDispatchToProps = dispatch => {
    return {
        addUserDetails: data => {
            dispatch(addUserDetails(data));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
