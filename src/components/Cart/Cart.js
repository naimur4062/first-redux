import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartAction';
import './Cart.css';

const Cart = (props) => {
    const { cart, removeFromCart } = props;
    return (
        <div>
            <h3 className="text-center my-4">Players name for final squad</h3>
            <div className="text-center my-2">
                {
                    cart.map(pd => <p style={{color: 'green'}} key={pd.cartId}>{pd.name}
                        <button className="remove ms-2" onClick={() => removeFromCart(pd.cartId)}>Remove</button>
                    </p>)
                }
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);