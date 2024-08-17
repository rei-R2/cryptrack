export const formatCurrency = (value: number, code: string) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: `${code}`,
  }).format(value);
};

export const formatNumber = (value: number) => {
  return new Intl.NumberFormat("en-US", { style: "decimal" }).format(value);
};

export const formatPercent = (value: number) => {
  return new Intl.NumberFormat("en-US", { style: "percent" }).format(value);
};

export const formatDate = (value: string) => {
  return new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
    new Date(value),
  );
};
