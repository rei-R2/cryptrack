"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Watchlist } from "@/typs";
import { addWatchlist, getUser } from "@/utils/users";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";

export default function AddWatchlist({ idCrypto }: { idCrypto: number }) {
  const { data } = useSession();
  const [watchlist, setWatchlist] = useState<Watchlist[]>([]);
  const [inWatchlist, setInWatchlist] = useState<boolean>(false);

  useEffect(() => {
    const getWatchlist = watchlist.find(
      (data) => Number(data.crypto_id) === idCrypto,
    );
    if (getWatchlist) {
      setInWatchlist(true);
    } else {
      setInWatchlist(false);
    }
  }, [idCrypto, watchlist]);

  const getUserById = useCallback(async () => {
    try {
      const user = await getUser({ by: "id", value: data?.user.id as string });
      if (user.status !== 200) throw new Error(user.message);
      setWatchlist(user.data!.watchlist);
    } catch (error) {
      console.log(error);
    }
  }, [data]);

  const add = async (userId: string, cryptoId: number) => {
    const result = await addWatchlist(userId, cryptoId.toString());

    if (result.status === 200) {
      toast({
        title: "Success to add watchlist",
        description: result.message,
        style: {
          backgroundColor: "#272727",
          color: "#F9F9F9",
          borderColor: "#272727",
        },
      });
    } else {
      toast({
        title: "Faild to add watchlist",
        description: result.message,
      });
    }
  };

  const handleAdd = async () => {
    const user = await getUser({ by: "id", value: data?.user.id as string });
    const checkWatchlist = user.data?.watchlist.find(
      (data) => Number(data.crypto_id) === idCrypto,
    );
    if (!checkWatchlist) {
      add(data?.user.id as string, idCrypto);
      getUserById();
    } else {
      toast({
        title: "Faild to add watchlist",
        description: "Crypto already exist on watchlist",
      });
    }
  };

  useEffect(() => {
    getUserById();
  }, [getUserById]);

  return (
    <Button
      onClick={handleAdd}
      disabled={inWatchlist}
      title="Add Watchlist"
      className="aspect-square h-fit w-fit rounded-full bg-transparent p-1 transition duration-500 hover:bg-light-gray-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        className="bi bi-plus text-light-gray-2"
        viewBox="0 0 16 16"
      >
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
      </svg>
    </Button>
  );
}
