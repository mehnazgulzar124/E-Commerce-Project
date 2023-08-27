import React, { useEffect, useState } from "react";
import SideBar from "../components/sideBar";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductsByCategories from "./ProductsByCategories";

function Categories() {
  const params = useParams();
  const [products, setProducts] = useState([]);

  const getAllCategories = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${
        params.category ?? "jewelery"
      }`
    );
    setProducts(response.data);
  };
  useEffect(() => {
    getAllCategories();
  }, [params.category]);

  if (!products.length) {
    return <>Loading...</>;
  }

  return (
    <>
      <SideBar />
      <ProductsByCategories data={products} />
    </>
  );
}

export default Categories;
