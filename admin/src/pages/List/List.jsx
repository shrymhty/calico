import React, { useEffect, useState } from 'react'
import './List.css'
import axios from "axios"
import {toast} from "react-toastify"

const List = ({url}) => {

  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/products/list`);
    console.log(response.data);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("An error occured! Try again.");
    }
  }

  const removeProduct = async (prodId) => {
    const response = await axios.post(`${url}/api/products/remove`, {id: prodId});
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("An error occured! Try again.");
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className="list add flex-col">
      <p className='list-title'>All Crochet Products Available</p>
      <div className="list-table">
        <div className="list-table-format title">
          <p>Products</p>
          <p>Description</p>
          <p>Category</p>
          <p>Price</p>
          <p>Remove</p>
        </div>
        {list.map((item, index) => {
          return (
            <div className="list-table-format" key={index}>
              <div className="list-table product-name-img">
                    <img src={`${url}/images/${item.image}`} alt="" />
                    <h4>{item.name}</h4>
                </div>
                <p>{item.description}</p>
                <p>{item.category}</p>
                <p>₹{item.price}</p>
                <button className="delete-btn" onClick={() => removeProduct(item._id)}>X</button>       
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List