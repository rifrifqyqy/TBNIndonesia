import React, { useState } from "react";
import ButtonPrimary from "../Button/ButtonPrimary";
import "./tabs.css";

export default function TabsEventImg(props) {
  const { children } = props;
  return <div className="flex">{children}</div>;
}

function Container(props) {
  const { imgOffset, children, toggle, onClick, toggleImg, src } = props;

  return (
    <div className={`${toggle} w-[280px] h-[60px] lg:h-[90px] flex rounded-xl bg-gray-200 cursor-pointer font-semibold lg:pl-4 text-gray1 relative transition ease-linear duration-200 justify-center lg:justify-start`} onClick={onClick}>
      {children}
      <TabsEventImg.Image imgOffset={imgOffset} toggle={toggleImg} src={src}></TabsEventImg.Image>
    </div>
  );
}

function Image(props) {
  const { imgOffset, toggle, src } = props;

  return (
    <div className={`flex w-full h-full bg-slaate-300 transform transition-transform absolute ${toggle} `}>
      <img src={src} alt="" className={`bottom-0 ${imgOffset} absolute `} />
    </div>
  );
}

TabsEventImg.Image = Image;
TabsEventImg.Container = Container;
