import React, { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
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
      <section className=" bg-gray-200 w-full py-20 flex mt-32">
        <div className="flex mx-[160px] font-inter justify-between ">
          <div className="flex flex-col w-[50%] my-auto" ref={fadeLeft[0]}>
            <p className="tracking-[20px] font-medium text-gray4 ">INVESTMENTS</p>
            <h1 className="text-[40px] font-semibold leading-tight text-gray1">
              Connecting <br /> Entrepreneurs and <span className="text-darkp">Investors</span>
            </h1>
            <p className=" text-gray3 text-[24px] mt-[20px]">
              Entrepreneur seeking funding or investor looking to join our network? We're the strategic bridge connecting entrepreneurs and investors in Indonesia, offering tailored investment services.
            </p>
          </div>
          <div className="w-[400px] h-[400px] bg-gray1 rounded-2xl relative hover:bg-primary transition linear duration-300" ref={fadeRight[0]}>
            <img src="/images/konten3.png" alt="" className="bottom-0 absolute" />
          </div>
        </div>
      </section>

      <section className="flex mx-[160px] mt-32 font-inter justify-between ">
        <div className="flex flex-col w-[50%] my-auto order-2 " ref={fadeRight[1]}>
          <p className="tracking-[20px] font-medium text-gray4 ">ADVISORY</p>
          <h1 className="text-[40px] font-semibold leading-tight text-gray1">
            Comprehensive Advisory <span className="text-darkp">Solutions</span>
          </h1>
          <p className=" text-gray3 text-[24px] mt-[20px]">
            Entrepreneur seeking funding or investor looking to join our network? We're the strategic bridge connecting entrepreneurs and investors in Indonesia, offering tailored investment services.
          </p>
        </div>
        <div className="w-[430px] h-[400px] bg-gray5 rounded-2xl relative order-1 flex justify-center hover:bg-primary transition linear duration-300" ref={fadeLeft[1]}>
          <img src="/images/konten4.png" alt="" className="bottom-0 absolute" />
        </div>
      </section>
    </section>
  );
}
