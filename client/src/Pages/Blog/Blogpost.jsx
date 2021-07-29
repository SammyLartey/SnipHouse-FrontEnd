import React, { useEffect, useState } from 'react';
import RPT from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { selectBlog } from '../../Actions/blog-actions';
import { blog1, blog2, blog3, blog4 } from '../../values';
import { Link } from 'react-router-dom';
import $ from 'jquery';
export const Blogpost = ({ blog, blogs }) => {
    useEffect(() => {
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
    }, []);

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
                                <a href="./blog.html">Blog</a>
                                <span>{blog.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="blog-details spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <div className="blog__details__content">
                                <div className="blog__details__item">
                                    <img src={blog4} alt="" />
                                    <div className="blog__details__item__title">
                                        <span className="tip">Snip House</span>
                                        <h4>{blog.name}</h4>
                                        <ul>
                                            <li>{blog.date_created}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog__details__desc">
                                    <p>{blog.body}</p>
                                </div>

                                <div className="blog__details__tags">
                                    <a href="#">Fashion</a>
                                    <a href="#">Street style</a>
                                    <a href="#">Diversity</a>
                                    <a href="#">Beauty</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="blog__sidebar">
                                <div className="blog__sidebar__item">
                                    <div className="section-title">
                                        <h4>Featured posts</h4>
                                    </div>
                                    <a href="#" className="blog__feature__item">
                                        <div className="blog__feature__item__pic">
                                            <img
                                                src="img/blog/sidebar/fp-1.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="blog__feature__item__text">
                                            <Link
                                                to="/blogdetails"
                                                onClick={() => {
                                                    selectBlog(blogs[0]);
                                                }}>
                                                <h6>{blogs[0].name}</h6>
                                                <span>
                                                    {blogs[0].date_created}
                                                </span>
                                            </Link>
                                        </div>
                                    </a>
                                    <a href="#" className="blog__feature__item">
                                        <div className="blog__feature__item__pic">
                                            <img
                                                src="img/blog/sidebar/fp-2.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="blog__feature__item__text">
                                            <Link
                                                to="/blogdetails"
                                                onClick={() => {
                                                    selectBlog(blogs[1]);
                                                }}>
                                                <h6>{blogs[1].name}</h6>{' '}
                                                <span>
                                                    {blogs[1].date_created}
                                                </span>
                                            </Link>
                                        </div>
                                    </a>
                                    <a href="#" className="blog__feature__item">
                                        <div className="blog__feature__item__pic">
                                            <img
                                                src="img/blog/sidebar/fp-3.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="blog__feature__item__text">
                                            <Link
                                                to="/blogdetails"
                                                onClick={() => {
                                                    selectBlog(blogs[2]);
                                                }}>
                                                <h6>{blogs[2].name}</h6>
                                            </Link>
                                            <span>{blogs[2].date_created}</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

Blogpost.propTypes = { blog: RPT.object, blogs: RPT.array };

const mapStateToProps = state => ({
    blog: state.blog.blogData,
    blogs: state.blog.blogs
});

const mapDispatchToProps = dispatch => {
    return {
        selectBlog: data => {
            dispatch(selectBlog(data));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blogpost);
