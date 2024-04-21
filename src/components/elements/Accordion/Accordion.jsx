import { useState } from "react";
import "animate.css";
import "./Accordion.css";
const AccordionSection = ({ section, isActiveSection, setActiveIndex, sectionIndex }) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };
  return (
    <div className={`py-3`}>
      <div className="flex justify-between items-center cursor-pointer px-4 rounded-lg transition ease-linear duration-200 hover:bg-[#eeeeee]" onClick={toggleSection}>
        <div className="w-full flex items-center gap-3 text-[20px] font-medium py-4">{section.title}</div>
        <div>
          <img src="/images/Down_Arrow.svg" alt="" className={` transition-transform ${isActiveSection ? " rotate-180" : ""}`} />
        </div>
      </div>
      {isActiveSection && (
        <div className="w-full px-4 animate__animated animate__fadeInDown duration "  >
          <div className="">{section.content}</div>
        </div>
      )}
    </div>
  );
};
export default function Accordion({ section }) {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div>
      {section.map((section, index) => (
        <AccordionSection section={section} key={index} isActiveSection={index === activeIndex} setActiveIndex={setActiveIndex} sectionIndex={index} />
      ))}
    </div>
  );
}
