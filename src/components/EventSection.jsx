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
    <div ref={sectionRef} id="event" className="relative mx-[40px] lg:mx-[160px] mt-24 font-inter">
      <div className="flex justify-between items-center">
        <h1 className=" text-[40px] font-semibold text-gray1">
          Events and<span className="text-darkp"> Workshops</span>
        </h1>
        <Link to="/event" className="flex gap-5 hover:text-darkp ">
          <h1 className="text-[20px] font-medium">Lihat semua</h1>
          <img src="/images/Arrow_Right.svg" alt="" className=" w-[32px] " />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-5 justify-items-center">
        {event.map((event) => (
          <CardEvent key={event.id} image={event.image} title={event.title} to={`/event-details/${event.id}`}>
            {event.desc}
          </CardEvent>
        ))}
      </div>
    </div>
  );
}
