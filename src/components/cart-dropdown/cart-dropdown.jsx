import React from "react";
import CustomButton from "../custombutton/custombutton.component";
import CartItem from "../cart-item/cart-item.component";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { selectCartItems } from "../../redux/cart/cart.selector";

import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import "./cart.styles.scss";


const Cart = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden())
      }}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(Cart));
