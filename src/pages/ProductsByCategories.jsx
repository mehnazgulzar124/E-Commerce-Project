import React, { useState } from "react";
import Card from "../components/card";
import CustomDropdown from "../components/Dropdown";

function ProductsByCategories({ data }) {
  const [filteredData, setFilteredData] = useState(data);

  const dropdownHandler = (value) => {
    let sortedProducts;
    switch (value) {
      case "priceDesc": {
        sortedProducts = filteredData.sort((a, b) => b.price - a.price);
        setFilteredData(sortedProducts);
        break;
      }
      case "priceAsc": {
        sortedProducts = filteredData.sort((a, b) => a.price - b.price);
        setFilteredData(sortedProducts);
        break;
      }
      case "titleAsc": {
        setFilteredData(filteredData.sort((a, b) => a.title - b.title));
        break;
      }
      case "titleDesc": {
        setFilteredData(filteredData.sort((a, b) => b.title - a.title));
        break;
      }
      default: {
        setFilteredData(data);
      }
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-6 w-[70%]">
        <CustomDropdown
          dropdownHandler={dropdownHandler}
          variant="secondary"
          id="dropdown-basic"
        />
        {filteredData.map((item) => (
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

export default ProductsByCategories;
