import React from 'react'
import './ProductCard.css'

const ProductCard = ({ id, name, description, category, price, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h4 className="product-name">{name}</h4>
        <p className="product-price">₹{price}</p>
      </div>
    </div>
  )
}

export default ProductCard