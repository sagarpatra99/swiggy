import axios from "axios";

let api_url =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.80060&lng=86.18710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const fetchingData = async () => {
  try {
    const res = await axios.get(api_url);
    return (
      res.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  } catch (err) {
    console.error(err);
    return [];
  }
};
