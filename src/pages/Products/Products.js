import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
// import MenuNav from "../../components/MenuNav/MenuNav";
import ProductCards from "../../components/ProductCards/ProductCards";
import Footer from "../../components/Footer/Footer"
import productList from "../../components/ProductCards/list-products";

const Products = () => {

    let catLists = []

    const checkExistCat = (list, slug) => {
        for (let i = 0; i < list.length; i++) {
            if (list[i].href == slug) {
                return true
            }
        }
        return false
    }


    for (let item of productList) {
        if (checkExistCat(catLists, item.slug)) {
        } else {
            catLists.push({
                id: item.id,
                title: item.typePer,
                href: item.slug
            })
        }

    }

    return (
        <>
            <Breadcrumb title='سفارش اینترنتی غذا' />
            {/* <MenuNav cats={catLists} /> */}
            <ProductCards productList={productList} />
            <Footer />
        </>
    )
}
export default Products