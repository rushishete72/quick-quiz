import React, { useState, useEffect } from "react";
import AccordionItem from "./AccordionItem";
import AccordionContent from "./AccordionContent";
import data from "./data";
import "./index.css"; // Import the CSS file

const Accordion = () => {
  const [temp, settemp] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isMultiSelectEnabled, setIsMultiSelectEnabled] = useState(false);

  const handleSingleSelection = (itemId) => {
    if (temp !== itemId) {
      setSelectedItems([itemId]);
      settemp(itemId);
    } else {
      setSelectedItems([]);
      settemp(temp + itemId);
    }
  };

  const handleMultiSelection = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const toggleMultiSelect = () => {
    setIsMultiSelectEnabled(!isMultiSelectEnabled);
  };

  useEffect(() => {
    // Apply styles dynamically based on component state
    const itemElements = document.querySelectorAll(".item");
    itemElements.forEach((item) => {
      if (isMultiSelectEnabled) {
        item.classList.add("multiselect-enabled");
      } else {
        item.classList.remove("multiselect-enabled");
      }
    });
  }, [isMultiSelectEnabled]);

  return (
    <div className="wrapper">
      <div className="accordion">
        <button onClick={toggleMultiSelect}>
          {isMultiSelectEnabled
            ? "Disable Multi-select"
            : "Enable Multi-select"}
        </button>
        {data.map((dataItem) => (
          <div className="item" key={dataItem.id}>
            <AccordionItem
              dataItem={dataItem}
              isSelected={selectedItems.includes(dataItem.id)}
              handleSingleSelection={handleSingleSelection}
              handleMultiSelection={handleMultiSelection}
              isMultiSelectEnabled={isMultiSelectEnabled}
            />
            <AccordionContent
              dataItem={dataItem}
              isContentVisible={selectedItems.includes(dataItem.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
