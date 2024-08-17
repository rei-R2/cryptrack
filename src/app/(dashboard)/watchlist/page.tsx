import { Button } from "@/components/ui/button";
import BreadcrumbCustome from "@/custome_components/fragments/breadcrumb";

export default function Watchlist() {
  return (
    <div className="mt-32 h-fit bg-dark">
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

        <div className="flex items-center gap-x-4">
          <div className="flex flex-col items-end">
            <p className="text-base font-semibold text-white-custome">
              $123.23
            </p>
            <p className="text-sm font-semibold text-green-custome">0.35%</p>
          </div>
          <Button className="relative h-14 w-14 rounded-none bg-light-gray-1 hover:bg-light-gray-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-trash text-light-gray-2"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
            </svg>
            <div className="absolute bottom-0 right-full h-[70px] w-0.5 bg-light-gray-1" />
            <div className="absolute bottom-full right-0 h-0.5 w-32 bg-light-gray-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
