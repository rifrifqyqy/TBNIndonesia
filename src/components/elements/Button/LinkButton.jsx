import { Link } from "react-router-dom";
export default function LinkButton(props) {
  const { children, className, to, onClick } = props;
  return (
    <Link to={to} onClick={onClick} className={`text-xl font-medium ${className} cursor-pointer`}>
      {children}
    </Link>
  );
}
