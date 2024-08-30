import BreadcrumbCustome from "@/custome_components/fragments/breadcrumb";
import ListWatchlist from "@/custome_components/fragments/list_watchlist";
import { DataCrypto } from "@/typs";
import { getCrypto } from "@/utils/crypto";
import { getUser } from "@/utils/users";

export default async function Watchlist({
  searchParams,
}: {
  searchParams: { user: string };
}) {
  const user = await getUser({ by: "id", value: searchParams.user });
  const listIdCrypto = user.data?.watchlist.map((data) => data.crypto_id);
  const watchlist =
    listIdCrypto && (await getCrypto({ by: "id", data: listIdCrypto }));

  return (
    <div className="mt-32 h-fit bg-dark">
      <BreadcrumbCustome />

      <ListWatchlist
        userId={searchParams.user}
        watchlist={watchlist as DataCrypto[]}
      />
    </div>
  );
}
