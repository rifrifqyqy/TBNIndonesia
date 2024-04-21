import Check from "../components/elements/Check";
export default function EventPageBanner() {
  return (
    <div className="h-[21.875rem] w-full flex bg-gray-200 rounded-3xl border-white border-8 justify-between overflow-clip">
      <div className="flex flex-col px-20 justify-center ">
        <h2 className="text-[2rem] text-darkp leading-none">TBNIndonesia</h2>
        <h1 className="text-[3.375rem] font-semibold">
          Event Page <span className="text-darkp">Workshop</span>
        </h1>
        <div className="mt-6 flex flex-col gap-5 max-w-fit">
          <Check className="bg-white p-2 pr-5  rounded-xl">Knowledge</Check>
          <Check className="bg-white p-2 pr-5 rounded-xl">Business Network</Check>
        </div>
      </div>
      <div>
        <img src="/images/businesman.svg" alt="" className=" max-h-full" />
      </div>
    </div>
  );
}
