import React, { useEffect, useState } from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { MdSearch } from 'react-icons/md';
import SearchFilter from 'react-filter-search';
import ProductCard from '../components/ProductCard';
import Carrousel from '../components/Carrousel';

const Home = () => {
    const [theme] = useThemeHook();
    const [searchInput, setSearchInput] = useState('');
    const [productData, setProductData] = useState([]);

    async function getResponseNode(){
        const res = await fetch('http://localhost/api/students')
            .then(res=> res.json());
            // setProductData(await res);
        console.log(res)
    }

    async function getResponse(){
        const res = await fetch('https://fakestoreapi.com/products',{mode: 'cors'})
                          .then(res=> res.json());
                          setProductData(await res);
    }

    useEffect(() => {
        getResponse();
        // getResponseNode();
    }, []);

    return (
        <div>
            <Carrousel />
            <Container>
                <Row className="justify-content-center">
                    <Col className="mb-3 mx-auto text-center">
                        <h2 className='text-black my-5'>Productos</h2>
                        <InputGroup className="mb-">

                            <FormControl
                                placeholder="Busca tus productos"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                className={theme ? 'bg-light-black text-light' : 'bg-light text-black'}
                            />
                            <InputGroup.Text className='bg-light .text-dark'>
                                <MdSearch size="2rem" />
                            </InputGroup.Text>
                        </InputGroup>
                    </Col>
                    <SearchFilter
                        value={searchInput}
                        data={productData}
                        renderResults={results => (
                            <Row className="justify-content-center">
                                {results.map((item, i) => (
                                    <ProductCard data={item} key={i} />
                                ))}
                            </Row>
                        )}
                    />

                </Row>
            </Container>
        </div>

    );
};

export default Home;