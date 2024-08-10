"use client";

import { Input } from "@/components/ui/input";
import ListCryptoSkeleton from "@/custome_components/skeleton/list_crypto";
import { DataCrypto } from "@/typs";
import { getCrypto } from "@/utils/crypto";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ListCrypto() {
  const [page, setPage] = useState<number>(1);
  const [crypto, setCrypto] = useState<DataCrypto[]>([]);

  const setListCrypto = async (page: number) => {
    const result: DataCrypto[] = await getCrypto(page);
    result &&
      setCrypto((state) => (page === 1 ? result : [...state, ...result]));
  };

  useEffect(() => {
    setListCrypto(page);
  }, [page]);

  return (
    <div className="px-7">
      <Input
        placeholder="Search coin"
        className="mb-3 rounded-md border-none bg-light-gray-1 text-white-custome"
      />
      <p className="mb-5 text-xl font-semibold text-white-custome">
        List Crypto
      </p>

      {crypto.length === 0 ? (
        <ListCryptoSkeleton />
      ) : (
        <div className="relative h-fit w-full">
          {crypto.map((data) => (
            <div key={data.id} className="mb-4 flex w-full justify-between">
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
                    {data.name}
                  </p>
                  <p className="text-sm text-light-gray-2">{data.symbol}</p>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <p className="text-base font-semibold text-white-custome">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(data.quote.USD.price)}
                </p>
                <p className="text-sm font-semibold text-green-custome">
                  {data.quote.USD.percent_change_1h.toFixed(2)}%
                </p>
              </div>
            </div>
          ))}
          <button
            onClick={() => setPage(page + 1)}
            className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 bg-gradient-to-t from-dark py-4 text-sm font-semibold text-light-green"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
}
