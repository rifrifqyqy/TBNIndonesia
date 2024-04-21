import CardEvent from "../../elements/CardEvent";
export default function EventLatest() {
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
    {
      id: 5,
      image: "/images/poster3.jpg",
      title: "A journey intp",
      desc: "Grow your Social Entrepreneurship potential in a one-day bootcamp filled with challenges and intensive learning.",
    },
    {
      id: 6,
      image: "/images/poster2.jpg",
      title: "A journey into Sociopreneurship",
      desc: "Grow your Social Entrepreneurship potential in a one-day bootcamp filled with challenges and intensive learning.",
    },
  ];
  return (
    <>
      <div className="w-full grid grid-cols-2 sm md:grid-cols-3 gap-2 md:gap-5 lg:grid-cols-4 justify-items-center ">
        {event.map((event) => (
          <CardEvent key={event.id} image={event.image} title={event.title} to={`/event-details/${event.id}`}>
            {event.desc}
          </CardEvent>
        ))}
      </div>
    </>
  );
}
