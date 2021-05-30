import React from 'react';
import './Product.css';

const Product = (props) => {
    const { addToCart, product } = props;
    return (
        <div className="col-md-3 text-center d-flex justify-content-center align-items-center mb-5 card-area">
            <div className="player-container">
                <img src={product.img} alt="" />
                <h4>{product.name}</h4>
                <h4>Salary: ${product.salary}</h4>
                <h1>{product.country}</h1>
                <button className="addButton" onClick={() => addToCart(product.id, product.name)}>Add Player</button>
            </div>
        </div>
    );
};

export default Product;