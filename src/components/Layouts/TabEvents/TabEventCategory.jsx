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
    <div className="flex flex-col lg:gap-6 ">
      <div className="flex gap-5 lg:gap-0 flex-col lg:flex-row justify-between max-h-fit sticky top-[72px] lg:top-[75px] z-10 bg-[#f8f9fa] py-2 lg:py-4">
        <h1 className="order-2 lg:order-1 lg:text-[32px] font-medium">{text}</h1>
        <section className="order-1 lg:order-2 flex bg-gray-100 max-w-fit rounded-sm lg:rounded-md hover:bg-gray-200 transition ease-linear duration-200">
          <ButtonPrimary
            className={`${toggle === 1 ? "active-tab" : ""} text-[14px] lg:text-[16px] rounded-sm lg:rounded-md py-1 px-3 h-full bg-transparent content-center font-semibold text-gray1 transition ease-linear duration-200 `}
            onClick={() => updateToggle(1)}
          >
            Latest Event
          </ButtonPrimary>
          <ButtonPrimary
            className={` ${toggle === 2 ? "active-tab" : ""} rounded-sm lg:rounded-md text-[14px] lg:text-[16px] h-full py-1 px-3 content-center self-center bg-transparent font-semibold text-gray1`}
            onClick={() => updateToggle(2)}
          >
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
