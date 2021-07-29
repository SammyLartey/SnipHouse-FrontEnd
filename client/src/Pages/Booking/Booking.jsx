import React, { useEffect, useState } from 'react';
import RPT from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { makeBooking } from '../../Actions/cart-actions';
import { Row, Col, Form, Button } from 'react-bootstrap';

import $ from 'jquery';
export const Booking = ({ history, makeBooking }) => {
    useEffect(() => {
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
    }, []);
    const { register, handleSubmit } = useForm();
    const submitHandler = data => {
        makeBooking({
            email: data.email,
            country: data.country,
            town: data.town,
            address: data.address,
            date: data.date,
            reason: data.reason,
            first_name: data.first_name,
            last_name: data.last_name,
            phone_number: data.phone_number,
            booking_type: data.booking_type
        });
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
                                <h5>Booking details</h5>
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
                                                Booking Type <span>*</span>
                                            </p>
                                            <Form.Control
                                                as="select"
                                                className="checkout__form__input "
                                                name="booking_type"
                                                ref={register({
                                                    required: true
                                                })}>
                                                <option>Meet in Person</option>
                                                <option>Video Call</option>
                                            </Form.Control>
                                        </div>
                                        <div className="checkout__form__input">
                                            <p>
                                                Delivery Address <span>*</span>
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
                                                Date <span>*</span>
                                            </p>
                                            <input
                                                type="datetime-local"
                                                name="date"
                                                ref={register({
                                                    required: true
                                                })}
                                                placeholder="Date"
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
                                                name="phone_number"
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
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="checkout__form__input">
                                            <p>
                                                Booking Reason <span>*</span>
                                            </p>
                                            <textarea
                                                name="reason"
                                                ref={register({
                                                    required: true
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button className="site-btn" type="submit">
                            Book
                        </Button>
                    </Form>
                </div>
            </section>
            <Footer />
        </>
    );
};

Booking.propTypes = {
    makeBooking: RPT.func,
    history: RPT.object
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
    return {
        makeBooking: data => {
            dispatch(makeBooking(data));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
