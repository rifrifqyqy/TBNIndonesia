import React, { Fragment, useEffect, useRef, useState } from "react";
import ScrollReveal from "scrollreveal";
import "../index.css";
import ButtonPrimary from "./elements/Button/ButtonPrimary";
import { animate, motion, transform } from "framer-motion";
export default function HomeSection() {
  const fadeRight = useRef(null);
  const fadeUp = useRef(null);
  const homeAnimation = {
    initial: {
      x: 1200,
      opacity: 0,
    },
    animate: {},
    view: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        when: "beforeChildren",
      },
    },
  };
  //agar animasi hanya muncul di layar besar
  let animate;
  const breakpoint = 768; // Contoh breakpoint

  if (window.innerWidth >= breakpoint) {
    animate = homeAnimation;
  } else {
    animate = null;
  }
  //end
  const imgAnimate = {
    initial: {
      y: 20,
      opacity: 0,
    },
    view: {
      y: -60,
      opacity: 1,

      transition: {
        duration: 0.2,
      },
    },
  };
  const wrapShow = {
    initial: {
      width: "100%",
    },
    view: {
      width: "0%",
      transition: {
        duration: 0.5,
      },
    },
  };
  const textShow = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    view: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.5, duration: 0.2 },
    },
  };
  // useEffect(() => {
  //   const scrollReveal = ScrollReveal();
  //   scrollReveal.reveal(fadeRight.current, {
  //     duration: 1000,
  //     origin: "right",
  //     distance: "100px",
  //     easing: "ease-in-out",
  //     reset: true,
  //   });
  //   scrollReveal.reveal(fadeUp.current, {
  //     duration: 1000,
  //     origin: "bottom",
  //     distance: "100px",
  //     reset: true,
  //     easing: "ease-in-out",
  //   });
  // }, []);

  return (
    <Fragment>
      <div id="home">
        <motion.div variants={animate} initial="initial" whileInView="view" animate="animate" className="items-center flex h-[660px] lg:h-[450px] lg:ml-[160px] lg:mt-[100px] bg-image-konten2">
          <div className="flex h-max flex-col mx-6 lg:flex-row lg:ml-20 lg:items-center">
            <div className="flex w-full flex-col mt-4 order-2 lg:order-1 lg:w-[70%]">
              <header className="relative overflow-hidden">
                <motion.h1 variants={textShow} className=" text-[24px] lg:text-[40px] flex font-semibold">
                  Fostering Business <br />
                  Transformation
                </motion.h1>
                <motion.div variants={wrapShow} className="h-full absolute bg-primary z-20 top-0 right-0"></motion.div>
              </header>
              <header className="relative overflow-hidden mt-2">
                <motion.p variants={textShow} className="text-[14px] text-clip lg:text-[24px]">
                  We assist you in fostering positive change and sustainable business growth.
                </motion.p>
                <motion.div variants={wrapShow} className="h-full mr-14 absolute bg-primary z-20 top-0 right-0"></motion.div>
              </header>

              <div className="mt-4 lg:mt-8">
                <ButtonPrimary to="/event" className="rounded-md text-[16px] lg:text-[24px] py-2 px-6 text-white">
                  See Events
                </ButtonPrimary>
              </div>
            </div>

            <motion.div variants={imgAnimate} className=" translate-x-8 lg:translate-x-0 lg:absolute lg:right-0  lg:order-2">
              <img src="/images/Konten1.png" alt="" className="lg:h-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Fragment>
  );
}
