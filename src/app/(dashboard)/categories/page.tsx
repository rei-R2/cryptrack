import BreadcrumbCustome from "@/custome_components/fragments/breadcrumb";
import ListCategories from "@/custome_components/fragments/list_category";
import { DataCategories } from "@/typs";
import { getCategories } from "@/utils/crypto";

export default async function Categories() {
  const categories: DataCategories[] = await getCategories();
  return (
    <div className="mt-32 bg-dark">
      <BreadcrumbCustome />
      <p className="mb-4 px-7 text-xl font-semibold text-white-custome">
        Categories
      </p>

      <div className="table-categories relative overflow-hidden">
        <ListCategories categories={categories} />
      </div>
    </div>
  );
}
