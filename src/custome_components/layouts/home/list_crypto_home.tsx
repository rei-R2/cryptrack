"use client";

import { Input } from "@/components/ui/input";
import { DataCrypto } from "@/typs";
import { getListCrypto, getCrypto } from "@/utils/crypto";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import ListCrypto from "@/custome_components/fragments/list_crypto";
import { Button } from "@/components/ui/button";

export default function ListCryptoHome() {
  const [page, setPage] = useState<number>(1);
  const [crypto, setCrypto] = useState<DataCrypto[]>([]);
  const [search, setSearch] = useState<string>("");
  const [valueSearch] = useDebounce(search, 1000);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setListCrypto = async (page: number) => {
    const result: DataCrypto[] = await getListCrypto(page);
    if (result) {
      setCrypto((state) => (page === 1 ? result : [...state, ...result]));
      setIsLoading(false);
    }
  };

  const setListCryptoBySearch = async (value: string) => {
    const result = await getCrypto(value);
    const cryptoSearch = [];
    for (const coin in result) {
      cryptoSearch.push(result[coin]);
    }
    result && setCrypto(cryptoSearch);
  };

  useEffect(() => {
    setListCrypto(page);
  }, [page]);

  useEffect(() => {
    if (valueSearch) {
      setListCryptoBySearch(valueSearch);
    } else {
      setPage(1);
      setListCrypto(1);
    }
  }, [valueSearch]);

  return (
    <div className="relative overflow-hidden px-7">
      <Input
        placeholder="Search coin"
        className="mb-3 rounded-md border-none bg-light-gray-1 text-white-custome"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <p className="mb-5 text-xl font-semibold text-white-custome">
        List Crypto
      </p>

      <ListCrypto crypto={crypto} />

      <Button
        onClick={() => {
          setPage(page + 1);
          setIsLoading(true);
        }}
        disabled={isLoading}
        className={`${search || crypto.length === 0 ? "hidden" : "block"} ${isLoading && "cursor-progress"} absolute bottom-0 left-1/2 w-[120%] -translate-x-1/2 bg-gradient-to-b from-dark to-light-gray-1 text-sm font-semibold text-light-gray-2 hover:bg-inherit`}
      >
        {!isLoading ? "see more" : "loading..."}
      </Button>
    </div>
  );
}
