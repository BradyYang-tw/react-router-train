import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const param = useParams();
  return <h2>Product Detail {param.id}</h2>;
};

export default ProductDetail;
