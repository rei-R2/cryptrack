"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { DataPriceUSD } from "@/typs";
import { Bar, BarChart, CartesianGrid, Cell, LabelList } from "recharts";

const chartConfig = {
  percent: {
    label: "change(%)",
  },
} satisfies ChartConfig;

export default function ChartDetailCrypto({
  dataPriceChange,
}: {
  dataPriceChange: DataPriceUSD;
}) {
  const chartData = [
    {
      time: "90d",
      percent: Number(dataPriceChange.percent_change_90d.toFixed(2)),
    },
    {
      time: "60d",
      percent: Number(dataPriceChange.percent_change_60d.toFixed(2)),
    },
    {
      time: "30d",
      percent: Number(dataPriceChange.percent_change_30d.toFixed(2)),
    },
    {
      time: "7d",
      percent: Number(dataPriceChange.percent_change_7d.toFixed(2)),
    },
    {
      time: "24h",
      percent: Number(dataPriceChange.percent_change_24h.toFixed(2)),
    },
    {
      time: "1h",
      percent: Number(dataPriceChange.percent_change_1h.toFixed(2)),
    },
  ];

  return (
    <>
      <ChartContainer
        config={chartConfig}
        className="mt-10 min-h-[200px] w-full"
      >
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} className="stroke-light-gray-1" />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel hideIndicator />}
          />
          <Bar dataKey="percent">
            <LabelList position="top" dataKey="time" fillOpacity={1} />
            {chartData.map((item) => (
              <Cell
                key={item.time}
                fill={
                  item.percent > 0
                    ? "hsl(var(--chart-1))"
                    : "hsl(var(--chart-2))"
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
      <p className="mt-2 text-center text-sm text-light-gray-2">price change</p>
    </>
  );
}
