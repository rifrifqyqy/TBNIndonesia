import React, { useEffect, useRef, useState } from "react";
import ScrollReveal from "scrollreveal";
import { motion } from "framer-motion";

export default function AboutSection() {
  const fadeRight = [useRef(null), useRef(null)];
  const fadeLeft = [useRef(null), useRef(null)];

  useEffect(() => {
    const scrollReveal = ScrollReveal();
    fadeRight.forEach((ref) => {
      scrollReveal.reveal(ref.current, {
        duration: 1000,
        origin: "right",
        distance: "100px",
        easing: "ease-in-out",
        reset: true,
      });
    });

    fadeLeft.forEach((ref) => {
      scrollReveal.reveal(ref.current, {
        duration: 1000,
        origin: "left",
        distance: "100px",
        easing: "ease-in-out",
        reset: true,
      });
    });
  }, []);
  return (
    <section id="about">
      <section className=" bg-gray-200 w-full py-8 lg:py-20 flex mt-8 lg:mt-32 ">
        <div className="flex  gap-8 flex-col lg:flex-row items-center lg:mx-[160px] lg:gap-0 lg:justify-between ">
          <div className="flex flex-col px-8 lg:px-0 lg:w-[50%] my-auto order-2 lg:order-1">
            <motion.p initial={{ x: -100 }} animate={{ fontSize: 100 }} whileInView={{ x: 0 }} whileHover={{ backgroundColor: "#ffff" }} className="tracking-[16px] lg:tracking-[20px]  text-[12px] lg:text-[20px] font-medium text-gray4 ">
              INVESTMENTS
            </motion.p>
            <h1 className="text-[24px] lg:text-[40px] font-semibold leading-tight text-gray1">
              Connecting <br /> Entrepreneurs and <span className="text-darkp">Investors</span>
            </h1>
            <p className=" text-gray3 lg:text-[24px] lg:mt-[20px]">
              Entrepreneur seeking funding or investor looking to join our network? We're the strategic bridge connecting entrepreneurs and investors in Indonesia, offering tailored investment services.
            </p>
          </div>
          <div className=" w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] order-1 lg:order-2 bg-gray1 rounded-2xl relative hover:bg-primary transition linear duration-300" ref={fadeRight[0]}>
            <img src="/images/konten3.png" alt="" className="bottom-0 absolute" />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-8 lg:gap-0 lg:flex-row items-center lg:mx-[160px] lg:justify-between mt-24 ">
        <div className="flex flex-col px-8 lg:px-0 lg:w-[50%] my-auto order-2 " ref={fadeRight[1]}>
          <p className="tracking-[16px] lg:tracking-[20px]  text-[12px] lg:text-[20px] font-medium text-gray4 ">ADVISORY</p>
          <h1 className="text-[24px] lg:text-[40px] font-semibold leading-tight text-gray1">
            Comprehensive Advisory <br />
            <span className="text-darkp">Solutions</span>
          </h1>
          <p className=" text-gray3 lg:text-[24px] lg:mt-[20px]">
            Entrepreneur seeking funding or investor looking to join our network? We're the strategic bridge connecting entrepreneurs and investors in Indonesia, offering tailored investment services.
          </p>
        </div>
        <div className="w-[300px] h-[270px] lg:w-[430px] lg:h-[400px] bg-gray5 rounded-2xl relative order-1 flex justify-center hover:bg-primary transition linear duration-300" ref={fadeLeft[1]}>
          <img src="/images/konten4.png" alt="" className="bottom-0 absolute" />
        </div>
      </section>
    </section>
  );
}
