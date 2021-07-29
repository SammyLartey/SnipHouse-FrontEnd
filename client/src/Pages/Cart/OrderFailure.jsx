import React, { useEffect, useState } from 'react';
import RPT from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

import './carts.scss';
import $ from 'jquery';
export const Failure = ({ cart, cost, user, days, info }) => {
    useEffect(() => {
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });

        window.print();
    }, []);

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
                                <span>Failure</span>
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
                                <span className="icon_tag_alt"></span> ORDER
                                FAILED
                            </h4>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <h3>
                            Your ORDER with PAYMENT Reference:{' '}
                            <span className="failure">
                                {info.payment_reference}
                            </span>{' '}
                            failed
                        </h3>
                        <h3>Kindly Contact Sniphouse for further Assistance</h3>
                    </div>
                </div>
            </section>
        </>
    );
};

Failure.propTypes = {
    cart: RPT.array,
    cost: RPT.string,
    user: RPT.object,

    days: RPT.string,
    info: RPT.object
};

const mapStateToProps = state => ({
    cart: state.cart.cart,
    cost: state.cart.totalCost,
    user: state.cart.userDetails,
    days: state.cart.days,
    info: state.cart.pdf_data
});

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Failure);
