import { MinusIcon } from "@heroicons/react/20/solid";

export default function MovieShowMenuIcon({
  width = 14,
  rounded = "xl",
  Icon,
}) {
  return (
    <div className={`p-2 bg-white/30 h-14 w-${width} rounded-${rounded}`}>
      {Icon != null ? (
        <Icon className="h-full text-white opacity-60" />
      ) : (
        <MinusIcon className="h-full text-white opacity-60" />
      )}
    </div>
  );
}
