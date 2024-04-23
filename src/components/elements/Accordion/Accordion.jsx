import { useState } from "react";
import "animate.css";
import "./Accordion.css";
const AccordionSection = ({ section, isActiveSection, setActiveIndex, sectionIndex }) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };
  return (
    <div>
      <div className="flex flex-col ">
        <div className="flex w-full justify-between items-center cursor-pointer px-4 rounded-lg transition ease-linear duration-200 hover:bg-[#eeeeee]" onClick={toggleSection}>
          <div className="w-full flex items-center lg:text-[20px] font-medium py-4 capitalize">{section.title}</div>
          <div>
            <img src="/images/Down_Arrow.svg" alt="" className={` transition-transform ${isActiveSection ? " rotate-180" : ""}`} />
          </div>
        </div>
        {isActiveSection && (
          <div className="flex flex-wrap animate__animated animate__fadeInDown duration  ">
            <h1 className="break-all px-4 text-wrap text-[14px] lg:text-[16px]">{section.content}</h1>
          </div>
        )}
      </div>
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
