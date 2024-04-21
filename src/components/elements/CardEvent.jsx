import ButtonPrimary from "./Button/ButtonPrimary";
import LinkButton from "./Button/LinkButton";
import { Link } from "react-router-dom";

export default function CardEvent(props) {
  const { children, image, title, to } = props;
  return (
    <div className="card w-[210px] lg:w-[310px] flex flex-col bg-white p-3 rounded-lg shadow-sm  ">
      <div className="w-full h-[250px] lg:h-[360px] top-0 right-0 bg-slate-400 relative rounded-md overflow-hidden">
        <img src={image} alt="" className="w-full h-full object-cover z-0" />
        <Link to={to} className="w-full h-full  top-0 right-0 absolute opacity-0 flex bg-slate-800 bg-opacity-80 hover:opacity-100 transition ease-linear duration-100">
          <LinkButton to={to} className="text-slate-900 bg-white m-auto py-2 px-4 rounded-md font-semibold hover:scale-105 hover:text-primary focus:ring-4 focus:ring-gray5 transition ease-linear duration-100">
            See Event
          </LinkButton>
        </Link>
      </div>

      <div className="flex flex-col flex-grow ">
        <h1 className="text-[20px] font-medium mt-3 uppercase">{title}</h1>
        <p className=" whitespace-nowrap text-ellipsis overflow-hidden text-[16px] text-gray3">{children}</p>
        <div className="mt-auto flex self-end">
          <ButtonPrimary to={to} className="mt-3 rounded-md text-white">
            Lihat Event
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
}
