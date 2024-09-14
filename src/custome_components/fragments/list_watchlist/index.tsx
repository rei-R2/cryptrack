"use client";

import { Button } from "@/components/ui/button";
import { removeWatchlist } from "@/utils/users";
import { DataCrypto } from "@/typs";
import { formatCurrency } from "@/utils/formatData";
import clsx from "clsx";
import Link from "next/link";
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
    <div className="flex flex-col gap-y-2 md:mt-5 md:h-[90vh] md:overflow-y-auto lg:h-[85vh] lg:w-[80%]">
      {!watchlist ? (
        <p className="text-center text-lg font-semibold text-light-gray-2">
          Empty Watchlist
        </p>
      ) : (
        <div className="relative h-fit w-full px-7 pb-9 lg:h-[75%] lg:overflow-y-auto">
          <div className="sticky top-0 z-10 mb-2 hidden w-full justify-between bg-dark py-2 pr-16 lg:flex">
            <p className="w-[100px] text-sm text-light-gray-2 lg:w-[12vw]">
              name
            </p>
            <p className="text-end text-sm text-light-gray-2 lg:w-[8vw]">
              price
            </p>
            <p className="text-center text-sm text-light-gray-2 lg:w-[5vw]">
              1h %
            </p>
            <p className="text-center text-sm text-light-gray-2 lg:w-[5vw]">
              24h %
            </p>
            <p className="text-right text-sm text-light-gray-2 lg:w-40">
              market cap
            </p>
          </div>
          {watchlist!.map((data) => (
            <div key={data.id} className="flex w-full justify-between gap-x-4">
              <Link
                href={`/detail/${data.id}`}
                scroll={true}
                className="mt-3 w-full"
              >
                <div className="mb-5 flex w-full justify-between">
                  <div className="flex flex-col gap-x-3 lg:w-[12vw] lg:flex-row lg:items-center">
                    <p className="text-base font-semibold text-white-custome">
                      {data.name}
                    </p>
                    <p className="text-sm text-light-gray-2 lg:text-xs">
                      {data.symbol}
                    </p>
                  </div>

                  <div className="flex flex-col items-end lg:w-[8vw]">
                    <p className="text-base font-semibold text-white-custome lg:text-end">
                      {formatCurrency(data.quote.USD.price, "USD")}
                    </p>
                    <div className="block lg:hidden">
                      <PercentChange
                        percent={Number(
                          data.quote.USD.percent_change_1h.toFixed(2),
                        )}
                      />
                    </div>
                  </div>

                  <div className="hidden w-[51.1%] justify-between lg:flex">
                    <div className="flex justify-center lg:w-[5vw]">
                      <PercentChange
                        percent={Number(
                          data.quote.USD.percent_change_1h.toFixed(2),
                        )}
                      />
                    </div>
                    <div className="flex justify-center lg:w-[5vw]">
                      <PercentChange
                        percent={Number(
                          data.quote.USD.percent_change_24h.toFixed(2),
                        )}
                      />
                    </div>
                    <p className="w-40 text-end text-white-custome">
                      {formatCurrency(data.quote.USD.market_cap, "USD")}
                    </p>
                  </div>
                </div>
              </Link>
              <Button
                onClick={() => handleRemoveWatchlist(data.id)}
                className="relative h-14 w-14 rounded-none bg-light-gray-1 hover:bg-light-gray-1 lg:h-12 lg:w-12"
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
                <div className="absolute bottom-0 right-full h-[70px] w-0.5 bg-light-gray-1 lg:h-16" />
                <div className="absolute bottom-full right-0 h-0.5 w-32 bg-light-gray-1" />
              </Button>
            </div>
          ))}
        </div>
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
