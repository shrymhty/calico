import {React, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import { category_list, product_list } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import './Item.css'

const Item = () => {

    const {id} = useParams();
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

    const product = product_list.find((item) => item.id.toString() === id)

    useEffect(() => {
      console.log("Cart: ", cartItems);
    }, [cartItems]);

    if (!product) {
        console.log("Product not available");
    }

    const categoryName = () => {
      const cat = category_list.find((cat_item) => cat_item.id === product.category);
      return cat.name;
    }

    const quantity = cartItems[product.id] || 0;
    
  return (
    <div className="item-page">
        <img src={product.image} alt={product.name} className="item-image" />
        <div className="item-info">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Category: {categoryName()}</p>
            <p>Price: ₹{product.price}</p>
            <div className="action-button">
              <button className="remove-btn" onClick={() => removeFromCart(product.id)}>-</button>
              <div className="quantity">{quantity}</div>
              <button className="add-btn" onClick={() => addToCart(product.id)}>+</button>
            </div>
        </div>
    </div>
  )
}

export default Item