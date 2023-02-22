import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { useCart } from 'react-use-cart';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { Link } from "@reach/router";
import '../assets/css/ProductCard/style.css';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const ProductCard = (props) => {
    let { image, price, title, id } = props.data;
    const [theme] = useThemeHook();
    const { addItem } = useCart();
    const [show, setShow] = useState(false);

    const addToCart = () => {
        addItem(props.data);
        setShow(true);
    }
    return (
        <Card
            style={{ backgroundColor: 'transparent', borderColor: 'transparent', width: '17rem', height: 'auto' }}
            className={`${theme ? 'text-light' : 'text-black'} mx-auto mb-1`}
        >
            <Card.Body >
                <div className='productCard__container'>
                    <Link to={`/product-details/${id}`}>
                        <div className='productCard__container-img'>
                            <div style={{ width: '9rem' }}>
                                <Card.Img variant="top" src={image} className="img-fluid" />
                            </div>
                        </div>
                    </Link>
                    <Button
                        onClick={() => addToCart()}
                        className='productCard__container-button align-item-center m-auto border-0'
                    >
                        <MdOutlineAddShoppingCart size="1.8rem" /> Agregar
                    </Button>
                </div>
                <Card.Title style={{ color: '#666', fontSize: '18px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    {title}
                </Card.Title>
                <Card.Title style={{ fontSize: '22px' }}>
                    $<span style={{ fontSize: '22px' }} className="h3">{price}</span>
                </Card.Title>

            </Card.Body>
            <ToastContainer className='add-cart'>
                <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide bg={'Info'}>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Agregado al carrito de compras</strong>
                        <small>justo ahora</small>
                    </Toast.Header>
                    <Toast.Body>Producto agregado al carrito!</Toast.Body>
                </Toast>
            </ToastContainer>
        </Card>
    );
};

export default ProductCard;