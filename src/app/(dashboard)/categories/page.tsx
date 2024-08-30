import BreadcrumbCustome from "@/custome_components/fragments/breadcrumb";
import ListCategories from "@/custome_components/fragments/list_category";
import { DataCategories } from "@/typs";
import { getCategories } from "@/utils/crypto";

export default async function Categories() {
  const categories: DataCategories[] = await getCategories();
  return (
    <div className="relative h-screen pt-32">
      <BreadcrumbCustome />
      <p className="mb-4 px-7 text-xl font-semibold text-white-custome">
        Categories
      </p>

      <ListCategories categories={categories} />
    </div>
  );
}
