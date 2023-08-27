import React from "react";

function Card({ image, category, title, price }) {
  return (
    <div className="w-96 border border-gray-800 rounded-lg h-[250] mx-auto p-4 bg-gray-700 text-white border-rounded mt-10">
      <div className="flex justify-center items-center pl-4 w-72 mt-4 h-80">
        <img className=" h-full w-full ml-10" src={image} alt="image" />
      </div>
      <div className="mt-10">
        <h2>
          <span className="font-serif font-bold text-red-300">
            Product Name :
          </span>{" "}
          {title}
        </h2>
        <h3>
          <span className="font-serif font-bold text-red-300">
            Product Category:
          </span>{" "}
          {category}
        </h3>
        <h2 className="text-white">Price : {price}</h2>
        <h2 className=" text-center p-2 justify-end  border-2">Buy Product</h2>
      </div>
    </div>
  );
}

export default Card;
