import React, { useContext } from 'react'
import './OrderSummary.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {

    const {getCartTotal} = useContext(StoreContext);
    const navigate = useNavigate();
    
  return (
    <div className='order-summary'>
        <h2>Order Summary</h2>
        <div className="product-total">
            <p>Subtotal</p>
            <p>₹ {getCartTotal()}</p>
        </div>
        <div className="shipping">
            <p>Shipping</p>
            <p>₹ 250</p>
        </div>
        <div className="total">
            <p>Total</p>
            <p>₹ {getCartTotal() + 250}</p>
        </div>
        <button className="checkout-btn" onClick={() => navigate('/order')}>
            Checkout
        </button>
    </div>
  )
}

export default OrderSummary