import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
import Product from '../Product/Product';

const Shop = (props) => {
    console.log(props)
    const { products, addToCart } = props;
    return (
        <div className="row container-fluid">
            <h2 className="text-center my-4">All Players</h2>
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                    addToCart = {addToCart}
                    />)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);