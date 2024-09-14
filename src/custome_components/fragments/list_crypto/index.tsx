"use client";

import clsx from "clsx";
import { DataCrypto } from "@/typs";
import Link from "next/link";
import { formatCurrency } from "@/utils/formatData";
import { usePathname } from "next/navigation";

export default function ListCrypto({
  crypto,
}: {
  crypto: DataCrypto[] | undefined;
}) {
  const pathname = usePathname();

  const styleListCrypto = clsx(
    "relative h-fit w-full pb-8 md:pb-0 lg:pb-8 md:w-[100vw] md:overflow-y-auto lg:h-[72vh] lg:w-full",
    {
      "md:h-[74vh]": pathname.includes("categories"),
      "md:h-[55vh]": pathname.includes("/home"),
    },
  );

  return (
    <>
      {!crypto ? (
        <div className="relative h-fit w-full pb-9 md:w-[50vw]">
          <p className="text-white-custome">Crypto not found</p>
        </div>
      ) : (
        <div className={styleListCrypto}>
          <div className="sticky top-0 z-10 mb-2 hidden w-full justify-between bg-light-gray-1 p-3 md:flex md:justify-start">
            <p className="w-[100px] text-sm font-medium text-white-custome md:w-[30%]">
              name
            </p>
            <p className="px-5 text-end text-sm font-medium text-white-custome md:w-[20%]">
              price
            </p>
            <p className="text-nowrap text-center text-sm font-medium text-white-custome md:w-[10%]">
              1h %
            </p>
            <p className="text-nowrap text-center text-sm font-medium text-white-custome md:w-[10%]">
              24h %
            </p>
            <p className="text-right text-sm font-medium text-white-custome md:w-[30%]">
              market cap
            </p>
          </div>
          {crypto!.map((data) => (
            <Link href={`/detail/${data.id}`} key={data.id} scroll={true}>
              <div className="mb-5 flex w-full justify-between md:px-3">
                <div className="flex flex-col gap-x-3 md:w-[30%] md:flex-row md:items-center">
                  <p className="text-nowrap text-base font-semibold text-white-custome">
                    {data.name}
                  </p>
                  <p className="text-sm text-light-gray-2 md:text-xs">
                    {data.symbol}
                  </p>
                </div>

                <div className="flex flex-col items-end md:w-[20%] md:px-5">
                  <p className="text-base font-semibold text-white-custome">
                    {formatCurrency(data.quote.USD.price, "USD")}
                  </p>
                  <div className="block md:hidden">
                    <PercentChange
                      percent={Number(
                        data.quote.USD.percent_change_1h.toFixed(2),
                      )}
                    />
                  </div>
                </div>

                <div className="hidden w-[50%] justify-start md:flex">
                  <div className="flex justify-center md:w-[20%]">
                    <PercentChange
                      percent={Number(
                        data.quote.USD.percent_change_1h.toFixed(2),
                      )}
                    />
                  </div>
                  <div className="flex justify-center md:w-[20%]">
                    <PercentChange
                      percent={Number(
                        data.quote.USD.percent_change_24h.toFixed(2),
                      )}
                    />
                  </div>
                  <p className="w-[60%] text-end text-white-custome">
                    {formatCurrency(data.quote.USD.market_cap, "USD")}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
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
