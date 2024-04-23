import React, { useState, useEffect } from "react";
import "./tabs.css";
import TabsEventImg from "../../elements/Tabs/TabsEvent";
import Introduction from "./Content/Introduction";
import WhatWeOffer from "./Content/WhatWeOffer";
import WhyItMatter from "./Content/WhyItMatter";
import JoinUs from "./Content/JoinUs";

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
    <div className="flex flex-col gap-6 ">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 mt-8 rounded-md transition ease-linear duration-200">
        <TabsEventImg>
          <TabsEventImg.Container
            onClick={() => updateToggle(1)}
            toggle={toggle === 1 ? "active-tab overflow-hidden lg:overflow-visible " : "overflow-hidden"}
            toggleImg={toggle === 1 ? "translate-y-40 lg:translate-y-0" : "translate-y-10 lg:translate-y-20 "}
            imgOffset="-right-2 opacity-20 lg:opacity-100"
            src="/images/Introduction.png"
          >
            <h1 className="lg:text-[20px] self-center z-10 ">Introduction</h1>
          </TabsEventImg.Container>
        </TabsEventImg>
        <TabsEventImg>
          <TabsEventImg.Container
            onClick={() => updateToggle(2)}
            toggle={toggle === 2 ? "active-tab  overflow-hidden lg:overflow-visible " : "overflow-hidden"}
            toggleImg={toggle === 2 ? "translate-y-40 lg:translate-y-0" : "translate-y-10 lg:translate-y-20 "}
            imgOffset="-right-2 opacity-20 lg:opacity-100"
            src="/images/Wowkaget.png"
          >
            <h1 className="lg:text-[20px] self-center z-10 ">What We Offers</h1>
          </TabsEventImg.Container>
        </TabsEventImg>
        <TabsEventImg>
          <TabsEventImg.Container
            onClick={() => updateToggle(3)}
            toggle={toggle === 3 ? "active-tab  overflow-hidden lg:overflow-visible " : "overflow-hidden"}
            toggleImg={toggle === 3 ? "translate-y-40 lg:translate-y-0" : "translate-y-10 lg:translate-y-20 "}
            imgOffset="-right-2 opacity-20 lg:opacity-100"
            src="/images/Businessman.png"
          >
            <h1 className="lg:text-[20px] self-center z-10">Why It Matters</h1>
          </TabsEventImg.Container>
        </TabsEventImg>
        <TabsEventImg>
          <TabsEventImg.Container
            onClick={() => updateToggle(4)}
            toggle={toggle === 4 ? "active-tab  overflow-hidden lg:overflow-visible " : "overflow-hidden"}
            toggleImg={toggle === 4 ? "translate-y-40 lg:translate-y-0" : "translate-y-10 lg:translate-y-20 "}
            imgOffset="-right-2 opacity-20 lg:opacity-100"
            src="/images/Businessman2.png"
          >
            <h1 className="lg:text-[20px] self-center z-10">Join Us</h1>
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
          <JoinUs />
        </div>
      </section>
    </div>
  );
}

TabEventDetail.Header = Header;
