import NextListCrypto from "@/custome_components/elements/next_list_crypto";
import SearchCrypto from "@/custome_components/elements/search_crypto";
import BreadcrumbCustome from "@/custome_components/fragments/breadcrumb";
import ListCardWatchlist from "@/custome_components/fragments/list_card_watchlist";
import ListCrypto from "@/custome_components/fragments/list_crypto";
import { getCrypto, getListCrypto } from "@/utils/crypto";
import { redirect } from "next/navigation";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    page: string;
    search: string;
  };
}) {
  if (!searchParams.page) redirect("/home?page=1");

  const crypto = searchParams.search
    ? await getCrypto({ by: "slug", data: searchParams.search })
    : await getListCrypto(Number(searchParams.page));

  return (
    <div className="mt-32 min-h-screen bg-dark">
      <BreadcrumbCustome />
      <p className="px-7 text-xl font-semibold text-white-custome">Watchlist</p>

      <ListCardWatchlist />

      <div className="relative overflow-hidden px-7">
        <p className="mb-5 text-xl font-semibold text-white-custome">
          List Crypto
        </p>
        <SearchCrypto />
        <ListCrypto crypto={crypto} />
        {searchParams.search ? <></> : crypto && <NextListCrypto />}
      </div>
    </div>
  );
}
