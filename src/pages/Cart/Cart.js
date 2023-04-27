import React from "react";
import NavbarSection from "../../components/NavbarSection/NavbarSection";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Order from "../../components/Order/Order";
import Footer from "../../components/Footer/Footer";

const Cart = () => {
    return (
    <>
        <NavbarSection modalLogin={true} />
        <Breadcrumb title="سفارش غذا" />
        <Order />
        <Footer />
    </>
    )
}
export default Cart;