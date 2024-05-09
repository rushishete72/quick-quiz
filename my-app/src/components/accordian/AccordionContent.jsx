import React from "react";

const AccordionContent = ({ dataItem, isContentVisible }) => {
  return (
    <div
      className="accordion-content"
      style={{ display: isContentVisible ? "block" : "none" }}
    >
      <p>{dataItem.answer}</p>
    </div>
  );
};

export default AccordionContent;
