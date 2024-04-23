export default function Label(props) {
  const { color, bglabel, children } = props;
  return (
    <div className={`label max-w-fit py-1 lg:py-2 px-2 lg:px-5 bg-[#FDFFD8] rounded-lg ${bglabel} ${color}`}>
      <h1 className={`lg:text-[20px] font-medium ${color}`}>{children}</h1>
    </div>
  );
}
