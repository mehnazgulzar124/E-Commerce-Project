import React from "react";

function NavBar() {
  return (
    <nav className="flex bg-blue-600 justify-between text-center h-14 w-full">
      <div className="w-screen mt-2 flex">
        <h1 className="font-serif text-3xl text-white pl-8 pt-0">Ecommerce</h1>
      </div>
      <div className=" flex text-white mt-4 font-bold gap-10 ">
        <ul className="flex gap-14 mr-60 text-center font-semibold">
          <li className="hover:bg-blue-400 cursor-pointer mb-2 h-8 w-14">Home</li>
          <li className="hover:bg-blue-400 cursor-pointer mb-2 h-8 w-20 ">Products</li>
          <li className="hover:bg-blue-400 cursor-pointer mt-0 h-8 w-20">Catagree</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
