"use server";

export const getListCrypto = async (page: number) => {
  const result = await fetch(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=${page * 20 - 19}&limit=20`,
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": process.env.API_KEY_COIN_MARKET_CAP || "",
      },
    },
  ).then((data) => data.json());

  if (result.status.error_code === 0) {
    return result.data;
  } else {
    return undefined;
  }
};

export const getCrypto = async (value: string) => {
  const query = Number(value) ? `id=${value}` : `slug=${value}`;
  const result = await fetch(
    `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?${query}`,
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": process.env.API_KEY_COIN_MARKET_CAP || "",
      },
    },
  ).then((data) => data.json());

  if (result.status.error_code === 0) {
    return Number(value) ? result.data[value] : result.data;
  } else {
    return undefined;
  }
};

export const getCategories = async (page: number) => {
  const result = await fetch(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/categories?start=${page * 20 - 19}&limit=20`,
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": process.env.API_KEY_COIN_MARKET_CAP || "",
      },
    },
  ).then((data) => data.json());

  if (result.status.error_code === 0) {
    return result.data;
  } else {
    return undefined;
  }
};

export const getCategoriesByName = async (slug: string) => {
  const result = await fetch(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/categories?slug=${slug}`,
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": process.env.API_KEY_COIN_MARKET_CAP || "",
      },
    },
  ).then((data) => data.json());

  if (result.status.error_code === 0) {
    return result.data;
  } else {
    return undefined;
  }
};

export const getInfoCrypto = async (id: string) => {
  const result = await fetch(
    `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${id}`,
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": process.env.API_KEY_COIN_MARKET_CAP || "",
      },
    },
  ).then((data) => data.json());

  if (result.status.error_code === 0) {
    return result.data[id];
  } else {
    return undefined;
  }
};
