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
import { DataMapExchange } from "@/typs";
import { useRouter } from "next/navigation";

export default function ListExchange({
  exchanges,
}: {
  exchanges: DataMapExchange[];
}) {
  const { push } = useRouter();

  return (
    <div className="px-7">
      <Table>
        <TableCaption>A list of Exchanges</TableCaption>
        <TableHeader className="border-b-2 border-light-gray-1 bg-dark">
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {exchanges.map((data) => (
            <TableRow
              key={data.id}
              onClick={() => push(`/exchange/${data.name}?id=${data.id}`)}
              className="h-14 cursor-pointer border-light-gray-1"
            >
              <TableCell className="text-nowrap font-medium text-white-custome">
                {data.name}
              </TableCell>
              <TableCell className="flex h-14 items-center justify-end text-white-custome">
                <p
                  className={`${data.is_active ? "bg-green-custome" : "bg-red-500"} w-fit rounded-full px-3 py-1 text-xs`}
                >
                  {data.is_active ? "Active" : "Non-Active"}
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
