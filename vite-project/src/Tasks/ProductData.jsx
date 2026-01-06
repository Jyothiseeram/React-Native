import React, { useState } from "react";
import "./ProductData.css";

function ProductData({ onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    description: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave(formData);
    handleClear();
  }

  function handleClear() {
    setFormData({
      name: "",
      brand: "",
      price: "",
      description: "",
      image: null,
    });
    setPreview(null);
  }

  return (
    <div className="form-container">
      <form className="product-form" onSubmit={handleSubmit}>
        <h2>Add Product Details</h2>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Brand</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Price (₹)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        {preview && (
          <div className="image-preview">
            <img src={preview} alt="Preview" />
          </div>
        )}

        <div className="button-row">
          <button type="submit" className="btn submit-btn">
            Save Product
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="btn clear-btn"
          >
            Clear Fields
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductData;
