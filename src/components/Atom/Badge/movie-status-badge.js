export default function MovieStatusBadge({
  margin = 4,
  text = "",
  width = 14,
  height = 14,
}) {
  return (
    <div className={`flex items-center text-white lg:mr-${margin}`}>
      <div
        className={`mr-4 lg:mr-2 bg-white/20 w-${width} lg:scale-75 h-${height} rounded-2xl`}
      ></div>
      <p className="lg:text-sm">{text}</p>
    </div>
  );
}
