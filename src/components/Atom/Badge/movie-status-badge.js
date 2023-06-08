import { MinusIcon } from "@heroicons/react/20/solid";

export default function MovieStatusBadge({
  margin = 4,
  text = "",
  width = 14,
  height = 14,
  icon: Icon,
}) {
  return (
    <div className={`flex items-center text-white lg:mr-${margin}`}>
      <div
        className={`mr-4 lg:mr-2 p-4 bg-white/20 w-${width} lg:scale-75 h-${height} rounded-2xl`}
      >
        {Icon == null ? (
          <MinusIcon className="h-full text-white opacity-40 wmx-auto" />
        ) : (
          <Icon className="h-full text-white opacity-40 wmx-auto" />
        )}
      </div>
      <p className="lg:text-sm">{text}</p>
    </div>
  );
}
