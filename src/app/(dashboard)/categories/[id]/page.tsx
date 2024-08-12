import BreadcrumbCustome from "@/custome_components/fragments/breadcrumb";
import ListCryptoCategory from "@/custome_components/layouts/categories/list_crypto_category";

export default function Category({ params }: { params: { id: string } }) {
  return (
    <div className="mt-32">
      <BreadcrumbCustome />

      <ListCryptoCategory idCategory={params.id} />
    </div>
  );
}
