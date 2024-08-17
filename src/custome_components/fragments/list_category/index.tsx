"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataCategories } from "@/typs";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export default function ListCategories({
  categories,
}: {
  categories: DataCategories[];
}) {
  const { push } = useRouter();

  return (
    <Table className="ms-7 w-[1000px] overflow-hidden">
      <TableHeader className="sticky top-0 border-b-2 border-light-gray-1 bg-dark">
        <TableRow>
          <TableHead className="w-[300px]">name</TableHead>
          <TableHead>market cap</TableHead>
          <TableHead>volume</TableHead>
          <TableHead className="text-nowrap text-center">
            market cap change
          </TableHead>
          <TableHead className="text-nowrap text-center">
            avg price change
          </TableHead>
          <TableHead className="text-nowrap text-right">volume</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((data) => (
          <TableRow
            key={data.id}
            className="cursor-pointer border-light-gray-1 py-1"
            onClick={() => push(`/categories/${data.name}?id=${data.id}`)}
          >
            <TableCell className="font-medium text-white-custome">
              {data.name}
            </TableCell>
            <TableCell className="text-white-custome">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(data.market_cap)}
            </TableCell>
            <TableCell className="text-white-custome">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(data.volume)}
            </TableCell>
            <TableCell>
              <TableValueChange value={Number(data.market_cap_change)} />
            </TableCell>
            <TableCell className="text-center text-white-custome">
              <TableValueChange value={Number(data.avg_price_change)} />
            </TableCell>
            <TableCell className="text-right text-white-custome">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(data.volume)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function TableValueChange({ value }: { value: number }) {
  const styleTableValueChange = clsx("text-center", {
    "text-green-custome": value > 0,
    "text-red-500": value < 0,
    "text-light-gray-2": value === 0,
  });

  return <p className={styleTableValueChange}>{value.toFixed(2)}%</p>;
}
