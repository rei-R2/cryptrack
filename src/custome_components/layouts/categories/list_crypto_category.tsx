import ListCrypto from "@/custome_components/fragments/list_crypto";
import { DataCrypto } from "@/typs";

let crypto: DataCrypto[];
export default async function ListCryptoCategory({
  idCategory,
}: {
  idCategory: string;
}) {
  const datasCrypto = await fetch(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/category?id=${idCategory}`,
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": process.env.API_KEY_COIN_MARKET_CAP || "",
      },
    },
  ).then((data) => data.json());

  if (datasCrypto.status.error_code === 0) {
    crypto = datasCrypto.data.coins;
  }

  return (
    <div className="px-7">
      <p className="mb-4 text-xl font-semibold text-white-custome">
        {datasCrypto.data.name}
      </p>

      <div className="mb-4 grid grid-cols-2 gap-3 rounded-md bg-light-gray-1 px-3 py-2">
        <div>
          <p className="text-white-custome">market cap</p>
          <p className="text-sm text-light-gray-2">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(datasCrypto.data.market_cap)}
          </p>
        </div>
        <div>
          <p className="text-white-custome">volume</p>
          <p className="text-sm text-light-gray-2">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(datasCrypto.data.volume)}
          </p>
        </div>
        <div>
          <p className="text-white-custome">avg price change</p>
          <p className="text-sm text-light-gray-2">
            {datasCrypto.data.avg_price_change.toFixed(2)}%
          </p>
        </div>
        <div>
          <p className="text-white-custome">volume change</p>
          <p className="text-sm text-light-gray-2">
            {datasCrypto.data.volume_change.toFixed(2)}%
          </p>
        </div>
      </div>
      <ListCrypto crypto={crypto} />
    </div>
  );
}
