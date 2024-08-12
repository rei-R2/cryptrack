import BreadcrumbCustome from "@/custome_components/fragments/breadcrumb";

export default function Watchlist() {
  return (
    <div className="mt-32 min-h-screen bg-dark">
      <BreadcrumbCustome />
      <div className="mb-4 flex w-full justify-between px-7">
        <div className="flex items-center gap-x-3">
          {/* <div className="relative h-8 w-8">
            <Image
              src="/coin/coin-1.png"
              alt="coin 1"
              fill={true}
              sizes="100%"
              className="object-cover"
            />
          </div> */}
          <div>
            <p className="text-base font-semibold text-white-custome">
              Bitcoin
            </p>
            <p className="text-sm text-light-gray-2">BTC</p>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <p className="text-base font-semibold text-white-custome">$123.23</p>
          <p className="text-sm font-semibold text-green-custome">0.35%</p>
        </div>
      </div>
    </div>
  );
}
