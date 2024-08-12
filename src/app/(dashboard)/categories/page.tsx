import BreadcrumbCustome from "@/custome_components/fragments/breadcrumb";
import ListCategories from "@/custome_components/layouts/categories/list_categories";

export default function Categories() {
  return (
    <div className="mt-32 bg-dark">
      <BreadcrumbCustome />
      <p className="mb-4 px-7 text-xl font-semibold text-white-custome">
        Categories
      </p>

      <div className="table-categories relative overflow-hidden pb-10">
        <ListCategories />
      </div>
    </div>
  );
}
