import BreadcrumbCustome from "@/custome_components/fragments/breadcrumb";
import ListCrypto from "@/custome_components/fragments/list_crypto";
import { DataCategory } from "@/typs";
import { getCategory } from "@/utils/crypto";
import { formatCurrency, formatPercent } from "@/utils/formatData";

export default async function Category({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const category: DataCategory = await getCategory(searchParams.id);
  return (
    <div className="relative mt-32 h-full bg-dark md:ml-56 md:mt-0 md:h-[93.5%]">
      <BreadcrumbCustome />
      <div className="absolute top-14 hidden h-1 w-full bg-light-gray-1 md:block" />

      <div className="px-7 md:mt-5">
        <p className="mb-4 text-xl font-semibold text-white-custome">
          {category.name}
        </p>

        <div className="flex flex-col lg:flex-row lg:gap-x-10">
          <div className="mb-4 grid grid-cols-2 gap-2 bg-light-gray-1 p-4 lg:h-fit lg:w-[30rem] lg:gap-3">
            <div>
              <p className="text-xs text-light-gray-2 md:text-sm">market cap</p>
              <p className="text-sm text-white-custome md:text-base">
                {formatCurrency(category.market_cap, "USD")}
              </p>
            </div>
            <div>
              <p className="text-xs text-light-gray-2 md:text-sm">volume</p>
              <p className="text-sm text-white-custome md:text-base">
                {formatCurrency(category.volume, "USD")}
              </p>
            </div>
            <div>
              <p className="text-xs text-light-gray-2 md:text-sm">
                avg price change
              </p>
              <p className="text-sm text-white-custome md:text-base">
                {formatPercent(category.avg_price_change)}
              </p>
            </div>
            <div>
              <p className="text-xs text-light-gray-2 md:text-sm">
                volume change
              </p>
              <p className="text-sm text-white-custome md:text-base">
                {formatPercent(category.volume_change)}
              </p>
            </div>
          </div>

          <div className="relative w-full md:h-[75vh] md:overflow-y-auto lg:h-[102vh]">
            <ListCrypto crypto={category.coins} />
            <div className="fixed bottom-0 h-12 w-full bg-gradient-to-b from-dark/0 to-dark" />
          </div>
        </div>
      </div>
    </div>
  );
}
