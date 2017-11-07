import React from 'react';
import withGaWrapper from './GaWrapper';

const CartPage = ({ products, sendGaEcommerce }) => {
    const product = products[0];
    sendGaEcommerce();
    return (
        <div>
            <p>Product's SKU is {product.SKU}</p>
            <p>Product's price is {product.Price}</p>
            <p>Product's productId is {product.ProductId}</p>
        </div>
    )
}

export default withGaWrapper(CartPage);