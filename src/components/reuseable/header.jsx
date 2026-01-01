import { Link } from "react-router-dom";
import logo from "../../assets/swiggy.png";
import { User, Search } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [login, setLogin] = useState("Login");
  return (
    <div className="flex items-center justify-between px-10 py-8 bg-[#F18520] text-white">
      <Link to={"/"}>
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 bg-white p-2 rounded-xl">
            <img className="h-full w-full" src={logo} alt="" />
          </div>
          <h4 className="text-3xl font-bold">Swiggy</h4>
        </div>
      </Link>
      <div className="flex items-center gap-10 font-bold">
        <Link to="/search" className="flex items-center gap-3">
          <Search />
          Search
        </Link>
        <Link to="">About</Link>
        <Link to="">Contact Us</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/grocery">Grocery</Link>
        <Link
          to=""
          className="flex items-center w-20"
          onClick={() => {
            login === "Login" ? setLogin("Logout") : setLogin("Login");
          }}
        >
          <User />
          {login}
        </Link>
      </div>
    </div>
  );
}
