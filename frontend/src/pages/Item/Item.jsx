import {React, useEffect, useContext, useState} from 'react'
import { useParams } from 'react-router-dom'
import { category_list } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import './Item.css'

const Item = () => {

    const {id} = useParams();
    const [quantity, setQuantity] = useState(0);
    
    const {cartItems, addToCart, removeFromCart, product_list, fetchCartItems, url, user} = useContext(StoreContext);

    const product = product_list.find((item) => item._id === id)

    useEffect(() => {
      console.log("Cart: ", cartItems);
    }, [cartItems]);

    useEffect(() => {
      fetchCartItems(); // populate cartItems in context
    }, [user]);

    useEffect(() => {
      if (!product) return;
      if (!cartItems) return;
      const cartItem = cartItems.find(item => item.productId === product._id);
      setQuantity(cartItem?.quantity || 0);
    }, [cartItems]);


    if (!product) {
        console.log("Product not available");
        return;
    }

    const categoryName = () => {
      const cat = category_list.find((cat_item) => cat_item.id === product.category);
      return cat.name;
    }

  return (
    <div className="item-page">
        <img src={`${url}/images/${product.image}`} alt={product.name} className="item-image" />
        <div className="item-info">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Category: {categoryName()}</p>
            <p className='price'>Price: <span>₹{product.price}</span></p>
            <div className="action-button">
              <button className="remove-btn" onClick={() => removeFromCart(product._id)}>-</button>
              <div className="quantity">{quantity}</div>
              <button className="add-btn" onClick={() => addToCart(product._id)}>+</button>
            </div>
        </div>
    </div>
  )
}

export default Item