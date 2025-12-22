export default function CardShimmer(n) {
  return (
    <>
      <div key={n} className="h-[305px] w-[273px] rounded-2xl animate-pulse">
        <div className="h-[60%] w-full bg-gray-300 rounded-2xl"></div>

        <div className="p-3 space-y-3">
          <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
          <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
          <div className="h-3 w-1/2 bg-gray-300 rounded"></div>
        </div>
      </div>
    </>
  );
}
