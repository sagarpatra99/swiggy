import { Link } from "react-router-dom";

export default function Cart () {
    return <div className="px-[5vw] py-[5vh] flex items-center justify-center flex-col gap-5 h-screen">
        <h2 className="font-semibold text-2xl">Your cart is empty</h2>
        <p>You can go to home page to view more restaurants</p>
        <Link to="/" className="uppercase bg-[#FF5200] text-white py-2 px-3 font-semibold">See resturants near you</Link>
    </div>
}