import './Add.css'
import { useState, React } from 'react'
import { assets } from '../../assets/assets'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const Add = ({url}) => {

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Clothing"
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData(data => ({
      ...data,
      [name]: value
    }));
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image)
    const response = await axios.post(`${url}/api/products/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Clothing",
      })
      setImage(false);
      toast.success(response.data.message)
    } else {
      toast.error(response.error.message);
    }
  }

  return (
      <div className="add">
        <form className="flex-col" onSubmit={onSubmitHandler}>
          <div className="add-image-upload flex-col">
              <p>Upload Image</p>
              <label htmlFor="image"><img src={image?URL.createObjectURL(image):assets.upload_area} alt="" /></label>
              <input onChange={(e) => setImage(e.target.files[0])}  type="file" id='image' hidden required/>
          </div>
          <div className="add-product-name flex-col">
            <p>Product Name</p>
            <input onChange={onChangeHandler} value={data.name} type="text" name='name' id='name' placeholder='Type here' required />
          </div>
          <div className="add-product-description flex-col">
            <p>Product Description</p>
            <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here' required></textarea>
          </div>
          <div className="add-category-price">
            <div className="add-category flex-col">
              <p>Product Category</p>
              <select onChange={onChangeHandler} value={data.category} name="category">
                <option value="clothing">Clothing</option>
                <option value="home_decor">Home Decor</option>
                <option value="gifting">Gifting</option>
                <option value="accessories">Accessories</option>
              </select>
            </div>
            <div className="add-price flex-col">
              <p>Product Price</p>
              <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='₹700' />
            </div>
          </div>
          <button type='submit' className='add-btn'>Add Product</button>
        </form>
      </div>
  )
}

export default Add