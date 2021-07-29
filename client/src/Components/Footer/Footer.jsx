import React from 'react';
import { visa, HeaderImage3 } from '../../values';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-7">
                            <div className="footer__about">
                                <div className="footer__logo">
                                    <a href="./index.html">
                                        <img
                                            src={HeaderImage3}
                                            alt=""
                                            className="logo-image"
                                        />
                                    </a>
                                </div>
                                <p>
                                    At Snip House, we believe in a team-work
                                    approach with everyone working together to
                                    produce the finest collection of clothes
                                </p>
                                <div className="footer__payment">
                                    <a href="#">
                                        <img src={visa} alt="" />
                                    </a>
                                    <a href="#">
                                        <img src={visa} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-5">
                            <div className="footer__widget">
                                <h6>Quick links</h6>
                                <ul>
                                    <li>
                                        <Link to="/blog">Blogs</Link>
                                    </li>
                                    <li>
                                        <Link to="/careers">Careers</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-lg-2 col-md-3 col-sm-4">
                            <div className="footer__widget">
                                <h6>Account</h6>
                                <ul>
                                    <li>
                                        <a href="#">My Account</a>
                                    </li>
                                    <li>
                                        <a href="#">Orders Tracking</a>
                                    </li>
                                    <li>
                                        <a href="#">Checkout</a>
                                    </li>
                                    <li>
                                        <a href="#">Wishlist</a>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        <div className="col-lg-4 col-md-8 col-sm-8">
                            <div className="footer__newslatter">
                                <h6>NEWSLETTER</h6>
                                <form action="#">
                                    <input type="text" placeholder="Email" />
                                    <button type="submit" className="site-btn">
                                        Subscribe
                                    </button>
                                </form>
                                <div className="footer__social">
                                    <a href="https://www.facebook.com/Snip-House-108222644087894/">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="https://twitter.com/Snip_House?s=08">
                                        <i className="fa fa-twitter"></i>
                                    </a>

                                    <a href="https://instagram.com/sniphouse?igshid=tnd53j4hbrb4">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                            <div className="footer__copyright__text"></div>
                            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
