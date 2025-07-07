import React from 'react'
import './OrderSummary.css'

const OrderSummary = () => {
  return (
    <div className='order-summary'>
        <h2>Order Summary</h2>
        <div className="product-total">
            <p>Subtotal</p>
            <p>12</p>
        </div>
        <div className="shipping">
            <p>Shipping</p>
            <p>2</p>
        </div>
        <div className="total">
            <p>Total</p>
            <p>12003</p>
        </div>
        <button className="checkout-btn">
            Checkout
        </button>
    </div>
  )
}

export default OrderSummary