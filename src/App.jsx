import Header from "./components/reuseable/header";
import Home from "./components/pages/home";
import { Route, Routes } from "react-router-dom";
import Search from "./components/pages/searchbar";
import Cart from "./components/pages/cart";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
