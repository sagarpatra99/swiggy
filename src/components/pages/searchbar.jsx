import { Search, X } from "lucide-react";
import { popular } from "../../utils/data";
import { useEffect, useState } from "react";
import { fetchingData } from "../../utils/fetch";
import Card from "../reuseable/card";

export default function Searchbar() {
  const [searchText, setSearchText] = useState("");
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetchingData();
      setAllData(res);
    };

    getData();
  }, []);

  const filteredData =
    searchText.trim() === ""
      ? []
      : allData.filter((res) =>
          res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );

  return (
    <div className="px-[15vw] py-16">
      <div className="border-2 border-gray-600 flex items-center justify-between p-4">
        <input
          type="text"
          placeholder="Search for resturants"
          className="outline-none w-full"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        {searchText.length === 0 ? (
          <Search />
        ) : (
          <X
            className="cursor-pointer"
            onClick={() => {
              setSearchText("");
            }}
          />
        )}
      </div>
      <div>
        {searchText.length > 0 ? (
          <div className="flex items-center gap-8 pt-8 pb-4 flex-wrap">
            {filteredData.length === 0 ? (
              <div className="text-2xl">{`No match found for "${searchText}"`}</div>
            ) : (
              filteredData.map((item) => {
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
              })
            )}
          </div>
        ) : (
          <>
            <h2 className="font-semibold text-xl pt-10 pb-2">
              Popular Cuisines
            </h2>
            <div className="flex items-center justify-between flex-wrap">
              {popular.map((cuisine, id) => (
                <img
                  key={id}
                  src={cuisine}
                  alt="food"
                  className="h-28 w-20 cursor-pointer"
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
