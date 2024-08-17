import { getListExchange } from "@/utils/crypto";
import { DataMapExchange } from "@/typs";
import BreadcrumbCustome from "@/custome_components/fragments/breadcrumb";
import ListExchange from "@/custome_components/fragments/list_exchange";

export default async function Exchange() {
  const exchanges: DataMapExchange[] = await getListExchange();
  return (
    <div className="mt-32 min-h-screen bg-dark">
      <BreadcrumbCustome />
      <p className="mb-4 px-7 text-xl font-semibold text-white-custome">
        Exchange
      </p>

      <ListExchange exchanges={exchanges} />
    </div>
  );
}
