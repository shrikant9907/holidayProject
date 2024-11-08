import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
// import React {useEffect} from 'react'

const ProductPage = () => {
  const [products, setProducts] = useState(null);
  // console.log(products);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response?.data);
      // console.log(response.data);
    };
    fetchProducts();
  }, []);
  return (
    <ProductCard products={products}/>
  );
};

export default ProductPage;
