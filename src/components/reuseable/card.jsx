import { Star } from "lucide-react";
import { CDN_URL } from "../../utils/constants";

export default function Card({
  res,
  imgSrcId,
  price,
  starRating,
  time,
  cuisine,
  location,
}) {
  return (
    <div className="h-[305px] w-[273px] bg-red-300j cursor-pointer hover:scale-95 transition-all duration-300">
      <div className="relative">
        <img
          className="h-[183px] w-full object-cover rounded-2xl"
          src={CDN_URL + imgSrcId}
          alt="ResturantImage"
        />
        <h5 className="absolute bottom-5 left-2 text-white font-extrabold text-lg">
          {price}
        </h5>
      </div>
      <div className="pt-2 pl-2">
        <div className="font-bold">{res}</div>
        <div className="flex items-center gap-2">
          <Star
            size={25}
            className={`${
              starRating >= 4 ? "bg-green-600" : "bg-yellow-500"
            } text-white rounded-full p-1`}
          />
          {starRating} <span className="font-bold">{time}</span>
        </div>
        <div className="text-gray-800 pt-1">
          {cuisine.length > 3
            ? cuisine.slice(0, 3).join(", ") + "..."
            : cuisine.join(", ")}
        </div>
        <div className="text-gray-500">{location}</div>
      </div>
    </div>
  );
}
