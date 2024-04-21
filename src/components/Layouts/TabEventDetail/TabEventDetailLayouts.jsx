import React, { useState, useEffect } from "react";
import "./tabs.css";
import EventLayoutLatest from "../../Fragments/Events/EventLatest";
import EventLayoutUpcoming from "../../Fragments/Events/EventUpcoming";
import TabsEventImg from "../../elements/Tabs/TabsEvent";
import Introduction from "./Content/Introduction";
import WhatWeOffer from "./Content/WhatWeOffer";
import WhyItMatter from "./Content/WhyItMatter";

export default function TabEventDetail(props) {
  const { children } = props;
  return <div>{children}</div>;
}
function Header(props) {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }
  return (
    <div className="flex flex-col gap-6">
      <section className="flex gap-4 mt-8 rounded-md transition ease-linear duration-200">
        <TabsEventImg>
          <TabsEventImg.Container
            onClick={() => updateToggle(1)}
            toggle={toggle === 1 ? "active-tab " : "overflow-hidden"}
            toggleImg={toggle === 1 ? "translate-y-0" : "translate-y-20"}
            imgOffset="-right-2"
            src="/images/Introduction.png"
          >
            <h1 className="text-[20px] self-center">Introduction</h1>
          </TabsEventImg.Container>
        </TabsEventImg>
        <TabsEventImg>
          <TabsEventImg.Container onClick={() => updateToggle(2)} toggle={toggle === 2 ? "active-tab " : "overflow-hidden"} toggleImg={toggle === 2 ? "translate-y-0" : "translate-y-20"} imgOffset="-right-2" src="/images/Wowkaget.png">
            <h1 className="text-[20px] self-center">What We Offers</h1>
          </TabsEventImg.Container>
        </TabsEventImg>
        <TabsEventImg>
          <TabsEventImg.Container
            onClick={() => updateToggle(3)}
            toggle={toggle === 3 ? "active-tab " : "overflow-hidden"}
            toggleImg={toggle === 3 ? "translate-y-0" : "translate-y-20"}
            imgOffset="-right-2"
            src="/images/Wowkaget.png"
          >
            <h1 className="text-[20px] self-center">Why It Matters</h1>
          </TabsEventImg.Container>
        </TabsEventImg>
        <TabsEventImg>
          <TabsEventImg.Container
            onClick={() => updateToggle(4)}
            toggle={toggle === 4 ? "active-tab " : "overflow-hidden"}
            toggleImg={toggle === 4 ? "translate-y-0" : "translate-y-20"}
            imgOffset="-right-2"
            src="/images/Wowkaget.png"
          >
            <h1 className="text-[20px] self-center">Join Us</h1>
          </TabsEventImg.Container>
        </TabsEventImg>
      </section>
      <section>
        <div className={toggle === 1 ? "content-active" : "content"}>
          <Introduction />
        </div>
        <div className={toggle === 2 ? "content-active" : "content"}>
          <WhatWeOffer />
        </div>
        <div className={toggle === 3 ? "content-active" : "content"}>
          <WhyItMatter />
        </div>
        <div className={toggle === 4 ? "content-active" : "content"}>
          <WhyItMatter />
        </div>
      </section>
    </div>
  );
}

TabEventDetail.Header = Header;
