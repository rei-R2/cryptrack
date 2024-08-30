export interface DataPriceUSD {
  price: number;
  volume_24h: number;
  volume_change_24h: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  percent_change_30d: number;
  percent_change_60d: number;
  percent_change_90d: number;
  market_cap: number;
  market_cap_dominance: number;
  fully_diluted_market_cap: number;
  tvl: string | number | null;
  last_updated: string;
}

export interface DataCrypto {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  num_market_pairs: number;
  date_added: string;
  tags: string[];
  max_supply: number;
  circulating_supply: number;
  total_supply: number;
  infinite_supply: false;
  platform: string | null;
  cmc_rank: number;
  self_reported_circulating_supply: null;
  self_reported_market_cap: string | number | null;
  tvl_ratio: string | number | null;
  last_updated: string;
  quote: {
    USD: DataPriceUSD;
  };
}

export interface DataCategories {
  id: string;
  name: string;
  title: string;
  description: string;
  num_tokens: number;
  avg_price_change: number;
  market_cap: number;
  market_cap_change: number;
  volume: number;
  volume_change: number;
  last_updated: string;
}

export interface DataCategory {
  id: string;
  name: string;
  title: string;
  description: string;
  num_tokens: number;
  last_updated: string;
  avg_price_change: number;
  market_cap: number;
  market_cap_change: number;
  volume: number;
  volume_change: number;
  coins: DataCrypto[];
}

export interface InfoCrypto {
  id: number;
  name: string;
  symbol: string;
  category: string;
  description: string;
  slug: string;
  logo: string;
  subreddit: string;
  notice: string;
  tags: string[];
  "tag-names": string[];
  "tag-groups": string[];
  urls: {
    website: string[];
    twitter: string[];
    message_board: string[];
    chat: string[];
    facebook: string[];
    explorer: string[];
    reddit: string[];
    technical_doc: string[];
    source_code: string[];
    announcement: string[];
  };
  platform: string | null;
  date_added: string;
  twitter_username: string;
  is_hidden: number;
  date_launched: string;
  contract_address: [];
  self_reported_circulating_supply: string | null;
  self_reported_tags: string | null;
  self_reported_market_cap: string | null;
  infinite_supply: boolean;
}

export interface DataMapExchange {
  id: number;
  name: string;
  slug: string;
  is_active: number;
  is_listed: number;
  is_redistributable: number;
  first_historical_data: string;
  last_historical_data: string;
}

export interface DataDetailExchange {
  id: number;
  name: string;
  slug: string;
  description: string;
  notice: string;
  logo: string;
  countries: string[];
  fiats: string[];
  urls: {
    fee: string[];
    actual: string[];
    chat: string[];
    website: string[];
    blog: string[];
    twitter: string[];
  };
  tags: null;
  type: string;
  porStatus: number;
  porAuditStatus: number;
  walletSourceStatus: number;
  porSwitch: string;
  date_launched: string;
  is_hidden: number;
  is_redistributable: number;
  maker_fee: number;
  taker_fee: number;
  spot_volume_usd: number;
  spot_volume_last_updated: string;
  weekly_visits: number;
}

export interface DataMetrics {
  active_cryptocurrencies: number;
  total_cryptocurrencies: number;
  active_market_pairs: number;
  active_exchanges: number;
  total_exchanges: number;
  eth_dominance: number;
  btc_dominance: number;
  eth_dominance_yesterday: number;
  btc_dominance_yesterday: number;
  eth_dominance_24h_percentage_change: number;
  btc_dominance_24h_percentage_change: number;
  defi_volume_24h: number;
  defi_volume_24h_reported: number;
  defi_market_cap: number;
  defi_24h_percentage_change: number;
  stablecoin_volume_24h: number;
  stablecoin_volume_24h_reported: number;
  stablecoin_market_cap: number;
  stablecoin_24h_percentage_change: number;
  derivatives_volume_24h: number;
  derivatives_volume_24h_reported: number;
  derivatives_24h_percentage_change: number;
  quote: {
    [key: string]: {
      total_market_cap: number;
      total_volume_24h: number;
      total_volume_24h_reported: number;
      altcoin_volume_24h: number;
      altcoin_volume_24h_reported: number;
      altcoin_market_cap: number;
      defi_volume_24h: number;
      defi_volume_24h_reported: number;
      defi_24h_percentage_change: number;
      defi_market_cap: number;
      stablecoin_volume_24h: number;
      stablecoin_volume_24h_reported: number;
      stablecoin_24h_percentage_change: number;
      stablecoin_market_cap: number;
      derivatives_volume_24h: number;
      derivatives_volume_24h_reported: number;
      derivatives_24h_percentage_change: number;
      total_market_cap_yesterday: number;
      total_volume_24h_yesterday: number;
      total_market_cap_yesterday_percentage_change: number;
      total_volume_24h_yesterday_percentage_change: number;
      last_updated: string;
    };
  };
  last_updated: string;
}

export interface DataConversion {
  id: number;
  symbol: string;
  name: string;
  amount: number;
  last_updated: string;
  quote: {
    USD: {
      price: number;
      last_updated: string;
    };
  };
}

export interface Watchlist {
  id: number;
  crypto_id: string;
  created_at: Date;
  user_id: string;
}

export interface DataUser {
  id: string;
  username: string;
  email: string;
  password: string;
  img: string;
  watchlist: Watchlist[];
}

export interface RowData {
  name: string;
  market_cap: number;
  market_cap_change: number;
  avg_price_change: number;
  volume: number;
  volume_change: number;
}

export interface ValueFormatterParams<TValue = number> {
  value: TValue;
}

export interface GridApi {
  getSelectedRows: () => DataCategories[];
}

export interface Sessionn {
  user: {
    name: string | undefined;
    email: string;
    image: string | undefined;
  };
}
