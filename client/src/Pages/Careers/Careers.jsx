import React, { useEffect, useState } from 'react';
import RPT from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import {} from '../../Actions/blog-actions';
import { Link } from 'react-router-dom';
import './career.scss';

import $ from 'jquery';
export const Careers = () => {
    useEffect(() => {
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
    }, []);
    useEffect(() => {}, []);

    return (
        <>
            <Navbar />
            <section className="career-banner"></section>
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="section-title">
                                <h4>Working At Snip House</h4>
                                <p className="mt-3">
                                    At Snip House, we believe in a team-work
                                    approach with everyone working together to
                                    produce the finest collection of clothes.We
                                    are always looking for both young and
                                    experienced talents to join our team.On
                                    joining us, you will get to express your
                                    creative self without restriction and build
                                    on you talent through knowledge sharing,
                                    professional courses and in-house training
                                </p>
                            </div>
                            <div className="section-title">
                                <h4>Find us exciting ??</h4>
                                <p className="mt-3">
                                    Submit your portfolio to
                                    careers@sniphouseonline.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

Careers.propTypes = {};

const mapDispatchToProps = dispatch => {};

export default connect(mapDispatchToProps)(Careers);
