import React, { useState, useEffect } from "react";
import "../index.css";
import { delay, easeIn, motion } from "framer-motion";

export default function NavigationBar() {
  const [isActive, setIsActive] = useState(false);
  const [navActive, setNavActive] = useState(false);
  const wrapVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        duration: 1.5,
        when: "beforeChildren",
      },
    },
  };
  const menuUp = {
    initial: {
      y: 0,
      opacity: 1,
    },

    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1,
        ease: "easeOut",
      },
    },
  };
  const coverDiv = {
    initial: {
      width: "100%",
    },
    animate: {
      width: "0%",

      transition: {
        duration: 1,
        delay: 0.2,
        when: "afterChildren",
      },
    },
  };

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
    <motion.div
      variants={wrapVariants}
      initial="initial"
      animate="animate"
      className={`sticky right-0 left-0 md:flex flex-col md:flex-row lg:justify-between px-8 lg:px-20 py-5 lg:items-center top-0 font-inter z-50 ${isActive ? "bg-white shadow-shadow1" : ""} ${
        navActive ? "bg-white" : ""
      } transition ease-in duration-300 relative `}
    >
      <div className="flex items-center justify-between w-full">
        <h1 className="">
          <img src="/images/logo.png" alt="" className="h-[32px] lg:h-[50px]" />
        </h1>
        <div className="block md:hidden " onClick={toggleNavActive}>
          <motion.img variants={menuUp} src="/images/Hamburger.svg" alt="" className="h-[42px]" />
        </div>
      </div>
      <div className={` ${navActive ? "block" : "hidden"} md:flex lg:items-center ml-0`}>
        <ul className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 lg:gap-10 text-[16px] lg:text-[20px] md:justify-center font-medium md:flex">
          <div className="relative overflow-hidden">
            <motion.li variants={menuUp} className=" flex">
              <a href="#about">Home</a>
            </motion.li>
            <motion.div variants={coverDiv} className="bg-primary absolute top-0 left-0 h-full z-20"></motion.div>
          </div>
          <div className="relative overflow-hidden">
            <motion.li variants={menuUp} className=" flex">
              <a href="#about">Events</a>
            </motion.li>
            <motion.div variants={coverDiv} className="bg-primary absolute top-0 left-0 h-full z-20"></motion.div>
          </div>
          <div className="relative overflow-hidden">
            <motion.li variants={menuUp} className=" flex">
              <a href="#about">About</a>
            </motion.li>
            <motion.div variants={coverDiv} className="bg-primary absolute top-0 left-0 h-full z-20"></motion.div>
          </div>

          <div className="relative overflow-hidden">
            <motion.li variants={menuUp} className=" flex">
              <a href="#about">Contact</a>
            </motion.li>
            <motion.div variants={coverDiv} className="bg-primary absolute top-0 left-0 h-full z-20"></motion.div>
          </div>
        </ul>
      </div>
    </motion.div>
  );
}
