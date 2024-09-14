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
    <div className="relative mt-32 h-full bg-dark pb-10 md:ml-56 md:mt-0 md:h-[93.5%] md:pb-0">
      <BreadcrumbCustome />
      <div className="absolute top-14 hidden h-1 w-full bg-light-gray-1 md:block" />

      <div className="px-7 md:pt-5">
        <p className="mb-4 text-xl font-semibold text-white-custome">Metrics</p>

        <div className="flex flex-col md:gap-x-10 lg:flex-row">
          <div className="mb-6 grid h-fit w-full grid-cols-2 gap-y-3 bg-light-gray-1 p-3 md:p-6">
            <div>
              <p className="text-xs text-light-gray-2 md:text-sm">
                active cryptocurrencies
              </p>
              <p className="text-nowrap text-sm text-white-custome md:text-base">
                {formatNumber(metrics.active_cryptocurrencies)}
              </p>
            </div>
            <div>
              <p className="text-xs text-light-gray-2 md:text-sm">
                eth dominance
              </p>
              <p className="text-nowrap text-sm text-white-custome md:text-base">
                {formatPercent(metrics.eth_dominance)}
              </p>
            </div>
            <div>
              <p className="text-xs text-light-gray-2 md:text-sm">
                total cryptocurrencies
              </p>
              <p className="text-nowrap text-sm text-white-custome md:text-base">
                {formatNumber(metrics.total_cryptocurrencies)}
              </p>
            </div>
            <div>
              <p className="text-xs text-light-gray-2 md:text-sm">
                btc dominance
              </p>
              <p className="text-nowrap text-sm text-white-custome md:text-base">
                {formatPercent(metrics.btc_dominance)}
              </p>
            </div>
            <div>
              <p className="text-xs text-light-gray-2 md:text-sm">
                active market pairs
              </p>
              <p className="text-nowrap text-sm text-white-custome md:text-base">
                {formatNumber(metrics.active_market_pairs)}
              </p>
            </div>
            <div>
              <p className="text-xs text-light-gray-2 md:text-sm">
                active exchanges
              </p>
              <p className="text-nowrap text-sm text-white-custome md:text-base">
                {formatNumber(metrics.active_exchanges)}
              </p>
            </div>
            <div>
              <p className="text-xs text-light-gray-2 md:text-sm">
                total exchanges
              </p>
              <p className="text-nowrap text-sm text-white-custome md:text-base">
                {formatNumber(metrics.total_exchanges)}
              </p>
            </div>
            <div>
              <p className="text-xs text-light-gray-2 md:text-sm">
                last updated
              </p>
              <p className="text-nowrap text-sm text-white-custome md:text-base">
                {formatDate(metrics.last_updated)}
              </p>
            </div>
          </div>

          <div className="w-full">
            <SelectCurrencyMetrics />

            {searchParams.currency && (
              <div className="relative mt-4 grid h-full grid-cols-1 gap-y-3 md:h-[57vh] md:grid-cols-2 md:gap-y-4 md:overflow-y-auto md:pb-20 lg:h-[75vh]">
                <div>
                  <p className="text-xs text-light-gray-2 md:text-sm">
                    total market cap
                  </p>
                  <p className="text-nowrap text-sm text-white-custome md:text-base">
                    {formatCurrency(
                      metrics.quote[searchParams.currency].total_market_cap,
                      searchParams.currency,
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-light-gray-2 md:text-sm">
                    stablecoin volume 24h reported
                  </p>
                  <p className="text-nowrap text-sm text-white-custome md:text-base">
                    {formatCurrency(
                      metrics.quote[searchParams.currency]
                        .stablecoin_volume_24h_reported,
                      searchParams.currency,
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-light-gray-2 md:text-sm">
                    total volume 24h
                  </p>
                  <p className="text-nowrap text-sm text-white-custome md:text-base">
                    {formatCurrency(
                      metrics.quote[searchParams.currency].total_volume_24h,
                      searchParams.currency,
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-light-gray-2 md:text-sm">
                    stablecoin 24h percentage change
                  </p>
                  <p className="text-nowrap text-sm text-white-custome md:text-base">
                    {formatPercent(
                      metrics.quote[searchParams.currency]
                        .stablecoin_24h_percentage_change,
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-light-gray-2 md:text-sm">
                    total volume 24h reported
                  </p>
                  <p className="text-nowrap text-sm text-white-custome md:text-base">
                    {formatCurrency(
                      metrics.quote[searchParams.currency]
                        .total_volume_24h_reported,
                      searchParams.currency,
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-light-gray-2 md:text-sm">
                    stablecoin market cap
                  </p>
                  <p className="text-nowrap text-sm text-white-custome md:text-base">
                    {formatCurrency(
                      metrics.quote[searchParams.currency]
                        .stablecoin_market_cap,
                      searchParams.currency,
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-light-gray-2 md:text-sm">
                    altcoin volume 24h
                  </p>
                  <p className="text-nowrap text-sm text-white-custome md:text-base">
                    {formatCurrency(
                      metrics.quote[searchParams.currency].altcoin_volume_24h,
                      searchParams.currency,
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-light-gray-2 md:text-sm">
                    derivatives volume 24h
                  </p>
                  <p className="text-nowrap text-sm text-white-custome md:text-base">
                    {formatCurrency(
                      metrics.quote[searchParams.currency]
                        .derivatives_volume_24h,
                      searchParams.currency,
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-light-gray-2 md:text-sm">
                    altcoin volume 24h reported
                  </p>
                  <p className="text-nowrap text-sm text-white-custome md:text-base">
                    {formatCurrency(
                      metrics.quote[searchParams.currency]
                        .altcoin_volume_24h_reported,
                      searchParams.currency,
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-light-gray-2 md:text-sm">
                    derivatives volume 24h reported
                  </p>
                  <p className="text-nowrap text-sm text-white-custome md:text-base">
                    {formatCurrency(
                      metrics.quote[searchParams.currency]
                        .derivatives_volume_24h_reported,
                      searchParams.currency,
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-light-gray-2 md:text-sm">
                    altcoin market cap
                  </p>
                  <p className="text-nowrap text-sm text-white-custome md:text-base">
                    {formatCurrency(
                      metrics.quote[searchParams.currency].altcoin_market_cap,
                      searchParams.currency,
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-light-gray-2 md:text-sm">
                    derivatives 24h percentage change
                  </p>
                  <p className="text-nowrap text-sm text-white-custome md:text-base">
                    {formatPercent(
                      metrics.quote[searchParams.currency]
                        .derivatives_24h_percentage_change,
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-light-gray-2 md:text-sm">
                    defi volume 24h
                  </p>
                  <p className="text-nowrap text-sm text-white-custome md:text-base">
                    {formatCurrency(
                      metrics.quote[searchParams.currency].defi_volume_24h,
                      searchParams.currency,
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-light-gray-2 md:text-sm">
                    last updated
                  </p>
                  <p className="text-nowrap text-sm text-white-custome md:text-base">
                    {formatDate(
                      metrics.quote[searchParams.currency].last_updated,
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-light-gray-2 md:text-sm">
                    defi volume 24h reported
                  </p>
                  <p className="text-nowrap text-sm text-white-custome md:text-base">
                    {formatCurrency(
                      metrics.quote[searchParams.currency]
                        .defi_volume_24h_reported,
                      searchParams.currency,
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-light-gray-2 md:text-sm">
                    total market cap yesterday
                  </p>
                  <p className="text-nowrap text-sm text-white-custome md:text-base">
                    {formatCurrency(
                      metrics.quote[searchParams.currency]
                        .total_market_cap_yesterday,
                      searchParams.currency,
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-light-gray-2 md:text-sm">
                    defi 24h percentage change
                  </p>
                  <p className="text-nowrap text-sm text-white-custome md:text-base">
                    {formatPercent(
                      metrics.quote[searchParams.currency]
                        .defi_24h_percentage_change,
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-light-gray-2 md:text-sm">
                    total volume 24h yesterday
                  </p>
                  <p className="text-nowrap text-sm text-white-custome md:text-base">
                    {formatCurrency(
                      metrics.quote[searchParams.currency]
                        .total_volume_24h_yesterday,
                      searchParams.currency,
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-light-gray-2 md:text-sm">
                    defi market cap
                  </p>
                  <p className="text-nowrap text-sm text-white-custome md:text-base">
                    {formatCurrency(
                      metrics.quote[searchParams.currency].defi_market_cap,
                      searchParams.currency,
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-light-gray-2 md:text-sm">
                    total market cap yesterday percentage change
                  </p>
                  <p className="text-nowrap text-sm text-white-custome md:text-base">
                    {formatPercent(
                      metrics.quote[searchParams.currency]
                        .total_market_cap_yesterday,
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-light-gray-2 md:text-sm">
                    stablecoin volume 24h
                  </p>
                  <p className="text-nowrap text-sm text-white-custome md:text-base">
                    {formatCurrency(
                      metrics.quote[searchParams.currency]
                        .stablecoin_volume_24h,
                      searchParams.currency,
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-light-gray-2 md:text-sm">
                    total volume 24h yesterday percentage change
                  </p>
                  <p className="text-nowrap text-sm text-white-custome md:text-base">
                    {formatPercent(
                      metrics.quote[searchParams.currency]
                        .total_volume_24h_yesterday,
                    )}
                  </p>
                </div>
                <div className="fixed bottom-0 hidden h-14 bg-gradient-to-b from-dark/0 to-dark md:block md:w-full" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
