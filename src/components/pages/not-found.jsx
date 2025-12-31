import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h2>This is Not Found Page</h2>
      <Link to={"/"}>Back to Home</Link>
    </>
  );
}
