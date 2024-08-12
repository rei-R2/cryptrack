import BreadcrumbCustome from "@/custome_components/fragments/breadcrumb";
import ListCrypto from "@/custome_components/layouts/home/list_crypto_home";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-32 min-h-screen bg-dark">
      <BreadcrumbCustome />
      <p className="px-7 text-xl font-semibold text-white-custome">Watchlist</p>

      <div className="card-watchlist mb-4 ms-7 flex gap-x-5 overflow-x-auto py-4">
        <div className="flex h-40 w-[268px] shrink-0 flex-col justify-between rounded-md bg-light-gray-1 p-4">
          <div className="flex items-center gap-x-3">
            <div className="relative h-10 w-10">
              <Image
                src="/coin/coin-1.png"
                alt="bitcoin"
                fill={true}
                sizes="100%"
                className="object-cover"
              />
            </div>
            <p className="font-semibold text-white-custome">Bitcoin</p>
          </div>
          <div className="flex items-end justify-between">
            <div className="">
              <p className="text-light-gray-2">today</p>
              <p className="text-green-custome">0,83%</p>
            </div>
            <p className="text-2xl font-semibold text-white-custome">
              $ 64.752,80
            </p>
          </div>
        </div>
        <div className="flex h-40 w-[268px] shrink-0 flex-col justify-between rounded-md bg-light-gray-1 p-4">
          <div className="flex items-center gap-x-3">
            <div className="relative h-10 w-10">
              <Image
                src="/coin/coin-1.png"
                alt="bitcoin"
                fill={true}
                sizes="100%"
                className="object-cover"
              />
            </div>
            <p className="font-semibold text-white-custome">Bitcoin</p>
          </div>
          <div className="flex items-end justify-between">
            <div className="">
              <p className="text-light-gray-2">today</p>
              <p className="text-green-custome">0,83%</p>
            </div>
            <p className="text-2xl font-semibold text-white-custome">
              $ 64.752,80
            </p>
          </div>
        </div>
      </div>

      <ListCrypto />
    </div>
  );
}
