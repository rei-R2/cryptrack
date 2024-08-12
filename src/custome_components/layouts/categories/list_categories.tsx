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
import { getCategories, getCategoriesByName } from "@/utils/crypto";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDebounce } from "use-debounce";
import ListCategoriesSkeleton from "@/custome_components/fragments/skeleton/list_categories";
import { useRouter } from "next/navigation";

export default function ListCategories() {
  const [page, setPage] = useState<number>(1);
  const [categories, setCategories] = useState<DataCategories[] | []>([]);
  const [search, setSearch] = useState<string>("");
  const [valueSearch] = useDebounce(search, 1000);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { push } = useRouter();

  const setListCategories = async (page: number) => {
    const result = await getCategories(page);
    if (result) {
      setCategories((state) => (page === 1 ? result : [...state, ...result]));
      setIsLoading(false);
    }
  };

  const setListCategoriesByName = async (value: string) => {
    const result = await getCategoriesByName(value);
    result && setCategories(result);
  };

  const handleDetailCategory = (id: string) =>
    push(`/categories/${id}?test=123`);

  useEffect(() => {
    setListCategories(page);
  }, [page]);

  useEffect(() => {
    if (valueSearch) {
      setListCategoriesByName(valueSearch);
    } else {
      setPage(1);
      setListCategories(1);
    }
  }, [valueSearch]);

  return (
    <>
      <div className="px-7">
        <Input
          placeholder="Search Categories"
          className="mb-3 rounded-md border-none bg-light-gray-1 text-white-custome"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>

      {categories.length === 0 ? (
        <ListCategoriesSkeleton />
      ) : (
        <Table className="ms-7 h-52 w-[1000px] overflow-hidden">
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
                onClick={() => handleDetailCategory(data.id)}
                className="border-light-gray-1 py-1"
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
      )}

      <Button
        onClick={() => {
          setPage(page + 1);
          setIsLoading(true);
        }}
        disabled={isLoading}
        className={`${valueSearch || categories.length === 0 ? "hidden" : "block"} ${isLoading && "cursor-progress"} absolute bottom-0 left-1/2 mt-5 w-full -translate-x-1/2 bg-gradient-to-b from-dark to-light-gray-1 text-sm font-semibold text-light-gray-2 hover:bg-inherit`}
      >
        {!isLoading ? "see more" : "loading..."}
      </Button>
    </>
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
