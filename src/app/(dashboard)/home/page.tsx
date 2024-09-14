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
    <div className="relative mt-32 h-full bg-dark md:ml-56 md:mt-0">
      <BreadcrumbCustome />
      <div className="absolute top-14 hidden h-1 w-full bg-light-gray-1 md:block" />

      <div className="flex h-full w-full flex-col md:rounded-none md:pt-5 lg:flex-row">
        <div>
          <p className="px-7 text-xl font-semibold text-white-custome md:pb-3">
            Watchlist
          </p>
          <ListCardWatchlist />
        </div>

        <div className="table-categories relative w-full overflow-hidden px-7 md:overflow-x-auto">
          <p className="mb-5 text-xl font-semibold text-white-custome md:mb-6">
            List Crypto
          </p>
          <SearchCrypto />

          <ListCrypto crypto={crypto} />
          {searchParams.search ? <></> : crypto && <NextListCrypto />}
        </div>
      </div>
    </div>
  );
}
