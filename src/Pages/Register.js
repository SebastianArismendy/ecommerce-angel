import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Spinner, InputGroup } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/high-res.css';
import '../assets/register/style.css';

const Register = () => {
    const [loading, setLoading] = useState(false);
    const [number, setNumber] = useState(null);
    const [theme] = useThemeHook();


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        const username = form.username.value;
        const password = form.password.value;
        const firstname = form.firstName.value;
        const lastname = form.lastName.value;
        const email = form.email.value;

        if (username && password && firstname && lastname && email && number) {
            setLoading(true);
            console.log('call api here');
            console.log(username, password, firstname, lastname, email, number);
        }
    }
    return (
        <div className='fondo'>
            <Row className="justify-content-center mt-5">
                <Col xs={11} sm={10} md={8} lg={4} className='rounded container-font'>
                    <h1 className='title'>
                        Crear una cuenta
                    </h1>
                    <Form className='form-container' onSubmit={handleSubmit}>
                        <Row>
                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control name="firstName" type="text" placeholder="Ingresa tu nombre" required />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Label>Apellidos</Form.Label>
                                <Form.Control name="lastName" type="text" placeholder="Ingresa tus apellidos" required />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Ingresa tu correo" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control name="username" type="text" placeholder="Ingresa un nombre de usuario" minLength={3} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Celular</Form.Label>
                            <PhoneInput
                                country={'co'}
                                value={number}
                                onChange={phone => setNumber(phone)}
                                className="text-dark"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Ingresa tu contraseña" minLength={6} required />
                        </Form.Group>
                        <Button
                            type="submit"
                            className='btn btn-dark btn-block button-tm'
                            disabled={loading}
                            style={{ border: 0 }}
                        >
                            {loading ?
                                <>
                                    <Spinner
                                        as="span"
                                        animation="grow"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    &nbsp;Loading...
                                </> : 'Continue'
                            }
                        </Button>
                        <a href='/sign-in' className="btn btn-dark btn-block button-tm">Cancelar</a>

                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Register;