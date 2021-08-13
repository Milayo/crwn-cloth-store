import React from 'react';
import CustomButton from '../custombutton/custombutton.component';
import './cart.styles.scss';

const Cart = () => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items" />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
};

export default Cart;
