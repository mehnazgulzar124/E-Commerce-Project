import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex bg-gray-700 justify-between  text-center pl-8 h-14 w-screen">
      <div className="w-screen mt-2 flex">
        <h1 className="font-serif text-3xl text-white  pt-0">
          <Link to={"/products"} className="text-white">
            Ecommerce
          </Link>
        </h1>
      </div>
      <ul className="flex  mt-4 font-bold gap-10 mr-60 text-center">
        <li className="hover:bg-blue-400 cursor-pointer mb-2 h-8 w-14">
          <Link to={"/"} className="text-white">
            Home
          </Link>
        </li>

        <li className="hover:bg-blue-400 cursor-pointer mb-2 h-8 w-20 ">
          <Link to={"/products"} className="text-white">
            Products
          </Link>
        </li>
        <li className="hover:bg-blue-400 cursor-pointer mt-0 h-8 w-20">
          <Link to={"/categories"} className="text-white">
            Categories
          </Link>
        </li>
        <li className="hover:bg-blue-400 cursor-pointer mt-0 h-8 w-20">
          <Link to={"/login"} className="text-white">
            Login
          </Link>
        </li>
        <li className="hover:bg-blue-400 cursor-pointer mt-0 h-8 w-20">
          <Link to={"/signup"} className="text-white">
            Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
