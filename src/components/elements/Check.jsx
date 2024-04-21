export default function Check(props) {
    const { children, className } = props;
  return (
    <div className={`flex items-center gap-5 text-[24px] font-medium ${className}`}>
      <img src="/images/check.svg" alt="" className="w-[32px]" />
      {children}
    </div>
  );
}
