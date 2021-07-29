import React, { useEffect } from 'react';
import RPT from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { HeaderImage3 } from '../../values';
import $ from 'jquery';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GHCS, GBRS, USDS } from '../../values';
import { useForm } from 'react-hook-form';
import { changeCurrency } from '../../Actions/cart-actions';
import 'slicknav/dist/jquery.slicknav.min.js';
import './navbar.scss';

const Navbars = ({ cartItems, likedItems, changeCurrency, currency }) => {
    useEffect(() => {
        $('.header__menu').slicknav({
            prependTo: '#mobile-menu-wrap',
            allowParentLinks: true
        });

        $('.canvas__open').on('click', function () {
            $('.offcanvas-menu-wrapper').addClass('active');
            $('.offcanvas-menu-overlay').addClass('active');
        });

        $('.offcanvas-menu-overlay, .offcanvas__close').on(
            'click',
            function () {
                $('.offcanvas-menu-wrapper').removeClass('active');
                $('.offcanvas-menu-overlay').removeClass('active');
            }
        );
    }, []);
    const { register, handleSubmit } = useForm();

    const { register: register2, handleSubmit: handleSubmit2 } = useForm();
    const submitHandler = data => {
        changeCurrency(parseInt(data.currency));
    };
    const submitHandler2 = data => {
        changeCurrency(parseInt(data.currency));
    };
    return (
        <>
            <div className="offcanvas-menu-overlay"></div>
            <div className="offcanvas-menu-wrapper">
                <div className="offcanvas__close">+</div>
                <ul className="offcanvas__widget">
                    <li>
                        <Link to="/cart">
                            <span className="icon_cart"></span>
                            <div className="tip">{cartItems}</div>
                        </Link>
                    </li>
                    <li>
                        <Form autocomplete="off" key={1} id="add-to-cart1">
                            {' '}
                            <div className="">
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control
                                        as="select"
                                        className="select-bar"
                                        name="currency"
                                        onChange={handleSubmit2(submitHandler2)}
                                        ref={register2({
                                            required: true
                                        })}>
                                        {' '}
                                        <option>{currency}</option>
                                        <option value="0">{GHCS}</option>
                                        <option value="1">{USDS}</option>
                                        <option value="2">{GBRS}</option>
                                    </Form.Control>
                                </Form.Group>
                            </div>{' '}
                        </Form>
                    </li>
                </ul>
                <div className="offcanvas__logo">
                    <a href="./index.html">
                        <img src={HeaderImage3} alt="" className="logo-image" />
                    </a>
                </div>

                <div id="mobile-menu-wrap"></div>
            </div>

            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-2 col-lg-2">
                            <div className="header__logo">
                                <a href="./index.html">
                                    <img
                                        src={HeaderImage3}
                                        alt=""
                                        className="logo-image"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-7">
                            <nav className="header__menu">
                                <ul>
                                    <li className="" id="homenav">
                                        <Link to="/" className="nav-link">
                                            Home
                                        </Link>
                                    </li>

                                    <li id="shopnav">
                                        <Link to="/shop" className="nav-link">
                                            Shop
                                        </Link>
                                    </li>
                                    {/*  <li id="shopnav">
                                        <Link to="/shop" className="nav-link">
                                            Collections
                                        </Link>
                                    </li> */}
                                    <li id="shopnav">
                                        <Link
                                            to="/booking"
                                            className="nav-link">
                                            Booking
                                        </Link>
                                    </li>
                                    <li id="categorynav">
                                        <a href="#">Categories</a>
                                        <ul className="dropdown">
                                            <li>
                                                <Link to="/wedding">
                                                    Wedding
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/corporate">
                                                    Corporate
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/ready">
                                                    Ready To Wear
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link tp="/offers">Offers</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">Blogs</Link>
                                    </li>
                                    <li>
                                        <Link to="/careers">Careers</Link>
                                    </li>
                                    <li>
                                        <Link to="/careers">Contacts</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-1 ">
                            <div className="header__right">
                                <ul className="header__right__widget">
                                    <li>
                                        <Link to="/cart">
                                            <span className="icon_cart"></span>
                                            <div className="tip">
                                                {cartItems}
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-1 ">
                            <div className="header__right">
                                <ul className="header__right__widget">
                                    <li>
                                        <Form
                                            autocomplete="off"
                                            key={1}
                                            id="add-to-cart1">
                                            {' '}
                                            <div className="">
                                                <Form.Group controlId="exampleForm.ControlSelect1">
                                                    <Form.Control
                                                        as="select"
                                                        className="select-bar"
                                                        name="currency"
                                                        onChange={handleSubmit(
                                                            submitHandler
                                                        )}
                                                        ref={register({
                                                            required: true
                                                        })}>
                                                        <option>
                                                            {currency}
                                                        </option>
                                                        <option value="0">
                                                            {GHCS}
                                                        </option>
                                                        <option value="1">
                                                            {USDS}
                                                        </option>
                                                        <option value="2">
                                                            {GBRS}
                                                        </option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </div>{' '}
                                        </Form>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </header>
        </>
    );
};

Navbars.propTypes = {
    cartItems: RPT.string,
    likedItems: RPT.string,
    currency: RPT.string,
    changeCurrency: RPT.func
};

const mapStateToProps = state => ({
    cartItems: state.cart.numberItems,
    likedItems: state.cart.numberLikedItems,
    currency: state.cart.currency
});

const mapDispatchToProps = dispatch => {
    return {
        changeCurrency: data => {
            dispatch(changeCurrency(data));
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Navbars));
