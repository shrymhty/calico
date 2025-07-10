import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import { product_list } from '../../assets/assets';

const PlaceOrder = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const {cartItems, getCartTotal} = useContext(StoreContext);

    const cartItemDetails = Object.entries(cartItems).map(([id, quantity]) => {
        const product = product_list.find((item) => item.id === parseInt(id));
        return {
        ...product,
        quantity,
        };
    });

  return (
    <div className='place-order-container'>
        <div className="place-order">
            <div className="delivery-info">
                <div className="top">
                    <h2 className="title">Contact</h2>
                    <div className="multi-fields">
                        <input type="text" placeholder='First Name' name='firstName' required/>
                        <input type="text" placeholder='Last Name' name='lastName' required />
                    </div>
                    <div className="multi-fields">
                        <input type="email" placeholder='Email Address' name='email' required />
                        <input type="text" placeholder="Phone number" name='phone' required />
                    </div>
                </div>
                <div className="bottom">
                    <h2 className='title'>Shipping Address</h2>
                    <input type="text" placeholder='Street, Locality' name='street' required />
                    <div className="multi-fields">
                        <input type="text" placeholder='City' name='city' required />
                        <input type="text" placeholder='State' name='state' required />
                    </div>
                    <div className="multi-fields">
                        <input type="text" placeholder='Zip Code' name='zipcode' required />
                        <input type="text" placeholder='Country' name='country' required />
                    </div>
                </div>
                <button className="payment">Continue To Payment</button>
            </div>
            <div className="order-details">
                <div className="order-items-accordian">
                    <div className="accordian-header" onClick={() => setIsOpen(!isOpen)}>
                       <h3>Your Order</h3>
                        <span>{isOpen ? "▲" : "▼"}</span> 
                    </div>
                    {isOpen && 
                        <div className="accordion-content">
                            <div className="order-list">
                                <div className="order-item-title">
                                    <p>Product</p>
                                    <p>Price</p>
                                </div>
                                <div className="order-items-list">
                                    {cartItemDetails.map((item) => (
                                        <div className="product-row">
                                            <div className="product-deets">
                                                <img src={item.image} className="item-image" />
                                                <p>{item.name} x {item.quantity}</p>
                                            </div>
                                            <p>₹{item.quantity * item.price}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className="price-details-checkout">
                    <div>
                        <p>Subtotal</p>
                        <p>{getCartTotal()}</p>
                    </div>
                    <div>
                        <p>Shipping Charges</p>
                        <p>₹250</p>
                    </div>
                </div>
                <div className='total-price-div'>
                    <p>Total</p>
                    <p>₹{getCartTotal() + 250}</p>
                </div>
                <p className='edit-cart' onClick={() => navigate("/cart")}>Edit Cart</p>
            </div>
        </div>
    </div>
  )
}

export default PlaceOrder