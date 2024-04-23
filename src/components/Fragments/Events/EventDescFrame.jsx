import ButtonPrimary from "../../elements/Button/ButtonPrimary";

export default function EventDescFrame(props) {
  const { title, date, location, targetDivId, targetDivId2 } = props;
  const scrollToDiv = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="flex lg:justify-end lg:w-[520px]">
      <div className="rounded-lg border-2 border-slate-200 w-full lg:w-[520px] flex flex-col p-4 divide-y-2 divide-solid">
        <div className="pb-2 break-all">
          <h1 className="text-[16px] lg:text-[24px] font-semibold">{title}</h1>
          <h2 className=" text-[14px] lg:text-[16px] text-gray3">{date}</h2>
          <p className="text-gray4 text-[14px] lg:text-[16px] line-clamp-2">{location}</p>
        </div>
        <div className="flex justify-between pt-4 gap-2">
          <ButtonPrimary onClick={() => scrollToDiv(targetDivId)} className="border-[1px] border-darkp flex-grow text-center text-white py-2 text-[14px] lg:text-[16px]">
            Buy Ticket
          </ButtonPrimary>
          <ButtonPrimary onClick={() => scrollToDiv(targetDivId2)} className="bg-transparent border-[1px] border-gray1 flex-grow text-center self-center text-gray1 hover:bg-gray1 hover:text-white py-2 text-[14px] lg:text-[16px]">Learn More</ButtonPrimary>
        </div>
      </div>
    </section>
  );
}
