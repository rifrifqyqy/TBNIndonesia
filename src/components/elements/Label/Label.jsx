export default function Label(props) {
  const { color, bglabel, children } = props;
  return (
    <div className={`label max-w-fit py-2 px-5 bg-[#FDFFD8] rounded-lg ${bglabel} ${color}`}>
      <h1 className={`text-[20px] font-medium text-darkp ${color}`}>{children}</h1>
    </div>
  );
}
