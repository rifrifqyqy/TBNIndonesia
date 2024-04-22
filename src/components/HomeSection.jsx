import React, { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import "../index.css";
import ButtonPrimary from "./elements/Button/ButtonPrimary";
export default function HomeSection() {
  const fadeRight = useRef(null);
  const fadeUp = useRef(null);

  useEffect(() => {
    const scrollReveal = ScrollReveal();
    scrollReveal.reveal(fadeRight.current, {
      duration: 1000,
      origin: "right",
      distance: "100px",
      easing: "ease-in-out",
      reset: true,
    });
    scrollReveal.reveal(fadeUp.current, {
      duration: 1000,
      origin: "bottom",
      distance: "100px",
      reset: true,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div id="home">
      <div ref={fadeRight} className="items-center flex h-[660px] lg:h-[450px] lg:ml-[160px] lg:mt-[210px] bg-image-konten2">
        <div className="flex h-max flex-col mx-6 lg:flex-row lg:ml-20 lg:items-center">
          <div className="flex w-full flex-col mt-4 order-2 lg:order-1 lg:w-[70%]">
            <h1 className=" text-[24px] lg:text-[40px] font-semibold">
              Fostering Business <br />
              Transformation
            </h1>
            <p className="text-[14px] lg:text-[24px]">We assist you in fostering positive change and sustainable business growth.</p>
            <div className="mt-4 lg:mt-8">
              <ButtonPrimary to="/event" className="rounded-md text-[16px] lg:text-[24px] py-2 px-6 text-white">
                See Events
              </ButtonPrimary>
            </div>
          </div>

          <div ref={fadeUp} className=" translate-x-8 lg:translate-x-0 lg:absolute lg:right-0 lg:bottom-0 lg:order-2">
            <img src="/images/Konten1.png" alt="" className="lg:h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
