"use client";

import { DataCategories, RowData, ValueFormatterParams, GridApi } from "@/typs";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { formatCurrency, formatPercent } from "@/utils/formatData";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect, useState } from "react";

export default function ListCategories({
  categories,
}: {
  categories: DataCategories[];
}) {
  const { push } = useRouter();

  const [colDefs, setColDefs] = useState([
    {
      field: "name",
      headerName: "name",
      headerTooltip: "name",
      minWidth: 250,
      maxWidth: 300,
    },
    {
      field: "market_cap",
      headerName: "market cap",
      headerTooltip: "market cap",
      minWidth: 200,
      maxWidth: 250,
      valueFormatter: (p: ValueFormatterParams) =>
        formatCurrency(p.value, "USD"),
    },
    {
      field: "market_cap_change",
      headerName: "market cap change",
      headerTooltip: "market cap change",
      minWidth: 100,
      maxWidth: 150,
      valueFormatter: (p: ValueFormatterParams) => formatPercent(p.value),
      cellRenderer: PercentChange,
    },
    {
      field: "avg_price_change",
      headerName: "avg price change",
      headerTooltip: "avg price change",
      minWidth: 100,
      maxWidth: 150,
      valueFormatter: (p: ValueFormatterParams) => formatPercent(p.value),
      cellRenderer: PercentChange,
    },
    {
      field: "volume",
      headerName: "volume",
      headerTooltip: "volume",
      minWidth: 200,
      maxWidth: 250,
      valueFormatter: (p: ValueFormatterParams) =>
        formatCurrency(p.value, "USD"),
    },
    {
      field: "volume_change",
      headerName: "volume change",
      headerTooltip: "volume change",
      minWidth: 100,
      maxWidth: 150,
      valueFormatter: (p: ValueFormatterParams) => formatPercent(p.value),
      cellRenderer: PercentChange,
    },
  ]);

  const [rowData, setRowData] = useState<RowData[]>([
    {
      name: "",
      market_cap: 0,
      market_cap_change: 0,
      avg_price_change: 0,
      volume: 0,
      volume_change: 0,
    },
  ]);

  useEffect(() => {
    const listCategory = categories.map((data) => ({
      name: data.name,
      market_cap: data.market_cap,
      market_cap_change: data.market_cap_change,
      avg_price_change: data.avg_price_change,
      volume: data.volume,
      volume_change: data.volume_change,
      id: data.id,
    }));
    setRowData(listCategory);
  }, [categories]);

  const handleDetailCategories = (event: {
    type: string;
    source: string;
    api: GridApi;
    context: undefined;
  }) => {
    const category = event.api.getSelectedRows();
    push(`/categories/${category[0].name}?id=${category[0].id}`);
  };

  return (
    <div
      id="myGrid"
      className="ag-theme-quartz table-categories h-[80%] bg-dark px-5"
    >
      <AgGridReact<any>
        rowData={rowData}
        columnDefs={colDefs}
        rowSelection="single"
        onSelectionChanged={(event) => handleDetailCategories(event)}
      />
    </div>
  );
}

function PercentChange({ value }: { value: number }) {
  const stylePercentChange = clsx("text-sm font-semibold", {
    "text-green-custome": value > 0,
    "text-red-500": value < 0,
    "text-light-gray-2": value === 0,
  });

  const icon =
    value > 0 ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        className="bi bi-arrow-up-short rotate-45 text-green-custome"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
        />
      </svg>
    ) : value < 0 ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        className="bi bi-arrow-down-short rotate-45 text-red-500"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
        />
      </svg>
    ) : (
      <></>
    );

  return (
    <div className="flex h-full items-center">
      {icon}
      <span className={stylePercentChange}>{value.toFixed(2)}%</span>
    </div>
  );
}
