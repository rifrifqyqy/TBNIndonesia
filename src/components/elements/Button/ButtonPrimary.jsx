import { Link } from "react-router-dom";
export default function ButtonPrimary(props) {
  const { children, className, to, onClick } = props;
  return (
    <>
      <Link to={to} onClick={onClick} className={`bg-darkp lg:py-[8px] lg:px-[32px] font-medium hover:opacity-70 ${className}`}>
        {children}
      </Link>
    </>
  );
}
