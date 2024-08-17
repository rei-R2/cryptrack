"use client";

import { Input } from "@/components/ui/input";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export default function SearchCrypto() {
  const [search, setSearch] = useState<string>("");
  const [valueSearch] = useDebounce(search, 1500);
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const { push } = useRouter();

  useEffect(() => {
    push(`${pathName}?page=${page}&search=${valueSearch}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueSearch]);

  return (
    <Input
      placeholder="Search coin"
      className="mb-4 rounded-md border-none bg-light-gray-1 text-white-custome"
      onChange={(e) => setSearch(e.target.value.toLowerCase())}
    />
  );
}
