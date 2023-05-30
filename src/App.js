import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './GlobalComponents/ThemeProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import { Router,Redirect } from "@reach/router";

//Pages
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import ProductDetails from "./Pages/ProductDetails";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";
import MyAccount from "./Pages/MyAccount";
import Admin from "./Pages/Administrador/Admin";

function App() {
  const [theme] = useThemeHook();
  // const [login] = useThemeHook();

  function AdminLogin() {
    const login = true;
    if (login) {
      return <Admin/>;
    }
    return <Redirect to="/" />
  }

  return (
    <main className={theme? 'bg-black': 'bg-light'} style={{ height: '100vh', overflowY: 'auto'}}>
      <Header/>
      <Router>
        <Home path="/" />
        <MyAccount path="my-account" />
        <SignIn path="sign-in"/>
        <Register path="register"/>
        <AdminLogin path='admin'/>
        <ProductDetails path="product-details/:productId"/>
        <Cart path="/cart" />
      </Router>
      <Footer/>
    </main>
  );
}

export default App;
