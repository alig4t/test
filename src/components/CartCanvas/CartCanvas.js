import React, { useState,useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './CartCanvas.css'

const CartCanvas = (props) => {


    
  const [cartItems, setCartItems] = useContext(CartContext)
  const plusProduct = (item,index) => {
    const newBasket = [...cartItems];
    let newQty = item.qty + 1;
    let updatedItem = newBasket[index]
    updatedItem.qty = newQty;
    newBasket[index] = updatedItem
    setCartItems(newBasket)
  }
  const minesProduct = (item,index) => {
    const newBasket = [...cartItems];
    let newQty = item.qty - 1;
    if(newQty == 0){
      newBasket.splice(index,1);
    }else{
      let updatedItem = newBasket[index]
      updatedItem.qty = newQty;
      newBasket[index] = updatedItem
    }
    setCartItems(newBasket)
  }

  let sum = 0;
  let qtys = 0;

  const itemsList = cartItems.map((item,index) => {
    sum += ((item.price * (100 - item.offPercent)) / 100) * item.qty;
    qtys +=item.qty
    return (
      <li key={index}>
        <p className="h5">{item.title}</p>
        <div className="d-flex justify-content-between pt-2 font-sm">
          <p className="my-0"> {(item.price * (100 - item.offPercent)) / 100} تومان</p>

          <div className="quantity-box d-flex justify-content-between">

            <span className="material-icons qty-control" onClick={()=>plusProduct(item,index)}>
              add_circle
            </span>
            
            <span className="qty-current">{item.qty}</span>

            <span class="material-icons qty-control" onClick={()=>minesProduct(item,index)}>
              do_not_disturb_on
            </span>

          </div>

        </div>
      </li>
    )
  })




    return (
        <>
            <Offcanvas show={props.show} onHide={props.handleClose} scroll={true}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>سبد خرید</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        <ul className="cart-items">
                            {itemsList}
                        </ul>
                    </div>
                    <div className="w-100">
                        <h5>تعداد آیتم : {qtys} </h5>
                        <h5>مجموع خرید : {sum} تومان</h5>
                    </div>
                    <div className="dropdown mt-3 text-center">
                        <Button className="btn px-4 btn-canvas border-0" type="button">
                            نهایی کردن سفارش
                        </Button>

                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>

    );
}


export default CartCanvas
