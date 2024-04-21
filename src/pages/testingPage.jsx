import { useState, useEffect, createContext } from "react";
import Accordion from "../components/elements/Accordion/Accordion";

export default function TestingPage() {
  const accordionData = [
    {
      title: "Check Event Location",
      content: `lorem20`,
    },
    {
      title: "Speakers",
      content: `lorem20`,
    },
  ];
  return (
    <div className="min-h-screen w-full bg-red-200 flex flex-col items-center justify-center">
      <div className="w-[400px]">
        {" "}
        <Accordion section={accordionData}></Accordion>
      </div>
    </div>
  );
}
