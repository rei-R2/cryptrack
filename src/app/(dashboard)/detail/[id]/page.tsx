import ChartDetailCrypto from "@/custome_components/fragments/chart/chart_detail_crypto";
import { DataCrypto, InfoCrypto } from "@/typs";
import { getCrypto, getInfoCrypto } from "@/utils/crypto";
import Image from "next/image";
import Link from "next/link";
import { formatCurrency, formatNumber, formatDate } from "@/utils/formatData";

export default async function DetailCrypto({
  params,
}: {
  params: { id: string };
}) {
  const crypto: DataCrypto | undefined = await getCrypto(params.id);
  const infoCrypto: InfoCrypto | undefined = await getInfoCrypto(params.id);

  return (
    <>
      {crypto && infoCrypto ? (
        <div className="mt-24 min-h-screen bg-dark px-7 pb-10">
          <div className="mb-4 flex w-full items-center justify-between">
            <div className="flex">
              <div className="relative mr-3 h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={infoCrypto.logo}
                  alt={infoCrypto.name}
                  fill={true}
                  sizes="100%"
                />
              </div>
              <div>
                <p className="text-base text-white-custome">
                  {infoCrypto.name}
                </p>
                <p className="text-sm text-light-gray-2">{infoCrypto.symbol}</p>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-eye text-light-gray-2"
              viewBox="0 0 16 16"
            >
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
            </svg>
          </div>

          <p className="text-xs text-light-gray-2">price</p>
          <p className="text-2xl font-semibold text-white-custome">
            {formatCurrency(crypto.quote.USD.price, "USD")}
          </p>

          <ChartDetailCrypto dataPriceChange={crypto.quote.USD} />

          <div className="mt-10 grid grid-cols-2 gap-2">
            <div className="">
              <p className="text-xs text-light-gray-2">market cap</p>
              <p className="text-sm text-white-custome">
                {formatCurrency(crypto.quote.USD.market_cap, "USD")}
              </p>
            </div>
            <div className="">
              <p className="text-xs text-light-gray-2">circulating supply</p>
              <p className="text-sm text-white-custome">
                {formatNumber(crypto.circulating_supply)} {crypto.symbol}
              </p>
            </div>
            <div className="">
              <p className="text-xs text-light-gray-2">volume 24h</p>
              <p className="text-sm text-white-custome">
                {formatCurrency(crypto.quote.USD.volume_24h, "USD")}
              </p>
            </div>
            <div className="">
              <p className="text-xs text-light-gray-2">total supply</p>
              <p className="text-sm text-white-custome">
                {formatNumber(crypto.total_supply)} {crypto.symbol}
              </p>
            </div>
            <div className="">
              <p className="text-xs text-light-gray-2">
                fully diluted market cap
              </p>
              <p className="text-sm text-white-custome">
                {formatCurrency(
                  crypto.quote.USD.fully_diluted_market_cap,
                  "USD",
                )}
              </p>
            </div>
            <div className="">
              <p className="text-xs text-light-gray-2">max supply</p>
              <p className="text-sm text-white-custome">
                {crypto.max_supply ? formatNumber(crypto.max_supply) : "--"}{" "}
                {crypto.max_supply && crypto.symbol}
              </p>
            </div>
            <div className="">
              <p className="text-xs text-light-gray-2">date launched</p>
              <p className="text-sm text-white-custome">
                {infoCrypto.date_launched
                  ? formatDate(infoCrypto.date_launched)
                  : "--"}
              </p>
            </div>
          </div>

          <div className="mt-3">
            <div className="mb-3">
              <p className="text-xs text-light-gray-2">description</p>
              <p className="text-sm text-white-custome">
                {infoCrypto.description}
              </p>
            </div>
            <div className="">
              <p className="text-xs text-light-gray-2">official links</p>
              {infoCrypto.urls.website.length > 0
                ? infoCrypto.urls.website.map((link: string, i: number) => (
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
        <div className="">
          <p className="text-center text-white-custome">Something was wrong</p>
        </div>
      )}
    </>
  );
}
