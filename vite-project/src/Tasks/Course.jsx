import React, { useState } from "react";
import Cards from "../data/card";
import "../Tasks/Course.css";

const Course = () => {
  const [products, setProducts] = useState(Cards);
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    image: "",
    price: "",
    brand: "",
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newProduct.image && newProduct.price && newProduct.brand) {
      setProducts([...products, newProduct]);
      setNewProduct({ image: "", price: "", brand: "" }); // reset form
      setShowForm(false);
    }
  };

  // handle delete
  const handleDelete = (index) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
  };

  return (
    <div className="parent">
      {/* existing cards */}
      {products.map((item, index) => (
        <div className="child" key={index}>
          <div className="card">
            {/* delete cross */}
            <button
              className="delete-btn"
              onClick={() => handleDelete(index)}
            >
              ×
            </button>
            <div className="logo">
              <img src={item.image} alt={item.brand} />
            </div>
            <div className="info">
              <div className="price">Price: ₹{item.price}</div>
              <div className="brand">Brand: {item.brand}</div>
            </div>
          </div>
        </div>
      ))}

      {/* plus symbol card */}
      <div className="child">
        <div
          className="card add-card"
          onClick={() => setShowForm(!showForm)}
        >
          <span className="plus">+</span>
        </div>
      </div>

      {/* form modal */}
      {showForm && (
        <div className="form-container">
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={newProduct.price}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="brand"
              placeholder="Brand"
              value={newProduct.brand}
              onChange={handleChange}
              required
            />
            <button type="submit">Add Card</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Course;
