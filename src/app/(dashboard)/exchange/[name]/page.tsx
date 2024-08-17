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
    <div className="mt-32 w-full overflow-hidden pb-10">
      <BreadcrumbCustome />

      <div className="mx-7 rounded-md bg-light-gray-1 pb-4">
        <div className="relative mb-4 flex h-[73px] items-center justify-between">
          <h1 className="ps-5 text-2xl font-semibold text-white-custome">
            {detailExchange.name}
          </h1>
          <div className="relative flex h-[73px] w-[73px] items-center justify-center rounded-tr-md bg-light-green">
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

        <div className="mb-3 grid grid-cols-2 gap-y-3 px-5">
          <div>
            <p className="text-xs text-light-gray-2">weekly visits</p>
            <p className="text-nowrap text-sm font-medium text-white-custome">
              {formatNumber(detailExchange.weekly_visits)}
            </p>
          </div>
          <div>
            <p className="text-xs text-light-gray-2">maker fee</p>
            <p className="text-nowrap text-sm font-medium text-white-custome">
              {formatCurrency(detailExchange.maker_fee, "USD")}
            </p>
          </div>
          <div>
            <p className="text-xs text-light-gray-2">date launched</p>
            <p className="text-nowrap text-sm font-medium text-white-custome">
              {formatDate(detailExchange.date_launched)}
            </p>
          </div>
          <div>
            <p className="text-xs text-light-gray-2">taker fee</p>
            <p className="text-nowrap text-sm font-medium text-white-custome">
              {formatCurrency(detailExchange.taker_fee, "USD")}
            </p>
          </div>
        </div>

        <div className="px-5">
          <div className="relative mb-3">
            <p className="text-xs text-light-gray-2">description</p>
            <p className="overflow-hidden text-ellipsis text-sm text-white-custome">
              {detailExchange.description}
            </p>
          </div>
          <div className="mb-3">
            <p className="text-xs text-light-gray-2">link</p>
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
            <p className="mb-1 text-xs text-light-gray-2">fiat supported</p>
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
      </div>
    </div>
  );
}
