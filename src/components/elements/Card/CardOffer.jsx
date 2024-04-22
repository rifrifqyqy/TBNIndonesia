import ButtonPrimary from "../Button/ButtonPrimary";

const priceEvent = [
  {
    regular: 1500000,
    grouptable: 6500000,
  },
];
const servicesRegular = [
  {
    id: 1,
    facility: "1 Conference Day",
  },
  {
    id: 2,
    facility: "Free Coffee & Lunch",
   
  },
  {
    id: 3,
    facility: "Goodie Bags",
   
  },
  {
    id: 4,
    facility: "e-Certificate",
   
  },
];
const servicesGroupTable = [
  {
    id: 1,
    facility: "1 Reserved Table for 6 Persons",
  },
  {
    id: 2,
    facility: "1 Conference Day",
  },
  {
    id: 3,
    facility: "Free Coffee & Lunch",
   
  },
  {
    id: 4,
    facility: "Goodie Bags",
   
  },
  {
    id: 5,
    facility: "e-Certificate",
   
  },
];
const regularPrice = priceEvent[0].regular;
const groupTablePrice = priceEvent[0].grouptable;

export default function CardOffer(props) {
  const { children } = props;

  return <div className="flex w-[416px] bg-white p-6 flex-col rounded-xl shadow-sm">{children}</div>;
}

function Regular() {
  return (
    <div className="flex flex-col mt-4 h-full justify-between gap-12">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col ">
          <h1 className="text-[32px] font-semibold">{regularPrice.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</h1>

          <span className="text-gray3">per Person</span>
        </div>
        <div className="flex flex-col gap-2">
          {servicesRegular.map((service) => (
            <div key={service.id} className="flex items-center">
              <img src="/images/checkround.svg" alt="" className="mr-2" />
              <h2 className="text-[20px]">{service.facility}</h2>
            </div>
          ))}
        </div>
      </div>
      <ButtonPrimary className="text-center text-white text-[20px] rounded-lg">Buy Ticket</ButtonPrimary>
    </div>
  );
}
function GroupTable() {
  return (
    <div className="flex flex-col mt-4 h-full justify-between gap-12">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col ">
          <h1 className="text-[32px] font-semibold">{groupTablePrice.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</h1>

          <span className="text-gray3">per Group</span>
        </div>
        <div className="flex flex-col gap-2">
          {servicesGroupTable.map((service) => (
            <div key={service.id} className="flex items-center">
              <img src="/images/checkround.svg" alt="" className="mr-2" />
              <h2 className="text-[20px]">{service.facility}</h2>
            </div>
          ))}
        </div>
      </div>
      <ButtonPrimary className="text-center text-white text-[20px] rounded-lg">Buy Ticket</ButtonPrimary>
    </div>
  );
}

CardOffer.Regular = Regular;
CardOffer.GroupTable = GroupTable;
