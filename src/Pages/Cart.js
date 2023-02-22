import React from 'react';
import { Button, Container, Col, Row, Table } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { BsCartCheck, BsCartX } from 'react-icons/bs';
import '../assets/cart/style.css';

const Cart = () => {
    const [theme] = useThemeHook();
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    return (
        <div className='fondo'>


            <div className='jumbotron'>
                <h1 className={`${theme ? 'text-light' : 'text-dark'} my-5 text-center title `}>
                    {isEmpty ? 'Your Cart is Empty' : 'Cart'}
                </h1>
            </div>
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Table responsive="sm" variant={theme ? 'dark' : 'white'} className="mb-5 table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Producto</th>
                                <th></th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => {
                                return (
                                    <tr className='cart-items' key={index}>
                                        <td>
                                            <Button variant="outline-dark" onClick={() => removeItem(item.id)} className="ms-2">X</Button>
                                        </td>
                                        <td>
                                            <div style={{
                                                background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                                                justifyContent: 'center', alignItems: 'center'
                                            }}>
                                                <div style={{ padding: '.5rem' }}>
                                                    <img src={item.image} style={{ width: '4rem' }} alt={item.title} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h6 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverFlow: 'ellipsis' }}>
                                                {item.title}
                                            </h6>
                                        </td>
                                        <td>${item.price}</td>
                                        <td>
                                            <div>
                                                Quantity ({item.quantity})
                                                <Button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} variant="outline-dark ms-2">-</Button>
                                                <Button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} variant="outline-dark ms-2">+</Button>
                                            </div>
                                        </td>

                                    </tr>
                                )
                            })}
                        </tbody>

                    </Table>

                    {!isEmpty &&

                        <div className='card-container'>

                            <div className='container '>
                                <h2>Totales del carro</h2>
                                <table className="table-td table">
                                    <tbody>
                                        <tr>
                                            <td>Total:</td>
                                            <td>$ {cartTotal}</td>
                                        </tr>
                                        <tr>
                                            <td>Total Price</td>
                                            <td>$ {cartTotal}</td>
                                        </tr>

                                    </tbody>
                                </table>
                                <div class="btn-group btn-group-lg button-group">
                                    <Button variant="btn btn-dark" className="m-2" onClick={() => emptyCart()}>
                                        <BsCartX size="1.7rem" />
                                        Clear Cart
                                    </Button>

                                    <Button variant="btn btn-dark" className="m-2">
                                        <BsCartCheck size="1.7rem" />
                                        Proceed to checkout
                                    </Button>
                                </div>
                            </div>
                        </div>
                    }
                </Row>



            </Container>

        </div>

    );
};

export default Cart;