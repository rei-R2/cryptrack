"use client";

import { Button } from "@/components/ui/button";
import { removeWatchlist } from "@/utils/users";
import { DataCrypto } from "@/typs";
import { formatCurrency } from "@/utils/formatData";
import clsx from "clsx";
import Link from "next/link";
import SkeletonWatchlist from "@/custome_components/layouts/skeleton/skeleton_watchlist";
import { toast } from "@/components/ui/use-toast";

export default function ListWatchlist({
  userId,
  watchlist,
}: {
  userId: string;
  watchlist: DataCrypto[];
}) {
  const handleRemoveWatchlist = async (cryptoId: number) => {
    const result = await removeWatchlist(userId, cryptoId);

    if (result.status === 200) {
      toast({
        title: "Success Delete",
        description: result.message,
        style: {
          backgroundColor: "#272727",
          color: "#F9F9F9",
          borderColor: "#272727",
        },
      });
    } else {
      toast({
        title: "Faild Delete",
        description: result.message,
      });
    }
  };

  return (
    <div className="flex flex-col gap-y-2">
      {!watchlist ? (
        <p className="text-center text-lg font-semibold text-light-gray-2">
          Empty Watchlist
        </p>
      ) : watchlist.length > 0 ? (
        watchlist.map((data) => (
          <div key={data.id} className="mb-4 flex w-full justify-between px-7">
            <Link
              href={`/detail/${data.id}`}
              scroll={true}
              className="flex w-full justify-between"
            >
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

              <div className="mr-4 flex items-center gap-x-4">
                <div className="flex flex-col items-end">
                  <p className="text-base font-semibold text-white-custome">
                    {formatCurrency(data.quote.USD.price, "USD")}
                  </p>
                  <PercentChange
                    percent={Number(
                      data.quote.USD.percent_change_1h.toFixed(2),
                    )}
                  />
                </div>
              </div>
            </Link>

            <Button
              onClick={() => handleRemoveWatchlist(data.id)}
              className="relative h-14 w-14 rounded-none bg-light-gray-1 hover:bg-light-gray-1"
            >
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
        ))
      ) : (
        <SkeletonWatchlist />
      )}
    </div>
  );
}

function PercentChange({ percent }: { percent: number }) {
  const stylePercentChange = clsx("text-sm font-semibold", {
    "text-green-custome": percent > 0,
    "text-red-500": percent < 0,
    "text-light-gray-2": percent === 0,
  });

  const icon =
    percent > 0 ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        className="bi bi-arrow-up-short rotate-45 text-green-custome"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
        />
      </svg>
    ) : percent < 0 ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        className="bi bi-arrow-down-short rotate-45 text-red-500"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
        />
      </svg>
    ) : (
      <></>
    );

  return (
    <div className="flex">
      {icon}
      <span className={stylePercentChange}>{percent}%</span>
    </div>
  );
}
