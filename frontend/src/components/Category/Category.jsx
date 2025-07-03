import React, { useRef } from 'react'
import './Category.css'
import { category_list } from '../../assets/assets'

const Category = () => {

    const scrollRef = useRef();
 
  return (
    <div className="explore-categories" id='explore-categories'>
        <h1>Shop by Category</h1>
        <div className="carousel-wrapper">
            <div className="carousel-container" ref={scrollRef}>
                <div className="explore-list">
                    {category_list.map((category, index) => {
                        return (
                            <div>
                                <img src={category.image} alt="" className={category.name} />
                                <p>{category.name}</p>
                            </div>   
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category