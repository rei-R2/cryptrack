import ChartDetailCrypto from "@/custome_components/fragments/chart/chart_detail_crypto";
import { DataCrypto, InfoCrypto } from "@/typs";
import { getCrypto, getInfoCrypto } from "@/utils/crypto";
import Image from "next/image";
import Link from "next/link";
import { formatCurrency, formatNumber, formatDate } from "@/utils/formatData";
import AddWatchlist from "@/custome_components/elements/add_watchlist";
import BreadcrumbCustome from "@/custome_components/fragments/breadcrumb";

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
    <div className="relative mt-24 h-full bg-dark md:ml-56 md:mt-0 md:h-[93.5%]">
      <div className="fixed top-0 z-20 w-full bg-dark">
        <div className="hidden md:block">
          <BreadcrumbCustome />
        </div>
        <div className="absolute left-0 top-14 z-10 hidden h-1 w-full bg-light-gray-1 md:block" />
      </div>

      {crypto && infoCrypto ? (
        <div className="min-h-screen bg-dark px-7 pb-10 md:mt-20 md:gap-x-14 lg:flex lg:py-5">
          <div className="w-full lg:w-1/3">
            <div className="mb-4 flex w-full items-center justify-between">
              <div className="flex">
                <div className="relative mr-3 h-10 w-10 overflow-hidden rounded-full md:h-9 md:w-9">
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

            <p className="mb-1 text-xs text-light-gray-2 md:text-sm">price</p>
            <p className="text-2xl font-semibold text-white-custome">
              {formatCurrency(crypto[0].quote.USD.price, "USD")}
            </p>

            <ChartDetailCrypto dataPriceChange={crypto[0].quote.USD} />
          </div>

          <div className="w-full md:mt-10 lg:mt-0 lg:w-2/3">
            <div className="mt-10 grid grid-cols-2 gap-x-2 gap-y-3 md:mt-0">
              <div>
                <p className="mb-1 text-xs text-light-gray-2 md:text-sm">
                  market cap
                </p>
                <p className="text-sm text-white-custome md:text-base">
                  {formatCurrency(crypto[0].quote.USD.market_cap, "USD")}
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs text-light-gray-2 md:text-sm">
                  circulating supply
                </p>
                <p className="text-sm text-white-custome md:text-base">
                  {formatNumber(crypto[0].circulating_supply)}{" "}
                  {crypto[0].symbol}
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs text-light-gray-2 md:text-sm">
                  volume 24h
                </p>
                <p className="text-sm text-white-custome md:text-base">
                  {formatCurrency(crypto[0].quote.USD.volume_24h, "USD")}
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs text-light-gray-2 md:text-sm">
                  total supply
                </p>
                <p className="text-sm text-white-custome md:text-base">
                  {formatNumber(crypto[0].total_supply)} {crypto[0].symbol}
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs text-light-gray-2 md:text-sm">
                  fully diluted market cap
                </p>
                <p className="text-sm text-white-custome md:text-base">
                  {formatCurrency(
                    crypto[0].quote.USD.fully_diluted_market_cap,
                    "USD",
                  )}
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs text-light-gray-2 md:text-sm">
                  max supply
                </p>
                <p className="text-sm text-white-custome md:text-base">
                  {crypto[0].max_supply
                    ? formatNumber(crypto[0].max_supply)
                    : "--"}{" "}
                  {crypto[0].max_supply && crypto[0].symbol}
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs text-light-gray-2 md:text-sm">
                  date launched
                </p>
                <p className="text-sm text-white-custome md:text-base">
                  {infoCrypto[0].date_launched
                    ? formatDate(infoCrypto[0].date_launched)
                    : "--"}
                </p>
              </div>
            </div>

            <div className="mt-3">
              <div className="mb-3">
                <p className="mb-1 text-xs text-light-gray-2 md:text-sm">
                  description
                </p>
                <p className="text-sm text-white-custome md:text-base">
                  {infoCrypto[0].description}
                </p>
              </div>
              <div className="">
                <p className="mb-1 text-xs text-light-gray-2 md:text-sm">
                  official links
                </p>
                {infoCrypto[0].urls.website.length > 0
                  ? infoCrypto[0].urls.website.map(
                      (link: string, i: number) => (
                        <Link
                          key={i}
                          href={link}
                          className="block text-sm text-white-custome md:text-base"
                        >
                          {link}
                        </Link>
                      ),
                    )
                  : "--"}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-center text-white-custome">Something was wrong</p>
        </div>
      )}
    </div>
  );
}
