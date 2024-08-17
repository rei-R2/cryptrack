import NextListCrypto from "@/custome_components/elements/next_list_crypto";
import SearchCrypto from "@/custome_components/elements/search_crypto";
import BreadcrumbCustome from "@/custome_components/fragments/breadcrumb";
import ListCrypto from "@/custome_components/fragments/list_crypto";
import { getCrypto, getListCrypto } from "@/utils/crypto";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    page: string;
    search: string;
  };
}) {
  if (!searchParams.page) redirect("/home?page=1");

  const crypto = searchParams.search
    ? await getCrypto(searchParams.search)
    : await getListCrypto(Number(searchParams.page));

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

      <div className="relative overflow-hidden px-7">
        <p className="mb-5 text-xl font-semibold text-white-custome">
          List Crypto
        </p>
        <SearchCrypto />
        <ListCrypto crypto={crypto} />
        {searchParams.search ? <></> : crypto && <NextListCrypto />}
      </div>
    </div>
  );
}
