import CardEvent from "./elements/CardEvent";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";

const event = [
  {
    id: 1,
    image: "/images/poster5.jpg",
    title: "GREEN TECHNOLOGY & GREEN ENERGY",
    desc: "It's crucial to adapt to the changing sales landscape in the digital age, and Seth Godin's quote emphasizes the importance of customer-centricity.",
  },
  {
    id: 2,
    image: "/images/poster4.jpg",
    title: "LATINGATE WORKSHOP 2023",
    desc: "LatinGate Workshop is your first step to know how to build sustainable business with social impact. It is the right place for key leaders as well as less privileged emerging leaders.",
  },
  {
    id: 3,
    image: "/images/poster3.jpg",
    title: "A journey into Sociopreneurship",
    desc: "Grow your Social Entrepreneurship potential in a one-day bootcamp filled with challenges and intensive learning.",
  },
  {
    id: 4,
    image: "/images/poster3.jpg",
    title: "A journey into Sociopreneurship",
    desc: "Grow your Social Entrepreneurship potential in a one-day bootcamp filled with challenges and intensive learning.",
  },
];
export default function EventSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const scrollReveal = ScrollReveal();
    scrollReveal.reveal(sectionRef.current, {
      duration: 1000,
      origin: "right",
      distance: "150px",
      easing: "ease-in-out",
      reset: true,
    });
  }, []);

  return (
    <div id="event">
      <div ref={sectionRef} className="relative mx-[10px] lg:mx-[160px] mt-8 lg:mt-24 font-inter">
        <div className="flex justify-between items-center">
          <h1 className="text-[16px] lg:text-[40px] px-2 lg:px-0 font-semibold text-gray1">
            Events and<span className="text-darkp"> Workshops</span>
          </h1>
          <Link to="/event" className="flex gap-2 lg:gap-5 hover:text-darkp items-center">
            <h1 className="text-[14px] lg:text-[20px] font-medium">Lihat semua</h1>
            <img src="/images/Arrow_Right.svg" alt="" className="w-[24px] lg:w-[32px] " />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 lg:gap-8 mt-5 lg:justify-items-center">
          {event.map((event) => (
            <CardEvent key={event.id} image={event.image} title={event.title} to={`/event-details/${event.id}`}>
              {event.desc}
            </CardEvent>
          ))}
        </div>
      </div>
    </div>
  );
}
