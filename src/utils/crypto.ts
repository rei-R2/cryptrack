"use server";

export const getCrypto = async (page: number) => {
  const crypto = await fetch(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=${page * 10 - 9}&limit=10`,
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": process.env.API_KEY_COIN_MARKET_CAP || "",
      },
    },
  ).then((data) => data.json());

  const result = await crypto;
  if (result.status.error_code === 0) {
    return crypto.data;
  } else {
    return undefined;
  }
};
