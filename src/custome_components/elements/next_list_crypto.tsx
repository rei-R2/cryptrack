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
      className={`absolute bottom-0 left-1/2 w-full -translate-x-1/2 bg-gradient-to-b from-dark to-light-gray-1 py-5 text-sm font-semibold text-light-gray-2 hover:bg-inherit`}
    >
      see more
    </Button>
  );
}
