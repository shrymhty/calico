import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { product_list } from "../../assets/assets";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import "./Cart.css";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const cartItemDetails = Object.entries(cartItems).map(([id, quantity]) => {
    const product = product_list.find((item) => item.id === parseInt(id));
    return {
      ...product,
      quantity,
    };
  });

  console.log(cartItemDetails);

  return (
    <div className="cart-container">
      <h2>SHOPPING CART</h2>
      {cartItemDetails.length === 0 ? (
        <p>Your Cart is Empty</p>
      ) : (
        <div className="cart">
          <div className="cart-items">
            <div className="cart-items-title">
              <p>Products</p>
              <p>Description</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Remove</p>
            </div>

            {cartItemDetails.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="product-name-img">
                    <img src={item.image} alt="" />
                    <h4>{item.name}</h4>
                </div>
                <p>{item.description}</p>
                <p>₹{item.price}</p>
                <p>{item.quantity}</p>
                <p>₹{item.price * item.quantity}</p>
                <button className="delete-btn">X</button>
              </div>
            ))}
          </div>
          <OrderSummary />
        </div>
      )}
    </div>
  );
};

export default Cart;
