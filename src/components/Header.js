import React, { useContext, useState, useEffect } from 'react';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import { ThemeContext } from '../GlobalComponents/ThemeProvider';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { VscAccount } from 'react-icons/vsc';
import { Link } from "@reach/router";
import { useCart } from "react-use-cart";
import Logo from '../images/logo.jpeg';
import { AiOutlineUser } from 'react-icons/ai';

const Header = () => {
  const { theme, setThemeMode } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(theme);

  useEffect(() => {
    setThemeMode(darkMode);
    console.log(darkMode)
  }, [darkMode]);

  const {
    isEmpty,
    totalItems,
  } = useCart();

  return (
    <Navbar collapseOnSelect expand="md"
      variant='dark'
      className='bg-black'
      style={{ width: '100%', position: 'fixed', zIndex: 100 }}
    >
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <Image
              src={Logo}

              className="footer__logo p-0"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="sign-in" className='nav-link text-light'>
              <AiOutlineUser size="1.8rem" />
              Iniciar sesión
            </Link>
            {/* <Link to="my-account" className='nav-link text-light'>
              <VscAccount size="1.8rem" />
              &nbsp;Mi cuenta
            </Link> */}
            <Link
              to="/cart"
              className='nav-link text-light d-flex align-items-center'
            >
              <MdOutlineShoppingCart size="2rem" />
              {!isEmpty && <span style={{ position: 'relative', left: '-21px', top: '-18px' }}>{totalItems}</span>}
              <span style={{ marginLeft: !isEmpty ? '-13px' : 0 }}>&nbsp;Carrito</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;