import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import Lightbox from 'react-lightbox-component';
import 'react-lightbox-component/build/css/index.css';
import './product-details.css';
import { useCart } from 'react-use-cart';
import { MdStar } from 'react-icons/md';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from '../components/ProductCard';


const ProductDetails = (props) => {
    const [productData, setProductData] = useState([]);
    const [productListData, setProductListData] = useState([]);
    const [theme] = useThemeHook();
    const { addItem } = useCart();
    const [show, setShow] = useState(false);

    useEffect(() => {
        getResponse();
        getResponseList();
    }, []);

    const addToCartProduct = () => {
        addItem(productData);
        setShow(true);
    }

    const getResponse = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${props.productId}`)
            .then(res => res.json());
        setProductData(await res);
    }

    async function getResponseList() {
        const res = await fetch('https://fakestoreapi.com/products')
            .then(res => res.json());
        setProductListData(await res);
    }


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true
                }
            }
        ]
    };

    return (
        <Container className="py-5">
            <Row className="justify-content-center mt-5">
                <Col xs={10} md={7} lg={5} className="p-0 lightbox__container">
                    <Lightbox
                        images={[
                            {
                                src: productData.image,
                                title: productData.title,
                                description: 'img 1'
                            },
                            {
                                src: productData.image,
                                title: productData.title,
                                description: 'img 2'
                            },
                            {
                                src: productData.image,
                                title: productData.title,
                                description: 'img 3'
                            },
                            {
                                src: productData.image,
                                title: productData.title,
                                description: 'img 4'
                            }
                        ]}
                    />
                </Col>
                <Col xs={10} md={7} lg={7} className={`${theme ? 'text-light' : 'text-black'} product-details`}>
                    <h1>{productData.title}</h1>
                    <h4>categoría: {productData.category}</h4>
                    <br />
                    <b className="h5">4.1 <MdStar size="1.8rem" /></b>
                    <p className="mt-3 " style={{ opacity: '0.8', fontWeight: '400' }}>
                        {productData.description}
                    </p>
                    <br></br>
                    <b className='text-dark h3 mt-3 d-block'>
                        ${productData.price}
                    </b>
                    <Button
                        onClick={() => addToCartProduct()}
                        className='bg-black'
                        style={{ borderRadius: '10px', padding: '10px 15px' }}
                    >
                        <MdOutlineAddShoppingCart size="1.8rem" />
                        Agregar al carrito
                    </Button>
                </Col>
            </Row>
            <ToastContainer className='add-cart'>
                <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide bg={'dark'}>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Agregado al carrito de compras</strong>
                        <small>justo ahora</small>
                    </Toast.Header>
                    <Toast.Body className='text-light'>Producto agregado al carrito!</Toast.Body>
                </Toast>
            </ToastContainer>
            <br></br>
            <h3 className='text-center mt-5 mb-3'>También te puede interesar</h3>
            <Slider className='slick__container' {...settings}>
                {productListData.map((item, i) => (
                    <ProductCard data={item} key={i} />
                ))}

            </Slider>
        </Container>
    );
};

export default ProductDetails;