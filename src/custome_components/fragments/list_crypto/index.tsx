import clsx from "clsx";
import ListCryptoSkeleton from "../skeleton/list_crypto";
import { DataCrypto } from "@/typs";
import Link from "next/link";

export default function ListCrypto({ crypto }: { crypto: DataCrypto[] }) {
  return (
    <>
      {crypto.length === 0 ? (
        <ListCryptoSkeleton />
      ) : (
        <div className="relative h-fit w-full pb-9">
          {crypto.map((data) => (
            <Link href={`/detail/${data.id}`} key={data.id} scroll={true}>
              <div className="mb-4 flex w-full justify-between">
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
                  <PercentChange
                    percent={Number(
                      data.quote.USD.percent_change_1h.toFixed(2),
                    )}
                  />
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

  return <p className={stylePercentChange}>{percent}%</p>;
}
