import React, { useEffect, useState } from 'react';
import RPT from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../../Components/Navbar/Navbar';
import Social from '../../Components/Social/Social';
import Footer from '../../Components/Footer/Footer';
import { useForm } from 'react-hook-form';
import $ from 'jquery';
import {} from '../../values';
import { addToCart } from '../../Actions/cart-actions';
import OwlCarousel from 'react-owl-carousel';
import ReactStars from 'react-rating-stars-component';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Button, Form, Modal, Row, Col, Container } from 'react-bootstrap';

const ProductDetails = ({ product, addToCart, currency, currency_value }) => {
    useEffect(() => {
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
    }, []);
    const { register, handleSubmit } = useForm();
    const { register: register2, handleSubmit: handleSubmit2 } = useForm();
    const [viewState, setviewState] = useState(false);

    const handleViewShow = () => setviewState(true);
    const handleViewClose = () => setviewState(false);

    const submitHandler = data => {
        let productDetails = { type: '1', size: data.size, product };
        addToCart(productDetails);
        // document.getElementById('add-user-form').reset();
        // document.getElementById('overlay-8').style.display = 'none';
    };
    const submitHandler2 = data => {
        let productDetails = { type: '2', size: data, product };
        addToCart(productDetails);
        handleViewClose();
        // document.getElementById('add-user-form').reset();
        // document.getElementById('overlay-8').style.display = 'none';
    };

    let viewModal = (
        <Modal show={viewState} onHide={handleViewClose}>
            <Modal.Header closeButton>
                <Modal.Title className="modal-title">
                    Enter dress Measurements
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Form
                        autocomplete="off"
                        key={1}
                        onSubmit={handleSubmit2(submitHandler2)}
                        id="add-to-cart1">
                        {' '}
                        <div className="product__details__button">
                            <Row>
                                <Col>
                                    {' '}
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Across Back</Form.Label>{' '}
                                        <br />
                                        <Form.Control
                                            type="number"
                                            name="across_back"
                                            ref={register2({
                                                required: true
                                            })}></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Shoulder</Form.Label> <br />
                                        <Form.Control
                                            type="number"
                                            name="shoulder"
                                            ref={register2({
                                                required: true
                                            })}></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>High bust</Form.Label>{' '}
                                        <br />
                                        <Form.Control
                                            type="number"
                                            name="high_bust"
                                            ref={register2({
                                                required: true
                                            })}></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {' '}
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Bust</Form.Label> <br />
                                        <Form.Control
                                            type="number"
                                            name="bust"
                                            ref={register2({
                                                required: true
                                            })}></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>
                                            Nipple to nipple
                                        </Form.Label>{' '}
                                        <br />
                                        <Form.Control
                                            type="number"
                                            name="nipple_to_nipple"
                                            ref={register2({
                                                required: true
                                            })}></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>
                                            Shoulder to waist
                                        </Form.Label>{' '}
                                        <br />
                                        <Form.Control
                                            type="number"
                                            name="shoulder_to_waist"
                                            ref={register2({
                                                required: true
                                            })}></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {' '}
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>
                                            Shoulder to nipple
                                        </Form.Label>{' '}
                                        <br />
                                        <Form.Control
                                            type="number"
                                            name="shoulder_to_nipple"
                                            ref={register2({
                                                required: true
                                            })}></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Around shoulder</Form.Label>{' '}
                                        <br />
                                        <Form.Control
                                            type="number"
                                            name="around_shoulder"
                                            ref={register2({
                                                required: true
                                            })}></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>
                                            Shoulder to underbust
                                        </Form.Label>{' '}
                                        <br />
                                        <Form.Control
                                            type="number"
                                            name="shoulder_to_underbust"
                                            ref={register2({
                                                required: true
                                            })}></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {' '}
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Innermost waist</Form.Label>{' '}
                                        <br />
                                        <Form.Control
                                            type="number"
                                            name="innermost_waist"
                                            ref={register2({
                                                required: true
                                            })}></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Hip</Form.Label> <br />
                                        <Form.Control
                                            type="number"
                                            name="hip"
                                            ref={register2({
                                                required: true
                                            })}></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>
                                            Shoulder to knee
                                        </Form.Label>{' '}
                                        <br />
                                        <Form.Control
                                            type="number"
                                            name="shoulder_to_knee"
                                            ref={register2({
                                                required: true
                                            })}></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {' '}
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Dress length</Form.Label>{' '}
                                        <br />
                                        <Form.Control
                                            type="number"
                                            name="dress_length"
                                            ref={register2({
                                                required: true
                                            })}></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Around arm</Form.Label>{' '}
                                        <br />
                                        <Form.Control
                                            type="number"
                                            name="around_arm"
                                            ref={register2({
                                                required: true
                                            })}></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Armhole</Form.Label> <br />
                                        <Form.Control
                                            type="number"
                                            name="armhole"
                                            ref={register2({
                                                required: true
                                            })}></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Button
                                type="submit"
                                className="cart-btn add-cart-extra">
                                <span className="icon_bag_alt"></span> Add to
                                Cart
                            </Button>
                        </div>{' '}
                    </Form>
                </Container>
            </Modal.Body>
        </Modal>
    );
    return (
        <>
            <Navbar />
            <section className="product-details spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="product__details__pic">
                                <div className="product__details__pic__left product__thumb nice-scroll">
                                    <a className="pt active" href="#product-1">
                                        <img src={product.picturea} alt="" />
                                    </a>
                                    <a className="pt" href="#product-2">
                                        <img src={product.pictureb} alt="" />
                                    </a>
                                    <a className="pt" href="#product-3">
                                        <img src={product.picturec} alt="" />
                                    </a>
                                    <a className="pt" href="#product-4">
                                        <img src={product.pictured} alt="" />
                                    </a>
                                </div>
                                <div className="product__details__slider__content">
                                    <OwlCarousel
                                        className="product__details__pic__slider"
                                        margin={0}
                                        items={1}
                                        nav>
                                        {' '}
                                        <img
                                            data-hash="product-1"
                                            className="product__big__img"
                                            src={product.picturea}
                                            alt=""
                                        />
                                        <img
                                            data-hash="product-2"
                                            className="product__big__img"
                                            src={product.pictureb}
                                            alt=""
                                        />
                                        <img
                                            data-hash="product-3"
                                            className="product__big__img"
                                            src={product.picturec}
                                            alt=""
                                        />
                                        <img
                                            data-hash="product-4"
                                            className="product__big__img"
                                            src={product.pictured}
                                            alt=""
                                        />
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product__details__text">
                                <h3>
                                    {product.name}
                                    <span>{product.category}</span>
                                </h3>
                                <div className="">
                                    <ReactStars
                                        count={5}
                                        value={5}
                                        size={20}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                </div>
                                <div className="product__details__price">
                                    {currency}{' '}
                                    {Math.ceil(product.price * currency_value)}{' '}
                                    <span></span>
                                </div>

                                <p>{product.description}</p>
                                <Form
                                    autocomplete="off"
                                    key={1}
                                    onSubmit={handleSubmit(submitHandler)}
                                    id="add-to-cart1">
                                    {' '}
                                    <div className="product__details__button">
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>
                                                Select Dress Size
                                            </Form.Label>{' '}
                                            <br />
                                            <Form.Control
                                                as="select"
                                                className="select-bar"
                                                name="size"
                                                ref={register({
                                                    required: true
                                                })}>
                                                <option>UK size 6</option>
                                                <option>UK size 8</option>
                                                <option>UK size 10</option>
                                                <option>UK size 12</option>
                                                <option>UK size 14</option>
                                                <option>UK size 16</option>
                                                <option>US size 6</option>
                                                <option>US size 8</option>
                                                <option>US size 10</option>
                                                <option>US size 12</option>
                                                <option>US size 14</option>
                                                <option>US size 16</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Button
                                            className="cart-btn add-cart-extra"
                                            onClick={() => {
                                                handleViewShow();
                                            }}>
                                            <span className="icon_bag_alt"></span>{' '}
                                            Custom Measurements
                                        </Button>

                                        <Button
                                            type="submit"
                                            className="cart-btn add-cart-extra">
                                            <span className="icon_bag_alt"></span>{' '}
                                            Add to Cart
                                        </Button>
                                    </div>{' '}
                                </Form>

                                <div className="product__details__widget">
                                    <ul>
                                        <li>
                                            <span>Availability:</span>
                                            <div>In stock</div>
                                        </li>
                                        <li>
                                            <span>Available color:</span>
                                            Available as seen
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {viewModal}
            </section>

            <Footer />
        </>
    );
};

ProductDetails.propTypes = {
    product: RPT.object,
    addToCart: RPT.func,
    currency: RPT.string,
    currency_value: RPT.float
};

const mapStateToProps = state => ({
    product: state.product.productDetails,
    currency: state.cart.currency,
    currency_value: state.cart.currency_value
});

const mapDispatchToProps = dispatch => {
    return {
        addToCart: data => {
            dispatch(addToCart(data));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
