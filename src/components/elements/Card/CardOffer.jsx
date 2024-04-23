import ButtonPrimary from "../Button/ButtonPrimary";
import { useState } from "react";

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
    linkform: "https://forms.gle/VFJCdpeg8kABN1Nw5",
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
    linkform: "https://forms.gle/LBkwL6hKSx7ij64H7",
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
const linkRegular = servicesRegular[0].linkform;
const linkGroupTable = servicesGroupTable[0].linkform;

export default function CardOffer(props) {
  const { children } = props;

  return <div className="flex w-[195px] lg:w-[416px] bg-white p-4 lg:p-6 flex-col rounded-xl shadow-sm">{children}</div>;
}

function Regular() {
  return (
    <div className="flex flex-col mt-4 h-full justify-between gap-4 lg:gap-12">
      <div className="flex flex-col gap-2 lg:gap-4">
        <div className="flex flex-col ">
          <h1 className="text-[20px] lg:text-[32px] font-semibold">{regularPrice.toLocaleString("id-ID", { currency: "IDR" })}</h1>

          <span className="text-gray3 text-[14px] lg:text-[16px]">per Person</span>
        </div>
        <div className="flex flex-col gap-2">
          {servicesRegular.map((service) => (
            <div key={service.id} className="flex items-center">
              <img src="/images/checkround.svg" alt="" className="mr-2 w-[20px] lg:w-[32px]" />
              <h2 className="text-[14px] lg:text-[20px]">{service.facility}</h2>
            </div>
          ))}
        </div>
      </div>
      <ButtonPrimary to={linkRegular} className=" text-center text-white lg:text-[20px] rounded-sm lg:rounded-lg">
        Buy Ticket
      </ButtonPrimary>
    </div>
  );
}
function GroupTable() {
  return (
    <div className="flex flex-col mt-4 h-full justify-between gap-12">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col ">
          <h1 className="text-[20px] lg:text-[32px] font-semibold">{groupTablePrice.toLocaleString("id-ID", { currency: "IDR" })}</h1>

          <span className="text-gray3 text-[14px] lg:text-[16px]">per Group</span>
        </div>
        <div className="flex flex-col gap-2">
          {servicesGroupTable.map((service) => (
            <div key={service.id} className="flex items-center">
              <img src="/images/checkround.svg" alt="" className="mr-2 w-[20px] lg:w-[32px]" />
              <h2 className="text-[14px] lg:text-[20px]">{service.facility}</h2>
            </div>
          ))}
        </div>
      </div>
      <ButtonPrimary to={linkGroupTable} className="text-center text-white lg:text-[20px] rounded-sm lg:rounded-lg">
        Buy Ticket
      </ButtonPrimary>
    </div>
  );
}

CardOffer.Regular = Regular;
CardOffer.GroupTable = GroupTable;
