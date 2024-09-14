import BreadcrumbCustome from "@/custome_components/fragments/breadcrumb";
import { DataDetailExchange } from "@/typs";
import { getInfoExchange } from "@/utils/crypto";
import Image from "next/image";
import Link from "next/link";
import { formatCurrency, formatNumber, formatDate } from "@/utils/formatData";

export default async function DetailExchange({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const detailExchange: DataDetailExchange = await getInfoExchange(
    searchParams.id,
  );

  return (
    <div className="relative mt-32 h-full bg-dark pb-10 md:ml-56 md:mt-0 md:h-full md:overflow-y-auto">
      <div className="top-0 z-20 w-full bg-dark md:fixed">
        <BreadcrumbCustome />
      </div>
      <div className="fixed top-14 z-30 hidden h-1 w-full bg-light-gray-1 md:block" />

      <div className="mx-7 bg-light-gray-1 pb-4 md:mt-24">
        <div className="relative mb-4 flex h-[73px] items-center justify-between">
          <h1 className="ps-5 text-2xl font-semibold text-white-custome">
            {detailExchange.name}
          </h1>
          <div className="relative flex h-[73px] w-[73px] items-center justify-center bg-light-green">
            <div className="relative h-11 w-11 overflow-hidden rounded-full">
              <Image
                src={detailExchange.logo}
                alt={detailExchange.name}
                fill={true}
                sizes="100%"
              />
            </div>
            <div className="absolute right-full top-0 h-24 w-0.5 bg-dark" />
            <div className="absolute right-0 top-full h-0.5 w-32 bg-dark" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="mb-4 px-5 lg:w-1/3">
            <div className="mb-3 grid grid-cols-2 gap-y-3 md:h-fit">
              <div>
                <p className="mb-1 text-xs text-light-gray-2 md:mb-0 md:text-sm">
                  weekly visits
                </p>
                <p className="text-nowrap text-sm font-medium text-white-custome md:text-base">
                  {formatNumber(detailExchange.weekly_visits)}
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs text-light-gray-2 md:mb-0 md:text-sm">
                  maker fee
                </p>
                <p className="text-nowrap text-sm font-medium text-white-custome md:text-base">
                  {formatCurrency(detailExchange.maker_fee, "USD")}
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs text-light-gray-2 md:mb-0 md:text-sm">
                  date launched
                </p>
                <p className="text-nowrap text-sm font-medium text-white-custome md:text-base">
                  {formatDate(detailExchange.date_launched)}
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs text-light-gray-2 md:mb-0 md:text-sm">
                  taker fee
                </p>
                <p className="text-nowrap text-sm font-medium text-white-custome md:text-base">
                  {formatCurrency(detailExchange.taker_fee, "USD")}
                </p>
              </div>
            </div>

            <div className="mb-3">
              <p className="mb-1 text-xs text-light-gray-2 md:mb-0 md:text-sm">
                link
              </p>
              {detailExchange.urls.website.map((link, i) => (
                <Link
                  key={i}
                  href={link}
                  className="text-nowrap text-base text-white-custome"
                >
                  {link}
                </Link>
              ))}
            </div>
            <div>
              <p className="mb-1 text-xs text-light-gray-2 md:mb-2 md:text-sm">
                fiat supported
              </p>
              <div className="flex flex-wrap gap-1">
                {detailExchange.fiats.length > 0 ? (
                  detailExchange.fiats.map((data, i) => (
                    <span
                      key={i}
                      className="text-nowrap rounded-full bg-light-gray-2 px-2 py-0.5 text-xs font-medium text-dark"
                    >
                      {data}
                    </span>
                  ))
                ) : (
                  <span className="text-base text-white-custome">--</span>
                )}
              </div>
            </div>
          </div>

          <div className="relative px-5 lg:w-2/3">
            <p className="mb-1 text-xs text-light-gray-2 md:mb-0 md:text-sm">
              description
            </p>
            <p className="overflow-hidden text-ellipsis text-sm text-white-custome md:text-base">
              {detailExchange.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
