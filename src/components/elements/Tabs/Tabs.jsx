import React, { useState } from "react";

export default function TabsMenu({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="flex">
      {tabs.map((tab, index) => (
        <div>
          <button key={index} className={`px-4 py-2 mr-2 focus:outline-none ${activeTab === index ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`} onClick={() => handleTabClick(index)}>
            {tab.title}
          </button>
          <div>{tab.content}</div>
        </div>
      ))}
    </div>
  );
}
