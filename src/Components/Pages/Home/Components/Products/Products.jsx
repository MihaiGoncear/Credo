import React from "react";
import { PRODUCTS } from "utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { TRANSLATES } from "utils/translates";
import ProductsItem from "./Components/ProductsItem";

function Products() {
    // @ts-ignore
    const currLanguage = useSelector((state) => state.language.language);
    return (
        <div className='home__news'>
            <div className='home__news--title ui__title ui__display-justify-between ui__display-align-center'>
                {TRANSLATES.productsTitle[currLanguage]}
            </div>
            <div className='home__news--items ui__display-justify-between ui__rows'>
                {PRODUCTS.map((news, index) => (
                    <ProductsItem
                        key={index}
                        news={news}
                    />
                ))}
            </div>
        </div>
    );
}

export default Products;
