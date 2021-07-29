import React, { useEffect, useState } from 'react';
import RPT from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import {} from '../../Actions/blog-actions';
import { Link } from 'react-router-dom';

import $ from 'jquery';
export const Offers = () => {
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
            <section className="blog spad">
                <div className="container"></div>
            </section>
            <Footer />
        </>
    );
};

Offers.propTypes = {};

const mapDispatchToProps = dispatch => {};

export default connect(mapDispatchToProps)(Offers);
