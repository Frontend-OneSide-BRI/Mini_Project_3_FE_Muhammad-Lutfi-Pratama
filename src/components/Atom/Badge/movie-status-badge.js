export default function MovieStatusBadge({
  margin = "mr-4",
  text = "",
  width = "w-14",
  height = "h-14",
}) {
  return (
    <div className={`flex items-center text-white lg:${margin}`}>
      <div className={`mr-4 bg-pink-700 ${width} ${height} rounded-2xl`}></div>
      <p>{text}</p>
    </div>
  );
}
