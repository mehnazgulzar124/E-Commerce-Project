import Dropdown from "react-bootstrap/Dropdown";
import "./CustomDropdown.css";
import { useState } from "react";

function CustomDropdown({ dropdownHandler }) {
  const [selectedValue, setSelectedValue] = useState("Filters");

  const handleDropdownSelect = (eventKey) => {
    // eventKey is the value associated with the selected dropdown item
    setSelectedValue(eventKey);
    dropdownHandler(eventKey);
  };

  return (
    <Dropdown
      data-bs-theme="dark"
      variant="success"
      onSelect={handleDropdownSelect}
    >
      <Dropdown.Toggle id="dropdown-basic">{selectedValue}</Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="priceAsc">price asc</Dropdown.Item>
        <Dropdown.Item eventKey="priceDesc">price desc</Dropdown.Item>
        <Dropdown.Item eventKey="titleAsc">title asc</Dropdown.Item>
        <Dropdown.Item eventKey="titleDesc">title desc</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CustomDropdown;
