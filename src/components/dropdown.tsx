import React, { useState } from "react";
import "../styles/dropdown.css";

const Dropdown = ({ options }: { options: string[] }) => {
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelection = (value: any) => {
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {selected || options?.[0] || "Select a value"}{" "}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option, index) => (
            <div
              key={index}
              className={`dropdown-item ${option === selected ? "active" : ""}`}
              onClick={() => handleSelection(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
