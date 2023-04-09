import React, { useState } from "react";
import NavbarUI from "../NavbarSection/NavbarSection";
import { CartProvider } from "../../context/cartContext";


const Layout = (props) => {
    return (
        <CartProvider>
            <NavbarUI />
            {props.children}
        </CartProvider>
    )
}

export default Layout