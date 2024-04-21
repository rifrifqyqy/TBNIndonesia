import React, { useState, useEffect, useRef } from "react";
import "../index.css";

export default function NavigationBar() {
  const [isActive, setIsActive] = useState(false);

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
    <div className={`flex justify-between px-20 py-5 items-center sticky top-0 font-inter z-50 ${isActive ? "bg-white shadow-shadow1" : ""} transition ease-in duration-300`}>
      <div>
        <h1 className="">
          <img src="/images/logo.png" alt="" className="h-[50px]" />
        </h1>
      </div>
      <div>
        <ul className="flex gap-10 text-[20px] font-medium">
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
            <a href="" onClick={() => console.log(linkRef)}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
