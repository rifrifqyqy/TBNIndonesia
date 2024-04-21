import ButtonPrimary from "../../elements/Button/ButtonPrimary";

export default function EventDescFrame(props) {
    const { title, date, location } = props;
  return (
    <section className="flex justify-end w-[520px]">
      <div className="rounded-lg border-2 border-slate-200 w-[520px] flex flex-col p-4 divide-y-2 divide-solid">
        <div className="pb-2">
          <h1 className="text-[24px] font-semibold">{title}</h1>
          <h2 className="text-[16px] text-gray3">{date}</h2>
          <p className="text-gray4 line-clamp-2">{location}</p>
        </div>
        <div className="flex justify-between pt-4 gap-2">
          <ButtonPrimary className="border-[1px] border-darkp flex-grow text-center text-white">Buy Ticket</ButtonPrimary>
          <ButtonPrimary className="bg-transparent border-[1px] border-gray1 flex-grow text-center text-gray1 hover:bg-gray1 hover:text-white">Learn More</ButtonPrimary>
        </div>
      </div>
    </section>
  );
}
