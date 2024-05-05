import LinkButton from "./elements/Button/LinkButton";
export default function NavPage(props) {
  const { children, to } = props;
  return (
    <>
      <nav className="flex justify-between bg-white py-6 px-4 lg:px-16 top-0 sticky shadow-shadow1 items-center z-50">
        <div>
          <LinkButton to={to} className="flex gap-4 hover:text-primary lg:text-[20px] text-gray1 rounded-md">
            <img src="/images/Arrow_Left.svg" alt="" />
            Kembali
          </LinkButton>
        </div>
        <div className="hidden lg:visible">
          <img src="/images/logo.png" alt="" className="h-[42px]" />
        </div>
        <div>
          <h1 className="lg:text-xl font-semibold">{children}</h1>
        </div>
      </nav>
    </>
  );
}
