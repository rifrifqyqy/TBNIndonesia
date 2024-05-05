import { useParams } from "react-router-dom";
import NavPage from "../components/NavigationPage";
import VideoEvent from "../components/Fragments/Events/VideoEvent";
import EventDescFrame from "../components/Fragments/Events/EventDescFrame";
import TabEventDetail from "../components/Layouts/TabEventDetail/TabEventDetailLayouts";
import Accordion from "../components/elements/Accordion/Accordion";
import { useState } from "react";
import CardOffer from "../components/elements/Card/CardOffer";
import Label from "../components/elements/Label/Label";
import FooterSection from "../components/FooterSection";
import LinkButton from "../components/elements/Button/LinkButton";
export default function EventDetails() {
  let { id } = useParams();

  const data = [
    {
      id: 1,
      image: "/images/poster5.jpg",
      title: "GREEN TECHNOLOGY AND GREEN ENERGY",
      desc: "It's crucial to adapt to the changing sales landscape in the digital age, and Seth Godin's quote emphasizes the importance of customer-centricity.",
      videourl: "https://www.youtube.com/embed/Hajlb9IgvGg?si=-89eSytnUEsOBsS3",
      date: "10 November 2023",
      location: "Menara Danareksa (ARYA NUSA BALLROOM) Jakarta",
      gmaps: "https://maps.app.goo.gl/CGJb4ynP9iZNhbNH9",
    },
    {
      id: 2,
      image: "/images/poster4.jpg",
      title: "LATINGATE WORKSHOP 2023",
      desc: "LatinGate Workshop is your first step to know how to build sustainable business with social impact. It is the right place for key leaders as well as less privileged emerging leaders.",
      videourl: "https://www.youtube.com/embed/wPFolj0WG0g?si=k07R8Z9xWR7DhxP1",
      date: "10 November 2023",
      location: "South Jakarta, Indonesia",
      gmaps: "https://maps.app.goo.gl/RhFdBYwYUwwTVsdc7",
    },
    {
      id: 3,
      image: "/images/poster3.jpg",
      title: "A journey into Sociopreneurship",
      desc: "Grow your Social Entrepreneurship potential in a one-day bootcamp filled with challenges and intensive learning.",
      videourl: "https://www.youtube.com/embed/wPFolj0WG0g?si=k07R8Z9xWR7DhxP1",
      date: "10 November 2023",
      location: "Menara Danareksa (ARYA NUSA BALLROOM) Jakarta",
      gmaps: "https://maps.app.goo.gl/CGJb4ynP9iZNhbNH9",
    },
    {
      id: 4,
      image: "/images/poster3.jpg",
      title: "A journey into Sociopreneurship",
      desc: "Grow your Social Entrepreneurship potential in a one-day bootcamp filled with challenges and intensive learning.",
      videourl: "https://www.youtube.com/embed/wPFolj0WG0g?si=k07R8Z9xWR7DhxP1",
      location: "Menara Danareksa (ARYA NUSA BALLROOM) Jakarta",
      gmaps: "https://maps.app.goo.gl/CGJb4ynP9iZNhbNH9",
    },
    {
      id: 5,
      image: "/images/poster3.jpg",
      title: "A journey intp",
      desc: "Grow your Social Entrepreneurship potential in a one-day bootcamp filled with challenges and intensive learning.",
      videourl: "https://www.youtube.com/embed/wPFolj0WG0g?si=k07R8Z9xWR7DhxP1",
      date: "10 November 2023",
      location: "South Jakarta, Indonesia",
      gmaps: "https://maps.app.goo.gl/RhFdBYwYUwwTVsdc7",
    },
    {
      id: 6,
      image: "/images/poster2.jpg",
      title: "A journey into Sociopreneurship",
      desc: "Grow your Social Entrepreneurship potential in a one-day bootcamp filled with challenges and intensive learning.",
      videourl: "https://www.youtube.com/embed/wPFolj0WG0g?si=k07R8Z9xWR7DhxP1",
      date: "10 November 2023",
      location: "South Jakarta, Indonesia",
      gmaps: "https://maps.app.goo.gl/RhFdBYwYUwwTVsdc7",
    },
  ];

  const [isAnimate, setIsAnimate] = useState(null);
  const eventData = data.find((event) => event.id === parseInt(id));
  const video = eventData;
  const location = eventData;
  const linkmap = eventData;
  const linkgmaps = linkmap.gmaps;
  const accordionData = [
    {
      title: "Check Event Location",
      content: (
        <>
          {location.location}
          <LinkButton className="text-[12px] lg:text-[14px] text-blue-500 hover:text-gray-400" to={linkgmaps}>
            {" "}
            Lihat Maps
          </LinkButton>
        </>
      ),
    },
    {
      title: "More Information",
      content: "This event will be held by 3 Speaker, 220 Participant, and 3 Moderator.",
    },
  ];
  if (!eventData) {
    return <div>Event not found</div>;
  }
  if (!video) {
    return <div>Event not found</div>;
  }

  const animateClick = () => {
    // Ubah nilai state isActive menjadi sebaliknya
    setIsAnimate("animated__animate animate__shakeX");
    setTimeout(() => {
      setIsAnimate(null);
    }, 1000);
  };
  return (
    <>
      <NavPage to="/">EVENT DETAILS</NavPage>
      <div className="mx-4 lg:mx-[160px] mt-8 divide-y-2 divide-solid" id="top">
        <div className="flex flex-col lg:flex-row justify-between mb-6 lg:mb-12 h-auto transition gap-4 lg:gap-16">
          <div>
            <VideoEvent src={video.videourl}></VideoEvent>
          </div>
          <div className="flex flex-col max-w-full lg:max-w-min">
            <EventDescFrame targetDivId2="Learn" targetDivId="targetDiv" title={eventData.title} date={eventData.date} location={eventData.location}></EventDescFrame>

            <div className="bg-[#F5F7D1] text-[#808800] font-medium text-[18px] text-center lg:text-left py-4 lg:px-6 mt-4 ">
              <h1 className={` animate__animated ${isAnimate} cursor-pointer text-[14px] lg:text-[16px]`} onClick={animateClick}>
                Insterested? Check our Event Informations
              </h1>
            </div>

            <Accordion section={accordionData}></Accordion>
          </div>
        </div>
        <div className="mb-12" id="Learn">
          <TabEventDetail>
            <TabEventDetail.Header></TabEventDetail.Header>
          </TabEventDetail>
        </div>
        <div className="flex justify-between lg:justify-evenly pt-4 lg:pt-10 gap-2" id="targetDiv">
          <CardOffer>
            <Label color="text-darkp">Regular</Label>
            <CardOffer.Regular></CardOffer.Regular>
          </CardOffer>
          <CardOffer>
            <Label bglabel="bg-[#FFE7E7] " color="text-[#FF4B4B]">
              Group Table
            </Label>
            <CardOffer.GroupTable></CardOffer.GroupTable>
          </CardOffer>
        </div>
      </div>
      <FooterSection />
    </>
  );
}
