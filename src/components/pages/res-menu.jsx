import axios from "axios";
import { useEffect } from "react";

export default function ResMenu() {
//   const [resData, setResData] = useState([]);
  const getData = async () => {
    let res = await axios.get(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.80060&lng=86.18710&restaurantId=129550&catalog_qa=undefined&submitAction=ENTER"
    );
    // setResData(res);
    console.log(res);
    
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1>Name of Resturant</h1>
      <li>Biryani</li>
      <li>Pizza</li>
      <li>Burger</li>
    </>
  );
}
