import React, { useContext } from 'react'
import './Shop.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { category_list } from '../../assets/assets';
import ProductCard from '../../components/ProductCard/ProductCard'
import { StoreContext } from '../../context/StoreContext';

const Shop = () => {

    const {product_list, url} = useContext(StoreContext);

    const {category} = useParams();
    const [price, setPrice] = useState(10000);
    const [selectedCat, setSelectedCat] = useState([]);

    const handleCategoryChange = (e) => {
        const {value, checked} = e.target;
        console.log(`Checkbox for ${value} is now ${checked ? 'checked' : 'unchecked'}`);

        if (checked) {
            setSelectedCat(prev => [...prev, value]);
        } else {
            setSelectedCat(prev => prev.filter(cat => cat !== value));
        }

    }

    useEffect(() => {
        console.log("Selected categories updated:", selectedCat);
    }, [selectedCat]);

    useEffect(() => {
        if (category && category_list.some(cat => cat.id === category)) {
            setSelectedCat([category]);
        } else {
            setSelectedCat([]); // if not a valid category, show all
        }
    }, [category]);

    const handleReset = () => {
        setPrice(5000);
        setSelectedCat([]);
    }

    const filteredProducts = product_list.filter(prod => {
        const inSelectedCategory = selectedCat.length === 0 || selectedCat.includes(prod.category);
        const inPriceRange = prod.price <= price;

        return inSelectedCategory && inPriceRange
    });

    console.log("Filtered Products:", filteredProducts);
    console.log("Selected Categories:", selectedCat);
    console.log("Price Filter:", price);
    console.log("Product List:", product_list);

  return (
    <div className="shop-container">
        <div className="filter-div">
            <h3>Filter Search</h3>
            <div className="filter-section price">
                <h4>Price Range</h4>
                <input 
                    type="range"
                    min="0"
                    max="10000"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className='price-range' 
                />
                <p>Up to ₹{price}</p>
            </div>
            <div className="filter-section category-checkbox">
                <h4>Categories</h4>
                {category_list.map((cat) => (
                    <label key={cat.id}>
                        <input 
                            type="checkbox" 
                            name={cat.id} 
                            id={cat.id} 
                            value={cat.id}
                            checked={selectedCat.includes(cat.id)}
                            onChange={handleCategoryChange}
                        />
                        {cat.name}
                    </label>
                ))}
            </div>
            <button className="reset-button" onClick={() => handleReset()}>
                Clear Filters
            </button>
        </div>
        <div className="products-div">
            {filteredProducts.map((prod) => (
                <ProductCard
                    key={prod._id}
                    id={prod._id}
                    name={prod.name}
                    description={prod.description}
                    category={prod.category}
                    price={prod.price}
                    image={url+"/images/"+prod.image}
                />
            ))}
        </div>
    </div>
  )
}

export default Shop