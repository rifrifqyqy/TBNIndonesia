import React, { useState, useEffect } from "react";
import "./tabs.css";
import ButtonPrimary from "../../elements/Button/ButtonPrimary";
import EventLayoutLatest from "../../Fragments/Events/EventLatest";
import EventLayoutUpcoming from "../../Fragments/Events/EventUpcoming";

export default function TabEventCategory(props) {
  const { children } = props;
  return <div>{children}</div>;
}
function Header() {
  const [toggle, setToggle] = useState(1);
  const [text, setText] = useState(toggle === 1 ? "Latest Event" : "Upcoming Events");

  function updateToggle(id) {
    setToggle(id);
    setText(id === 1 ? "Latest Event" : "Upcoming Events");
  }
  return (
    <div className="flex flex-col gap-6 ">
      <div className="flex justify-between max-h-fit sticky top-[90px] z-10 bg-[#f8f9fa] py-4">
        <h1 className="text-[32px] font-medium">{text}</h1>
        <section className="flex bg-gray5 max-w-fit rounded-md hover:bg-gray-300 transition ease-linear duration-200">
          <ButtonPrimary className={`${toggle === 1 ? "active-tab" : ""} rounded-md bg-transparent font-semibold text-gray1 transition ease-linear duration-200 pt-3`} onClick={() => updateToggle(1)}>
            Latest Event
          </ButtonPrimary>
          <ButtonPrimary className={` ${toggle === 2 ? "active-tab" : ""} rounded-md bg-transparent font-semibold text-gray1 pt-3`} onClick={() => updateToggle(2)}>
            Upcoming Events
          </ButtonPrimary>
        </section>
      </div>

      <section>
        <div className={toggle === 1 ? "content-active" : "content"}>
          <EventLayoutLatest />
        </div>
        <div className={toggle === 2 ? "content-active" : "content"}>
          <EventLayoutUpcoming />
        </div>
      </section>
    </div>
  );
}

TabEventCategory.Header = Header;
