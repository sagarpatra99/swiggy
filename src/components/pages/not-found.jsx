import { Link, useRouteError } from "react-router-dom";

export default function NotFound() {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="h-screen bg-[#101828] px-[4vw] flex items-center justify-center flex-col">
      <p className="text-[#7C86FF] text-xl mb-4">
        {err.status}
        <span className="text-red-500 ml-4">{err.statusText}</span>
      </p>
      <h2 className="text-white text-4xl font-bold">{err.data}</h2>
      <Link
        to={"/"}
        className="bg-cyan-700 text-white py-2 px-4 rounded-lg mt-6"
      >
        Back to Home
      </Link>
    </div>
  );
}
