import { useEffect, useState } from "react";
import Card from "../reuseable/card";
import CardShimmer from "../reuseable/card-shimmer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { fetchingData } from "../../utils/fetch";
import { useOnlineStatus } from "../../utils/useOnlineStatus";

export default function Home() {
  const [allRestaurants, setallRestaurants] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [sortBy, setSortBy] = useState("relevance");

  const online = useOnlineStatus();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchingData();
      setallRestaurants(data);
      setData(data);
      setLoading(false);
    };
    getData();
  }, []);

  const handleSortChange = (val) => {
    setSortBy(val);

    if (val === "topRated") {
      const filtered = allRestaurants.filter(
        (item) => item.info.avgRating > 4.3
      );
      setData(filtered);
    } else if (val === "relevance") {
      setData(allRestaurants);
    }

    setOpen(false);
  };

  return (
    <div className="px-16">
      {loading ? (
        <>
          <div className="pt-5 pb-5">
            <div className="h-6 w-94 rounded-md bg-gray-200 animate-pulse" />
          </div>

          <ScrollArea className="w-full">
            <div className="flex items-center gap-8 pb-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <CardShimmer key={n} />
              ))}
            </div>
          </ScrollArea>
          <hr />
          <div className="flex items-center justify-between">
            <div className="pt-5 pb-5">
              <div className="h-6 w-94 rounded-md bg-gray-200 animate-pulse" />
            </div>
            <div className="h-8 w-28 rounded-md bg-gray-200 animate-pulse" />
          </div>
          <div className="flex items-center justify-center flex-wrap gap-8 pb-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <CardShimmer key={n} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="flex items-center justify-between">
              <h2 className="pt-6 pb-4 text-xl font-semibold">
                Top restaurant chains in Jamshedpur
              </h2>
              <p>Online Status: {`${online ? "✅" : "🔴"}`}</p>
            </div>
            <ScrollArea className="w-full">
              <div className="flex items-center gap-8 pb-4">
                {allRestaurants.map((item) => {
                  const {
                    id,
                    name,
                    cloudinaryImageId,
                    aggregatedDiscountInfoV3,
                    avgRating,
                    sla,
                    cuisines,
                    locality,
                  } = item.info;
                  return (
                    <Card
                      key={id}
                      res={name}
                      imgSrcId={cloudinaryImageId}
                      price={`${aggregatedDiscountInfoV3?.header ?? ""} ${
                        aggregatedDiscountInfoV3?.subHeader ?? ""
                      }`.trim()}
                      starRating={avgRating}
                      time={sla.slaString}
                      cuisine={cuisines}
                      location={locality}
                    />
                  );
                })}
              </div>
              <ScrollBar
                orientation="horizontal"
                className="
    h-1.5 w-12 pt-0 mx-auto
    bg-[#F0F0F5]
    rounded-full
    [&>div]:bg-[#F18520]
    [&>div]:rounded-full
  "
              />
            </ScrollArea>
          </div>
          {/* =================================================================================== */}
          {/* =================================================================================== */}
          <hr className="mt-4 h-0.5 bg-gray-200" />
          <div className="px-0">
            <div className="flex items-center justify-between">
              <h2 className="pt-6 pb-4 text-xl font-semibold">
                Restaurants with online food delivery in Jamshedpur
              </h2>
              <div>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger className="flex items-center gap-2 border px-2 py-1 rounded-2xl font-semibold">
                    Sort By <ChevronDown />
                  </PopoverTrigger>

                  <PopoverContent className="w-56 bg-white right-1">
                    <div className="space-y-2">
                      <label
                        className={`flex items-center justify-between cursor-pointer ${
                          sortBy === "relevance"
                            ? "text-black"
                            : "text-gray-400"
                        }`}
                      >
                        Relevance (Default)
                        <input
                          type="radio"
                          name="sort"
                          checked={sortBy === "relevance"}
                          onChange={() => handleSortChange("relevance")}
                        />
                      </label>

                      <label
                        className={`flex items-center justify-between cursor-pointer ${
                          sortBy === "topRated" ? "text-black" : "text-gray-400"
                        }`}
                      >
                        Top Rated Restaurants
                        <input
                          type="radio"
                          name="sort"
                          checked={sortBy === "topRated"}
                          onChange={() => handleSortChange("topRated")}
                        />
                      </label>

                      <label
                        className={`flex items-center justify-between cursor-pointer ${
                          sortBy === "lowToHigh"
                            ? "text-black"
                            : "text-gray-400"
                        }`}
                      >
                        Cost: Low to High
                        <input
                          type="radio"
                          name="sort"
                          checked={sortBy === "lowToHigh"}
                          onChange={() => handleSortChange("lowToHigh")}
                        />
                      </label>

                      <label
                        className={`flex items-center justify-between cursor-pointer ${
                          sortBy === "highToLow"
                            ? "text-black"
                            : "text-gray-400"
                        }`}
                      >
                        Cost: High to Low
                        <input
                          type="radio"
                          name="sort"
                          checked={sortBy === "highToLow"}
                          onChange={() => handleSortChange("highToLow")}
                        />
                      </label>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="w-full flex items-center justify-center flex-wrap gap-8 pb-4">
              {data.map((item) => {
                const {
                  id,
                  name,
                  cloudinaryImageId,
                  aggregatedDiscountInfoV3,
                  avgRating,
                  sla,
                  cuisines,
                  locality,
                } = item.info;
                return (
                  <Card
                    key={id}
                    res={name}
                    imgSrcId={cloudinaryImageId}
                    price={`${aggregatedDiscountInfoV3?.header ?? ""} ${
                      aggregatedDiscountInfoV3?.subHeader ?? ""
                    }`.trim()}
                    starRating={avgRating}
                    time={sla.slaString}
                    cuisine={cuisines}
                    location={locality}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
