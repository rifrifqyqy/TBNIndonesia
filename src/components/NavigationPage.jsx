import LinkButton from "./elements/Button/LinkButton";
export default function NavPage(props) {
  const { children } = props;
  return (
    <>
      <nav className="flex justify-between bg-white py-6 px-16 top-0 sticky shadow-shadow1 items-center font-inter z-50">
        <div>
          <LinkButton onClick={() => window.history.back()} className="flex gap-4 hover:text-primary text-gray1 rounded-md">
            <img src="/images/Arrow_Left.svg" alt="" />
            Kembali
          </LinkButton>
        </div>
        <div>
          <img src="/images/logo.png" alt="" className="h-[42px]" />
        </div>
        <div>
          <h1 className="text-xl font-semibold">{children}</h1>
        </div>
      </nav>
    </>
  );
}
