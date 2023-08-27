import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import axios from "axios";

function SideBar() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const getAllCategories = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=18"
    );
    const uniqueCategories = [
      ...new Set(response.data.map((product) => product.category)),
    ];
    setCategories(uniqueCategories);
    setProducts(response.data);
  };
  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <>
      <div className="bg-gray-600 w-[25vw] inline-block float-left h-screen">
        <div className="text-white">
          <h1>Fashion List</h1>
        </div>

        <ul className="text-2xl ">
          {categories.map((category, index) => (
            <li key={index} className="text-white">
              <NavLink to={`/categories/${category}`}>{category}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <Outlet context={[products, setProducts]} />
    </>
  );
}

export default SideBar;
