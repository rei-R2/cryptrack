import SelectCurrencyMetrics from "@/custome_components/elements/select_currency_metrics";
import BreadcrumbCustome from "@/custome_components/fragments/breadcrumb";
import { DataMetrics } from "@/typs";
import { getMetrics } from "@/utils/crypto";
import {
  formatCurrency,
  formatDate,
  formatNumber,
  formatPercent,
} from "@/utils/formatData";

export default async function Metrics({
  searchParams,
}: {
  searchParams: { currency: string };
}) {
  const metrics: DataMetrics = searchParams.currency
    ? await getMetrics(searchParams.currency)
    : await getMetrics();

  return (
    <div className="mt-32 h-fit bg-dark pb-10">
      <BreadcrumbCustome />
      <div className="px-7">
        <p className="mb-4 text-xl font-semibold text-white-custome">Metrics</p>

        <div className="mb-6 grid grid-cols-2 gap-y-3 rounded-md bg-light-gray-1 p-3">
          <div className="">
            <p className="text-xs text-light-gray-2">active cryptocurrencies</p>
            <p className="text-nowrap text-sm text-white-custome">
              {formatNumber(metrics.active_cryptocurrencies)}
            </p>
          </div>
          <div className="">
            <p className="text-xs text-light-gray-2">eth dominance</p>
            <p className="text-nowrap text-sm text-white-custome">
              {formatPercent(metrics.eth_dominance)}
            </p>
          </div>
          <div className="">
            <p className="text-xs text-light-gray-2">total cryptocurrencies</p>
            <p className="text-nowrap text-sm text-white-custome">
              {formatNumber(metrics.total_cryptocurrencies)}
            </p>
          </div>
          <div className="">
            <p className="text-xs text-light-gray-2">btc dominance</p>
            <p className="text-nowrap text-sm text-white-custome">
              {formatPercent(metrics.btc_dominance)}
            </p>
          </div>
          <div className="">
            <p className="text-xs text-light-gray-2">active market pairs</p>
            <p className="text-nowrap text-sm text-white-custome">
              {formatNumber(metrics.active_market_pairs)}
            </p>
          </div>
          <div className="">
            <p className="text-xs text-light-gray-2">active exchanges</p>
            <p className="text-nowrap text-sm text-white-custome">
              {formatNumber(metrics.active_exchanges)}
            </p>
          </div>
          <div className="">
            <p className="text-xs text-light-gray-2">total exchanges</p>
            <p className="text-nowrap text-sm text-white-custome">
              {formatNumber(metrics.total_exchanges)}
            </p>
          </div>
          <div className="">
            <p className="text-xs text-light-gray-2">last updated</p>
            <p className="text-nowrap text-sm text-white-custome">
              {formatDate(metrics.last_updated)}
            </p>
          </div>
        </div>

        <div className="">
          <SelectCurrencyMetrics />

          {searchParams.currency && (
            <div className="mt-4 grid grid-cols-1 gap-y-3">
              <div>
                <p className="text-xs text-light-gray-2">total market cap</p>
                <p className="text-nowrap text-sm text-white-custome">
                  {formatCurrency(
                    metrics.quote[searchParams.currency].total_market_cap,
                    searchParams.currency,
                  )}
                </p>
              </div>
              <div>
                <p className="text-xs text-light-gray-2">
                  stablecoin volume 24h reported
                </p>
                <p className="text-nowrap text-sm text-white-custome">
                  {formatCurrency(
                    metrics.quote[searchParams.currency]
                      .stablecoin_volume_24h_reported,
                    searchParams.currency,
                  )}
                </p>
              </div>
              <div>
                <p className="text-xs text-light-gray-2">total volume 24h</p>
                <p className="text-nowrap text-sm text-white-custome">
                  {formatCurrency(
                    metrics.quote[searchParams.currency].total_volume_24h,
                    searchParams.currency,
                  )}
                </p>
              </div>
              <div>
                <p className="text-xs text-light-gray-2">
                  stablecoin 24h percentage change
                </p>
                <p className="text-nowrap text-sm text-white-custome">
                  {formatPercent(
                    metrics.quote[searchParams.currency]
                      .stablecoin_24h_percentage_change,
                  )}
                </p>
              </div>
              <div>
                <p className="text-xs text-light-gray-2">
                  total volume 24h reported
                </p>
                <p className="text-nowrap text-sm text-white-custome">
                  {formatCurrency(
                    metrics.quote[searchParams.currency]
                      .total_volume_24h_reported,
                    searchParams.currency,
                  )}
                </p>
              </div>
              <div>
                <p className="text-xs text-light-gray-2">
                  stablecoin market cap
                </p>
                <p className="text-nowrap text-sm text-white-custome">
                  {formatCurrency(
                    metrics.quote[searchParams.currency].stablecoin_market_cap,
                    searchParams.currency,
                  )}
                </p>
              </div>
              <div>
                <p className="text-xs text-light-gray-2">altcoin volume 24h</p>
                <p className="text-nowrap text-sm text-white-custome">
                  {formatCurrency(
                    metrics.quote[searchParams.currency].altcoin_volume_24h,
                    searchParams.currency,
                  )}
                </p>
              </div>
              <div>
                <p className="text-xs text-light-gray-2">
                  derivatives volume 24h
                </p>
                <p className="text-nowrap text-sm text-white-custome">
                  {formatCurrency(
                    metrics.quote[searchParams.currency].derivatives_volume_24h,
                    searchParams.currency,
                  )}
                </p>
              </div>
              <div>
                <p className="text-xs text-light-gray-2">
                  altcoin volume 24h reported
                </p>
                <p className="text-nowrap text-sm text-white-custome">
                  {formatCurrency(
                    metrics.quote[searchParams.currency]
                      .altcoin_volume_24h_reported,
                    searchParams.currency,
                  )}
                </p>
              </div>
              <div>
                <p className="text-xs text-light-gray-2">
                  derivatives volume 24h reported
                </p>
                <p className="text-nowrap text-sm text-white-custome">
                  {formatCurrency(
                    metrics.quote[searchParams.currency]
                      .derivatives_volume_24h_reported,
                    searchParams.currency,
                  )}
                </p>
              </div>
              <div>
                <p className="text-xs text-light-gray-2">altcoin market cap</p>
                <p className="text-nowrap text-sm text-white-custome">
                  {formatCurrency(
                    metrics.quote[searchParams.currency].altcoin_market_cap,
                    searchParams.currency,
                  )}
                </p>
              </div>
              <div>
                <p className="text-xs text-light-gray-2">
                  derivatives 24h percentage change
                </p>
                <p className="text-nowrap text-sm text-white-custome">
                  {formatPercent(
                    metrics.quote[searchParams.currency]
                      .derivatives_24h_percentage_change,
                  )}
                </p>
              </div>
              <div>
                <p className="text-xs text-light-gray-2">defi volume 24h</p>
                <p className="text-nowrap text-sm text-white-custome">
                  {formatCurrency(
                    metrics.quote[searchParams.currency].defi_volume_24h,
                    searchParams.currency,
                  )}
                </p>
              </div>
              <div>
                <p className="text-xs text-light-gray-2">last updated</p>
                <p className="text-nowrap text-sm text-white-custome">
                  {formatDate(
                    metrics.quote[searchParams.currency].last_updated,
                  )}
                </p>
              </div>
              <div>
                <p className="text-xs text-light-gray-2">
                  defi volume 24h reported
                </p>
                <p className="text-nowrap text-sm text-white-custome">
                  {formatCurrency(
                    metrics.quote[searchParams.currency]
                      .defi_volume_24h_reported,
                    searchParams.currency,
                  )}
                </p>
              </div>
              <div>
                <p className="text-xs text-light-gray-2">
                  total market cap yesterday
                </p>
                <p className="text-nowrap text-sm text-white-custome">
                  {formatCurrency(
                    metrics.quote[searchParams.currency]
                      .total_market_cap_yesterday,
                    searchParams.currency,
                  )}
                </p>
              </div>
              <div>
                <p className="text-xs text-light-gray-2">
                  defi 24h percentage change
                </p>
                <p className="text-nowrap text-sm text-white-custome">
                  {formatPercent(
                    metrics.quote[searchParams.currency]
                      .defi_24h_percentage_change,
                  )}
                </p>
              </div>
              <div>
                <p className="text-xs text-light-gray-2">
                  total volume 24h yesterday
                </p>
                <p className="text-nowrap text-sm text-white-custome">
                  {formatCurrency(
                    metrics.quote[searchParams.currency]
                      .total_volume_24h_yesterday,
                    searchParams.currency,
                  )}
                </p>
              </div>
              <div>
                <p className="text-xs text-light-gray-2">defi market cap</p>
                <p className="text-nowrap text-sm text-white-custome">
                  {formatCurrency(
                    metrics.quote[searchParams.currency].defi_market_cap,
                    searchParams.currency,
                  )}
                </p>
              </div>
              <div>
                <p className="text-xs text-light-gray-2">
                  total market cap yesterday percentage change
                </p>
                <p className="text-nowrap text-sm text-white-custome">
                  {formatPercent(
                    metrics.quote[searchParams.currency]
                      .total_market_cap_yesterday,
                  )}
                </p>
              </div>
              <div>
                <p className="text-xs text-light-gray-2">
                  stablecoin volume 24h
                </p>
                <p className="text-nowrap text-sm text-white-custome">
                  {formatCurrency(
                    metrics.quote[searchParams.currency].stablecoin_volume_24h,
                    searchParams.currency,
                  )}
                </p>
              </div>
              <div>
                <p className="text-xs text-light-gray-2">
                  total volume 24h yesterday percentage change
                </p>
                <p className="text-nowrap text-sm text-white-custome">
                  {formatPercent(
                    metrics.quote[searchParams.currency]
                      .total_volume_24h_yesterday,
                  )}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
