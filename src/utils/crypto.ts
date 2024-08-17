"use server";

export const getListCrypto = async (page: number) => {
  const result = await fetch(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=${page * 20}`,
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": process.env.API_KEY_COIN_MARKET_CAP || "",
      },
      next: {
        revalidate: 60,
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
    const cryptos = [];

    for (const id in result.data) {
      cryptos.push(result.data[id]);
    }
    return Number(value) ? cryptos[0] : cryptos;
  } else {
    return undefined;
  }
};

export const getCategories = async () => {
  const result = await fetch(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/categories`,
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": process.env.API_KEY_COIN_MARKET_CAP || "",
      },
      next: {
        revalidate: 30,
      },
    },
  ).then((data) => data.json());

  if (result.status.error_code === 0) {
    return result.data;
  } else {
    return undefined;
  }
};

export const getCategory = async (idCategory: string) => {
  const result = await fetch(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/category?id=${idCategory}`,
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": process.env.API_KEY_COIN_MARKET_CAP || "",
      },
      next: {
        revalidate: 30,
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

export const getListExchange = async () => {
  const result = await fetch(
    "https://pro-api.coinmarketcap.com/v1/exchange/map",
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": process.env.API_KEY_COIN_MARKET_CAP || "",
      },
      next: {
        revalidate: 30,
      },
    },
  ).then((data) => data.json());

  if (result.status.error_code === 0) {
    return result.data;
  } else {
    return undefined;
  }
};

export const getInfoExchange = async (id: string) => {
  const result = await fetch(
    `https://pro-api.coinmarketcap.com/v1/exchange/info?id=${id}`,
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": process.env.API_KEY_COIN_MARKET_CAP || "",
      },
      next: {
        revalidate: 30,
      },
    },
  ).then((data) => data.json());

  if (result.status.error_code === 0) {
    return result.data[id];
  } else {
    return undefined;
  }
};

export const getMetrics = async (convert?: string) => {
  let result;
  if (convert) {
    result = await fetch(
      `https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?convert=${convert}`,
      {
        method: "GET",
        headers: {
          "X-CMC_PRO_API_KEY": process.env.API_KEY_COIN_MARKET_CAP || "",
        },
        next: {
          revalidate: 30,
        },
      },
    ).then((data) => data.json());
  } else {
    result = await fetch(
      `https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest`,
      {
        method: "GET",
        headers: {
          "X-CMC_PRO_API_KEY": process.env.API_KEY_COIN_MARKET_CAP || "",
        },
        next: {
          revalidate: 30,
        },
      },
    ).then((data) => data.json());
  }

  if (result.status.error_code === 0) {
    return result.data;
  } else {
    return undefined;
  }
};

export const conversionCurrency = async ({
  amount,
  symbol,
}: {
  amount: number;
  symbol: string;
}) => {
  const result = await fetch(
    `https://pro-api.coinmarketcap.com/v2/tools/price-conversion?amount=${amount}&symbol=${symbol}`,
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": process.env.API_KEY_COIN_MARKET_CAP || "",
      },
      next: {
        revalidate: 30,
      },
    },
  ).then((data) => data.json());

  if (result.status.error_code === 0) {
    return result.data;
  } else {
    return undefined;
  }
};

// export const getCategoriesByName = async (slug: string) => {
//   const result = await fetch(
//     `https://pro-api.coinmarketcap.com/v1/cryptocurrency/categories?slug=${slug}`,
//     {
//       method: "GET",
//       headers: {
//         "X-CMC_PRO_API_KEY": process.env.API_KEY_COIN_MARKET_CAP || "",
//       },
//     },
//   ).then((data) => data.json());

//   if (result.status.error_code === 0) {
//     return result.data;
//   } else {
//     return undefined;
//   }
// };
