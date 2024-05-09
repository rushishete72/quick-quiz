import React from "react";

const AccordionItem = ({
  dataItem,
  isSelected,
  handleSingleSelection,
  handleMultiSelection,
  isMultiSelectEnabled,
}) => {
  const handleClick = () => {
    if (isMultiSelectEnabled) {
      handleMultiSelection(dataItem.id);
    } else {
      handleSingleSelection(dataItem.id);
    }
  };

  return (
    <div className="item" key={dataItem.id}>
      <div
        onClick={handleClick}
        className="title"
        style={{
          background: isSelected ? "hsl(55, 85%, 46%)" : "inherit",
        }}
      >
        <h3>{dataItem.question}</h3>
      </div>
    </div>
  );
};

export default AccordionItem;
