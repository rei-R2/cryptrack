import Image from "next/image";
import { DataCrypto, InfoCrypto, Sessionn } from "@/typs";
import { getUser } from "@/utils/users";
import { getCrypto, getInfoCrypto } from "@/utils/crypto";
import { formatCurrency, formatNumber } from "@/utils/formatData";
import clsx from "clsx";
import { Skeleton } from "@/components/ui/skeleton";
import { getServerSession } from "next-auth";
import { GET } from "@/app/api/auth/[...nextauth]/route";

export default async function ListCardWatchlist() {
  const session: Sessionn | null = await getServerSession(GET);
  const user =
    session &&
    (await getUser({ by: "email", value: session?.user.email })).data;
  const idCrypto = user && user.watchlist.map((data) => data.crypto_id);
  const listCryptoById: DataCrypto[] | undefined = await getCrypto({
    by: "id",
    data: idCrypto as string[],
  });
  const listInfoCryptoById: InfoCrypto[] | undefined = await getInfoCrypto(
    idCrypto as string[],
  );

  return (
    <div className="card-watchlist relative mb-4 flex gap-x-5 overflow-x-auto px-7 py-4 md:h-[86%] md:gap-y-5 md:overflow-y-auto lg:flex-col">
      {!listCryptoById ? (
        <p className="text-center text-lg font-semibold text-light-gray-2">
          Empty Watchlist
        </p>
      ) : (
        listCryptoById.map((data, i) => (
          <div
            key={data.id}
            className="flex h-fit w-52 shrink-0 flex-col justify-between bg-gradient-to-b from-light-gray-1 to-dark p-4"
          >
            <div className="mb-6 flex items-center gap-x-4 md:mb-5">
              {listInfoCryptoById && listInfoCryptoById[i] ? (
                <div className="relative h-10 w-10 overflow-hidden rounded-full md:h-9 md:w-9">
                  <Image
                    src={listInfoCryptoById[i].logo}
                    alt={data.name}
                    fill={true}
                    sizes="100%"
                    className="object-cove"
                  />
                </div>
              ) : (
                <Skeleton className="h-10 w-10 rounded-full" />
              )}
              <div>
                <p className="font-semibold text-white-custome">{data.name}</p>
                <p className="text-xs text-light-gray-2">{data.symbol}</p>
              </div>
            </div>

            <div className="mb-6 md:mb-5">
              <p className="mb-1 text-2xl font-medium text-white-custome">
                {formatCurrency(data.quote.USD.price, "USD")}
              </p>
              <p className="text-xs text-light-gray-2">
                {formatNumber(data.circulating_supply)} {data.symbol}
              </p>
            </div>

            <div className="flex items-center">
              <PercentChange
                percent={Number(data.quote.USD.percent_change_24h.toFixed(2))}
              />{" "}
              <span className="ml-1 text-xs text-light-gray-2">/today</span>
            </div>
          </div>
        ))
      )}
      <div className="fixed bottom-0 left-56 hidden h-20 w-[16.5rem] bg-gradient-to-b from-dark/0 to-dark md:block" />
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
