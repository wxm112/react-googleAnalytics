import React from 'react';
import withGaWrapper from './GaWrapper';

const CartPage = ({ products, sendGaEcommerce }) => {
    sendGaEcommerce(products);
    const product = products[0]
    return (
        <div>
            <p>Product's name is {product.name}</p>
            <p>Product's productId is {product.id}</p>
            <p>Product's category is {product.category}</p>
        </div>
    )
}

export default withGaWrapper(CartPage);