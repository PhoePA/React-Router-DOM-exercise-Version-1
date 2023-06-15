import React from "react";
import { useNavigate, useParams } from "react-router-dom";
const ProductDetail = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/products");
  };
  const { title } = useParams();
  return (
    <div>
      <h1>I am Product Detail Page with the Title - {title}</h1>
      <button onClick={navigateHandler}>Go Back Products</button>
    </div>
  );
};

export default ProductDetail;
