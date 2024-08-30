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
    <div className="mt-32">
      <BreadcrumbCustome />

      <div className="px-7">
        <p className="mb-4 text-xl font-semibold text-white-custome">
          {category.name}
        </p>

        <div className="mb-4 grid grid-cols-2 gap-2 rounded-md bg-light-gray-1 p-4">
          <div>
            <p className="text-xs text-light-gray-2">market cap</p>
            <p className="text-sm text-white-custome">
              {formatCurrency(category.market_cap, "USD")}
            </p>
          </div>
          <div>
            <p className="text-xs text-light-gray-2">volume</p>
            <p className="text-sm text-white-custome">
              {formatCurrency(category.volume, "USD")}
            </p>
          </div>
          <div>
            <p className="text-xs text-light-gray-2">avg price change</p>
            <p className="text-sm text-white-custome">
              {formatPercent(category.avg_price_change)}
            </p>
          </div>
          <div>
            <p className="text-xs text-light-gray-2">volume change</p>
            <p className="text-sm text-white-custome">
              {formatPercent(category.volume_change)}
            </p>
          </div>
        </div>
        <ListCrypto crypto={category.coins} />
      </div>
    </div>
  );
}
