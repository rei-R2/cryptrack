import BreadcrumbCustome from "@/custome_components/fragments/breadcrumb";
import ListCategories from "@/custome_components/fragments/list_category";
import { DataCategories } from "@/typs";
import { getCategories } from "@/utils/crypto";

export default async function Categories() {
  const categories: DataCategories[] = await getCategories();
  return (
    <div className="relative mt-32 h-fit bg-dark md:ml-56 md:mt-0">
      <BreadcrumbCustome />
      <div className="absolute top-14 hidden h-1 w-full bg-light-gray-1 md:block" />
      <div className="md:mt-5">
        <p className="mb-4 px-7 text-xl font-semibold text-white-custome">
          Categories
        </p>

        <ListCategories categories={categories} />
      </div>
    </div>
  );
}
