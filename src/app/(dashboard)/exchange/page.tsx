import { getListExchange } from "@/utils/crypto";
import { DataMapExchange } from "@/typs";
import BreadcrumbCustome from "@/custome_components/fragments/breadcrumb";
import ListExchange from "@/custome_components/fragments/list_exchange";

export default async function Exchange() {
  const exchanges: DataMapExchange[] = await getListExchange();
  return (
    <div className="relative mt-32 h-fit md:ml-56 md:mt-0">
      <BreadcrumbCustome />
      <div className="absolute top-14 hidden h-1 w-full bg-light-gray-1 md:block" />

      <div className="md:mt-5">
        <p className="mb-4 px-7 text-xl font-semibold text-white-custome">
          Exchange
        </p>

        <ListExchange exchanges={exchanges} />
      </div>
    </div>
  );
}
