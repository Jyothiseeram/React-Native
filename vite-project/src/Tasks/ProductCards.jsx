import React from "react";
import "./ProductData.css";

function ProductCards({ products }) {
  if (products.length === 0) {
    return <h3 className="empty-text">No products added yet</h3>;
  }

  return (
    <div className="card-container">
      {products.map((p, index) => (
        <div key={index} className="card">
          {p.image && (
            <div className="card-image">
              <img src={URL.createObjectURL(p.image)} alt={p.name} />
            </div>
          )}
          <h2>{p.name}</h2>
          <p><strong>Brand:</strong> {p.brand}</p>
          <p><strong>Price:</strong> ₹{p.price}</p>
          <p className="desc"><strong>Description:</strong> {p.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductCards;
