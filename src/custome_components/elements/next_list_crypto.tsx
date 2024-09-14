"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function NextListCrypto() {
  const [page, setPage] = useState<number>(1);
  const pathName = usePathname();
  const { push } = useRouter();

  useEffect(() => {
    push(`${pathName}?page=${page}`, {
      scroll: false,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <Button
      onClick={() => {
        setPage(page + 1);
      }}
      className={`absolute bottom-0 left-1/2 w-full -translate-x-1/2 rounded-none bg-inherit bg-gradient-to-b from-dark/0 to-dark py-5 text-sm font-semibold text-light-gray-2 hover:bg-inherit md:fixed md:bottom-0 md:left-56 md:w-[75vw] md:translate-x-0 lg:absolute lg:bottom-14 lg:left-1/2 lg:w-full lg:-translate-x-1/2`}
    >
      see more
    </Button>
  );
}
