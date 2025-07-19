import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ id, name, price, image }) => {

  const navigate = useNavigate();

  return (
    <div className="product-card" onClick={() => navigate(`/product/${id}`)}>
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h4 className="product-name">{name}</h4>
        <p className="product-price">₹{price}</p>
      </div>
    </div>
  )
}

export default ProductCard