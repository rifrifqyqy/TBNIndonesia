import Check from "../components/elements/Check";
export default function EventPageBanner() {
  return (
    <div className="h-full lg:h-[21.875rem] w-full flex flex-col lg:flex-row bg-gray-200 rounded-3xl border-white border-8 justify-between overflow-clip">
      <div className="flex flex-col px-4 py-4 lg:px-20 justify-center order-2 lg:order-1 ">
        <h2 className="lg:text-[2rem] text-darkp leading-none">TBNIndonesia</h2>
        <h1 className="text-[24px] lg:text-[3.375rem] font-semibold">
          Event Page <span className="text-darkp">Workshop</span>
        </h1>
        <div className="mt-3 lg:mt-6 flex flex-col gap-2 lg:gap-5 max-w-fit">
          <Check className="bg-white py-[2px] pl-1 pr-2 lg:p-2 lg:pr-5 rounded-md lg:rounded-xl">Knowledge</Check>
          <Check className="bg-white py-[2px] pl-1 pr-2 lg:p-2 lg:pr-5 rounded-md lg:rounded-xl">Business Network</Check>
        </div>
      </div>
      <div className="order-1 self-center lg:self-auto lg:order-2">
        <img src="/images/businesman.svg" alt="" className="max-h-[220px] lg:max-h-full" />
      </div>
    </div>
  );
}
