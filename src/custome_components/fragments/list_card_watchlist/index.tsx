import Image from "next/image";
import { DataCrypto, InfoCrypto, Sessionn } from "@/typs";
import { getUser } from "@/utils/users";
import { getCrypto, getInfoCrypto } from "@/utils/crypto";
import { formatCurrency } from "@/utils/formatData";
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
    <div className="card-watchlist mb-4 flex gap-x-5 overflow-x-auto px-7 py-4">
      {!listCryptoById ? (
        <p className="text-center text-lg font-semibold text-light-gray-2">
          Empty Watchlist
        </p>
      ) : (
        listCryptoById.map((data, i) => (
          <div
            key={data.id}
            className="flex h-40 w-[268px] shrink-0 flex-col justify-between rounded-md bg-light-gray-1 p-4"
          >
            <div className="flex items-center gap-x-3">
              {listInfoCryptoById && listInfoCryptoById[i] ? (
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={listInfoCryptoById[i].logo}
                    alt={data.name}
                    fill={true}
                    sizes="100%"
                    className="object-cover"
                  />
                </div>
              ) : (
                <Skeleton className="h-10 w-10 rounded-full" />
              )}
              <p className="font-semibold text-white-custome">{data.name}</p>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="mb-1 text-light-gray-2">today</p>
                <PercentChange
                  percent={Number(data.quote.USD.percent_change_24h.toFixed(2))}
                />
              </div>
              <p className="text-2xl font-semibold text-white-custome">
                {formatCurrency(data.quote.USD.price, "USD")}
              </p>
            </div>
          </div>
        ))
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
