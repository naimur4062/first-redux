import React from 'react';

const Product = (props) => {
    const {addToCart, product} = props;
    return (
        <div style={{border: '1px solid blue', margin: '10px', padding: '10px', width: '300px'}}>
            <h4>{product.name}</h4>
            <button onClick={() => addToCart(product.id, product.name)}>Add to Cart</button>
        </div>
    );
};

export default Product;