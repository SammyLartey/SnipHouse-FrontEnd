import React, { useEffect, useState } from 'react';
import RPT from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Row, Col, Form } from 'react-bootstrap';
import { makeOrder } from '../../Actions/cart-actions';
import { PaystackButton } from 'react-paystack';
import { liveKey, testKey } from '../../values';
import './carts.scss';
import $ from 'jquery';
export const Payment = ({
    cart,
    cost,
    user,
    makeOrder,
    days,
    history,
    currency,
    currency_value,
    totalCost,
    delivery
}) => {
    useEffect(() => {
        // alert(process.env.REACT_APP_PAYSTACK_TEST_KEY);
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
    }, []);
    const { register, handleSubmit } = useForm();
    const [paid, setpaid] = useState(true);
    const [sunday, setsunday] = useState(false);
    const [pickup, setpickup] = useState(false);
    const [deliverytype, setdeliverytype] = useState('paid');

    const paidfunc = () => {
        setpaid(true);
        setsunday(false);
        setpickup(false);
        // setdeliverytype('paid');
    };
    const sundayfunc = () => {
        setpaid(false);
        setsunday(true);
        setpickup(false);
        // setdeliverytype('sunday');
    };
    const pickfunc = () => {
        setpaid(false);
        setsunday(false);
        setpickup(true);
        // setdeliverytype('pick');
    };
    let productList = cart.map((cartitem, index) => (
        <li key={cartitem.product.id}>
            {index + 1}. {cartitem.product.name}
            <span>
                {currency} {Math.ceil(cartitem.product.price * currency_value)}
            </span>
        </li>
    ));
    const config = {
        reference: new Date().getTime(),
        email: user.email,
        amount: totalCost * 100,
        publicKey: process.env.REACT_APP_PAYSTACK_TEST_KEY
    };
    const componentProps = {
        ...config,
        text: 'Pay and Order',
        currency: 'GHS',
        onSuccess: response => {
            let infoHolder = {
                history: history,
                reference: response.reference,
                order: cart,
                buyer: user,
                cost: cost,
                delivery: days,
                delivery_cost: delivery,
                type: 1
            };

            makeOrder(infoHolder);
        },
        onClose: () => null
    };
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
                                <span>Payment</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="checkout spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <h6 className="coupon__link">
                                <span className="icon_tag_alt"></span>{' '}
                                <a href="#">Have a coupon?</a> Click here to
                                enter your code.
                            </h6> */}
                        </div>
                    </div>
                    {/* <div className="section over-hide z-bigger">
                        <label className="for-checkbox"></label>
                        <div className="background-color"></div>
                        <div className="section over-hide z-bigger">
                            <div className="container pb-2">
                                <div className="row justify-content-center pb-1">
                                    <div className="col-12 pb-5">
                                        <input
                                            className="checkbox-tools"
                                            type="radio"
                                            name="paid delivery"
                                            id="tool-1"
                                            checked={paid}
                                        />
                                        <label
                                            className="for-checkbox-tools"
                                            onClick={() => {
                                                paidfunc();
                                            }}>
                                            <i className="uil uil-line-alt"></i>
                                            Delivery to Location +15 GHS
                                        </label>
                                        <input
                                            className="checkbox-tools"
                                            type="radio"
                                            name="tools"
                                            id="tool-2"
                                            checked={pickup}
                                        />
                                        <label
                                            className="for-checkbox-tools"
                                            onClick={() => {
                                                pickfunc();
                                            }}>
                                            <i className="uil uil-vector-square"></i>
                                            Pickup +0 GHS
                                        </label>
                                        <input
                                            className="checkbox-tools"
                                            type="radio"
                                            name="tools"
                                            id="tool-3"
                                            checked={sunday}
                                        />
                                        <label
                                            className="for-checkbox-tools"
                                            onClick={() => {
                                                sundayfunc();
                                            }}>
                                            <i className="uil uil-ruler"></i>
                                            Delivery on next sunday after
                                            delivery date +0 GHS
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

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
                                        Subtotal{' '}
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
                                                delivery * currency_value
                                            )}
                                        </span>
                                    </li>
                                    <li>
                                        Total{' '}
                                        <span>
                                            {currency}{' '}
                                            {Math.ceil(
                                                totalCost * currency_value
                                            )}
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <PaystackButton
                                className="site-btn"
                                {...componentProps}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

Payment.propTypes = {
    cart: RPT.array,
    cost: RPT.number,
    user: RPT.object,
    makeOrder: RPT.func,
    days: RPT.string,
    history: RPT.object,
    currency: RPT.string,
    currency_value: RPT.float,
    delivery: RPT.number,
    totalCost: RPT.number
};

const mapStateToProps = state => ({
    cart: state.cart.cart,
    cost: state.cart.totalCost,
    user: state.cart.userDetails,
    days: state.cart.days,
    currency: state.cart.currency,
    currency_value: state.cart.currency_value,
    delivery: state.cart.deliveryCost,
    totalCost: state.cart.mainCost
});

const mapDispatchToProps = dispatch => {
    return {
        makeOrder: data => {
            dispatch(makeOrder(data));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
