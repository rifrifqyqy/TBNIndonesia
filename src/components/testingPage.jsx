import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <button onClick={() => toggleAccordion(index)}>{item.title}</button>
          {activeIndex === index && <div>{item.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
