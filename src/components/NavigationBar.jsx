import React, { useState, useEffect, useRef } from "react";
import "../index.css";

export default function NavigationBar() {
  const [isActive, setIsActive] = useState(false);
  const [navActive, setNavActive] = useState(false);
  const toggleNavActive = () => {
    setNavActive(!navActive);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed md:flex flex-col md:flex-row lg:justify-between px-8 lg:px-20 py-5 lg:items-center top-0 font-inter z-50 ${isActive ? "bg-white shadow-shadow1" : ""} ${navActive ? "bg-white" : ""} transition ease-in duration-300 relative `}>
      <div className="flex items-center justify-between w-full">
        <h1 className="">
          <img src="/images/logo.png" alt="" className="h-[32px] lg:h-[50px]" />
        </h1>
        <div className="block md:hidden " onClick={toggleNavActive}>
          <img src="/images/Hamburger.svg" alt="" className="h-[42px]" />
        </div>
      </div>
      <div className={` ${navActive ? "block" : "hidden"} md:flex lg:items-center ml-0`}>
        <ul className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 lg:gap-10 text-[20px] md:justify-center font-medium md:flex">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#event">Events</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      
    </div>
  );
}
