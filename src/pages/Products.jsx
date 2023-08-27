import React, { useEffect, useState } from "react";
import Card from "../components/card";
function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const AllProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const productData = await res.json();
    console.log({ productData });
    setData(productData);
    setLoading(false);
  };

  useEffect(() => {
    AllProducts();
  }, []);

  const searchHandler = (e) => {
    if (e.target.value === "") {
      AllProducts();
      return;
    }
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setData(filteredData);
  };

  if (loading) {
    return (
      <>
        <p>Loading.....</p>
      </>
    );
  }

  return (
    <>
      <input
        onChange={searchHandler}
        className="border-2 border-gray-500 mr-96 mt-4"
        type="text"
        placeholder="Search Item"
      />

      <div className="flex flex-wrap gap-6 w-[100%]">
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            image={item.image}
            category={item.category}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
}

export default Products;
