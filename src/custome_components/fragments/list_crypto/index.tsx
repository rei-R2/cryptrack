import clsx from "clsx";
import { DataCrypto } from "@/typs";
import Link from "next/link";
import { formatCurrency } from "@/utils/formatData";

export default function ListCrypto({
  crypto,
}: {
  crypto: DataCrypto[] | undefined;
}) {
  return (
    <>
      {!crypto ? (
        <div className="relative h-fit w-full pb-9">
          <p className="text-white-custome">Crypto not found</p>
        </div>
      ) : (
        <div className="relative h-fit w-full pb-9">
          {crypto!.map((data) => (
            <Link href={`/detail/${data.id}`} key={data.id} scroll={true}>
              <div className="mb-5 flex w-full justify-between">
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
