import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Spinner, InputGroup } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { Link, useNavigate } from "@reach/router";
import '../assets/login/style.css';

//icons
import { AiOutlineUser } from 'react-icons/ai';
import { VscKey } from 'react-icons/vsc';

const SignIn = () => {
    const [loading, setLoading] = useState(false);
    const [theme] = useThemeHook();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        const username = form.username.value;
        const password = form.password.value;
        if (username && password) {
            setLoading(true);
            fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            }).then(res => res.json())
                .then(json => sessionStorage.setItem("token", json.token))
                .catch(error => console.error(error))
                .finally(() => {
                    setLoading(false);
                    navigate('/', { replace: true })
                    alert('Login successfully');
                })
        }
    }
    return (
        <div className='fondo'>

            <Row className="justify-content-center mt-5 ">

                <Col xs={11} sm={10} md={8} lg={4} className='rounded container-font'>
                    <h1 className='title'>
                        Iniciar sesión
                    </h1>
                    <Form className='form-container' onSubmit={handleSubmit}>

                        <InputGroup className="mb-4 mt-5 form-group">
                            <InputGroup.Text>
                                <AiOutlineUser size="1.8rem" />
                            </InputGroup.Text>
                            <Form.Control name="username" type="text" placeholder="Usuario" minLength={3} required />
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <InputGroup.Text>
                                <VscKey size="1.8rem" />
                            </InputGroup.Text>
                            <Form.Control name="password" type="password" placeholder="Contraseña" minLength={6} required />
                        </InputGroup>
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
                                    &nbsp;Cargando...
                                </> : 'Ingresar'
                            }
                        </Button>
                        <Form.Group className="mt-3 text-center">
                            <Row className="py-1 border-bottom mb-3" />
                            <p>¿No tienes una cuenta?  <a href='/register' className="">Registrate</a>
                            </p>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default SignIn;