import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartCanvas from '../CartCanvas/CartCanvas';
import { CartContext } from '../../context/cartContext';
import './NavbarSection.css'
import ModalUI from '../UI/Modal/ModalUI';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const NavbarUI = () => {

  /*********************  Modal Product  *********************/
  const [showModalLoginForm, setShowModalLoginForm] = useState(false)
  const openLoginForm = (e) => {
    e.preventDefault();
    setShowModalLoginForm(true);
  }

  const [basketActiveClass, setBasketActiveClass] = useState(false)
  const handleToggleActive = () => {
    setBasketActiveClass(true);
    setTimeout(() => {
      setBasketActiveClass(false)
    }, 2500);
  };

  const basketIconRef = useRef(null);

  const [cartItems, setCartItems] = useContext(CartContext)
  let qtyAll = 0

  for (let item of cartItems) {
    qtyAll += item.qty

  }

  useEffect(() => {
    handleToggleActive()
  }, [cartItems])

  const expand = "lg";
  const [showCart, setShowCart] = useState(false);


  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);


  return (
    <>

      <Navbar key={expand} fixed='top' expand={expand} className="mb-3 nav-custom">
        <Container fluid>

          <Link to="/" className="brand-custom navbar-brand">فست فود اینترنتی</Link>

          <div className='d-flex'>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="bar-icon-container">
              <span className="material-icons bar-icon">menu</span>
            </Navbar.Toggle>


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

export default NavbarUI

