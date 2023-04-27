import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import CartCanvas from '../CartCanvas/CartCanvas';
import ModalUI from '../UI/Modal/ModalUI';
import './NavbarSection.css'


const NavbarSection = (props) => {

  /*********************  Basket Context  *********************/
  const [cartItems, setCartItems] = useContext(CartContext)
  let qtyAll = 0    // Total items in the Shopping Cart
  for (let item of cartItems) {
    qtyAll += item.qty
  }

  useEffect(() => {
    console.log("NavBar..");
  })

  /*********************  Modal Login Form  *********************/
  const [showModalLoginForm, setShowModalLoginForm] = useState(props.modalLogin)
  const openLoginForm = (e) => {
    e.preventDefault();
    setShowModalLoginForm(true);
  }


  /*********************  Counter Basket Effect  *********************/
  const [basketActiveClass, setBasketActiveClass] = useState(false)
  const handleToggleActive = () => {
    setBasketActiveClass(true);
    setTimeout(() => {
      setBasketActiveClass(false)
    }, 2500);
  };
  useEffect(() => {
    handleToggleActive()
  }, [cartItems])


  /********************* Modal Canvas Cart *********************/
  const [showCart, setShowCart] = useState(false);
  const handleCloseCart = () => setShowCart(false);  // Close Cart Modal
  const handleShowCart = () => setShowCart(true);    //  Open Cart Modal


  /********************* NavBar Custom *********************/
  const expand = "lg";   // Nav expand responsive size

  return (
    <>

      <Navbar key={expand} fixed='top' variant="dark" expand={expand} className="mb-3 nav-custom">
        <Container fluid>
          <Link to="/" className="brand-custom navbar-brand">فست فود اینترنتی</Link>
          <div className='d-flex'>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="bar-icon-container" />

            <Button className="d-block d-lg-none btn basket-container border-0 bg-none py-0"
              type="button" onClick={handleShowCart} style={{ marginLeft: '6px' }}>
              <span className={`sum-basket text-white ${basketActiveClass ? 'active' : ''}`}>{qtyAll}</span>
              <span className="material-icons basket-icon">
                shopping_cart
              </span>
            </Button>

          </div>


          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >


            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">

                <Link className="nav-link" to="/Products">سفارش اینترنتی غذا</Link>
                <Link className="nav-link" to="/branches">شعبه ها</Link>
                <Link className="nav-link" to="/about">درباره ما</Link>
                <a className="nav-link" onClick={(e) => openLoginForm(e)} style={{ cursor: 'pointer' }}>ورود</a>

                <Button className="d-none d-lg-block btn basket-container border-0 bg-none py-0"
                  onClick={handleShowCart} style={{ marginLeft: '6px' }}>
                  <span className={`sum-basket text-white ${basketActiveClass ? 'active' : ''}`}>{qtyAll}</span>
                  <span className="material-icons basket-icon">
                    shopping_cart
                  </span>
                </Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <CartCanvas show={showCart} handleClose={handleCloseCart} />

      <ModalUI show={showModalLoginForm} modalType="loginform" handleClose={() => setShowModalLoginForm(false)} />

    </>
  );
}

export default NavbarSection

