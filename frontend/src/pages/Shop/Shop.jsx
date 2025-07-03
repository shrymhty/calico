import React, { useState } from 'react'
import './Shop.css'
import { category_list, product_list } from '../../assets/assets'
import ProductCard from '../../components/ProductCard/ProductCard'

const Shop = () => {

    const [price, setPrice] = useState(0);
    const [selectedCat, setSelectedCat] = useState([]);

    const handleCatagoryChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        if (selectedCat.includes(value)) {
            setSelectedCat(selectedCat.filter((cat) => cat !== value));
        } else {
            setSelectedCat([...selectedCat, value]);
        }
    }

    const resetFilters = () => {
        setPrice(0);
        setSelectedCat([]);
    };

  return (
    <div className="shop-container">
        <div className="filters">
            <h3>Filter Search</h3>
            <div className="filter-section price">
                <h4>Price</h4>
                <input 
                    type="range" 
                    min="0" 
                    max="5000" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)}
                    className='price-range'/>
                <p>Up to ₹{price}</p>
            </div>
            <div className="filter-section">
            <h4>Category</h4>
            {category_list.map((cat, i) => (
                <label key={i}>
                <input
                    type="checkbox"
                    value={cat.name}
                    checked={selectedCat.includes(cat.name)}
                    onChange={handleCatagoryChange}
                />
                {cat.name}
                </label>
            ))}
            </div>
            <button onClick={resetFilters}>Reset</button>
        </div>
        <div className="products">
            {product_list.map((prod, index) => (
                <ProductCard
                    key={index}
                    id={prod.id}
                    name={prod.name}
                    description={prod.description}
                    category={prod.category}
                    price={prod.price}
                    image={prod.image}
                />
            ))}
        </div>
    </div>
  )
}

export default Shop