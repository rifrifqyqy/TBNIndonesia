export default function Check(props) {
    const { children, className } = props;
  return (
    <div className={`flex items-center gap-2 lg:gap-5 lg:text-[24px] font-medium ${className}`}>
      <img src="/images/check.svg" alt="" className="w-[20px] lg:w-[32px]" />
      {children}
    </div>
  );
}
