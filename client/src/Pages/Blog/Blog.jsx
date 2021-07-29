import React, { useEffect, useState } from 'react';
import RPT from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { fetchAllBlogs, selectBlog } from '../../Actions/blog-actions';
import { Link } from 'react-router-dom';
import { blog1, blog2, blog3, blog4 } from '../../values';
import $ from 'jquery';
export const Blog = ({ blogs, fetchAllBlogs, selectBlog }) => {
    useEffect(() => {
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
    }, []);
    useEffect(() => {
        fetchAllBlogs();
    }, []);

    let allBlogs = blogs.map(blog => (
        <div className="col-lg-4 col-md-4 col-sm-6" key={blog.id}>
            <div className="blog__item">
                <div
                    className="blog__item__pic set-bg"
                    data-setbg={blog1}></div>
                <div className="blog__item__text">
                    <h6>
                        <Link
                            to="/blogdetails"
                            onClick={() => {
                                selectBlog(blog);
                            }}>
                            {blog.name}
                        </Link>
                    </h6>
                    <ul>
                        {/* <li>
                                            by <span>S</span>
                                        </li> */}
                        <li>{blog.date_created}</li>
                    </ul>
                </div>
            </div>
        </div>
    ));
    return (
        <>
            <Navbar />
            <section className="blog spad">
                <div className="container">
                    <div className="row">
                        {allBlogs}
                        <div className="col-lg-12 text-center">
                            <a href="#" className="primary-btn load-btn">
                                Load more posts
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

Blog.propTypes = {
    blogs: RPT.array,
    fetchAllBlogs: RPT.func,
    selectBlog: RPT.func
};

const mapStateToProps = state => ({ blogs: state.blog.blogs });

const mapDispatchToProps = dispatch => {
    return {
        fetchAllBlogs: () => {
            dispatch(fetchAllBlogs());
        },
        selectBlog: data => {
            dispatch(selectBlog(data));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
