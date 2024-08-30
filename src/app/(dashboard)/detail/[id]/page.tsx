import ChartDetailCrypto from "@/custome_components/fragments/chart/chart_detail_crypto";
import { DataCrypto, InfoCrypto } from "@/typs";
import { getCrypto, getInfoCrypto } from "@/utils/crypto";
import Image from "next/image";
import Link from "next/link";
import { formatCurrency, formatNumber, formatDate } from "@/utils/formatData";
import AddWatchlist from "@/custome_components/elements/add_watchlist";

export default async function DetailCrypto({
  params,
}: {
  params: { id: string };
}) {
  const crypto: DataCrypto[] | undefined = await getCrypto({
    by: "id",
    data: [params.id],
  });
  const infoCrypto: InfoCrypto[] | undefined = await getInfoCrypto([params.id]);

  return (
    <>
      {crypto && infoCrypto ? (
        <div className="mt-24 min-h-screen bg-dark px-7 pb-10">
          <div className="mb-4 flex w-full items-center justify-between">
            <div className="flex">
              <div className="relative mr-3 h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={infoCrypto[0].logo}
                  alt={infoCrypto[0].name}
                  fill={true}
                  sizes="100%"
                />
              </div>
              <div>
                <p className="text-base text-white-custome">
                  {infoCrypto[0].name}
                </p>
                <p className="text-sm text-light-gray-2">
                  {infoCrypto[0].symbol}
                </p>
              </div>
            </div>
            <AddWatchlist idCrypto={crypto[0].id} />
          </div>

          <p className="text-xs text-light-gray-2">price</p>
          <p className="text-2xl font-semibold text-white-custome">
            {formatCurrency(crypto[0].quote.USD.price, "USD")}
          </p>

          <ChartDetailCrypto dataPriceChange={crypto[0].quote.USD} />

          <div className="mt-10 grid grid-cols-2 gap-2">
            <div className="">
              <p className="text-xs text-light-gray-2">market cap</p>
              <p className="text-sm text-white-custome">
                {formatCurrency(crypto[0].quote.USD.market_cap, "USD")}
              </p>
            </div>
            <div className="">
              <p className="text-xs text-light-gray-2">circulating supply</p>
              <p className="text-sm text-white-custome">
                {formatNumber(crypto[0].circulating_supply)} {crypto[0].symbol}
              </p>
            </div>
            <div className="">
              <p className="text-xs text-light-gray-2">volume 24h</p>
              <p className="text-sm text-white-custome">
                {formatCurrency(crypto[0].quote.USD.volume_24h, "USD")}
              </p>
            </div>
            <div className="">
              <p className="text-xs text-light-gray-2">total supply</p>
              <p className="text-sm text-white-custome">
                {formatNumber(crypto[0].total_supply)} {crypto[0].symbol}
              </p>
            </div>
            <div className="">
              <p className="text-xs text-light-gray-2">
                fully diluted market cap
              </p>
              <p className="text-sm text-white-custome">
                {formatCurrency(
                  crypto[0].quote.USD.fully_diluted_market_cap,
                  "USD",
                )}
              </p>
            </div>
            <div className="">
              <p className="text-xs text-light-gray-2">max supply</p>
              <p className="text-sm text-white-custome">
                {crypto[0].max_supply
                  ? formatNumber(crypto[0].max_supply)
                  : "--"}{" "}
                {crypto[0].max_supply && crypto[0].symbol}
              </p>
            </div>
            <div className="">
              <p className="text-xs text-light-gray-2">date launched</p>
              <p className="text-sm text-white-custome">
                {infoCrypto[0].date_launched
                  ? formatDate(infoCrypto[0].date_launched)
                  : "--"}
              </p>
            </div>
          </div>

          <div className="mt-3">
            <div className="mb-3">
              <p className="text-xs text-light-gray-2">description</p>
              <p className="text-sm text-white-custome">
                {infoCrypto[0].description}
              </p>
            </div>
            <div className="">
              <p className="text-xs text-light-gray-2">official links</p>
              {infoCrypto[0].urls.website.length > 0
                ? infoCrypto[0].urls.website.map((link: string, i: number) => (
                    <Link
                      key={i}
                      href={link}
                      className="block text-sm text-white-custome"
                    >
                      {link}
                    </Link>
                  ))
                : "--"}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-center text-white-custome">Something was wrong</p>
        </div>
      )}
    </>
  );
}
