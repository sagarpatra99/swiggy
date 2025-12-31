import Header from "./components/reuseable/header";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
