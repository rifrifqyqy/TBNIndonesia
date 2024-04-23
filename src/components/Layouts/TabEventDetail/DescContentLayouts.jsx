export default function DescContent(props) {
  const { children } = props;
  return (
    <div className="w-full border-[2px] border-slate-200 py-5 px-8 rounded-lg">
      {children}
    </div>
  );
}

// description box taba event